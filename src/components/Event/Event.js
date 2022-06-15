import React, { useEffect, useState } from 'react';
import qs from 'qs'
import moment from "moment"
import Filter from './Filter';
import './Event.css';


function EventComponent({ ...props }) {

    const [address, setAddress] = useState(null)
    const [dateRange, setDateRange] = useState([null, null])
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [category, setCategory] = useState("")
    const [isVirtual, setIsVirtual] = useState("")
    const [resetFilter, setResetFilter] = useState(false)

    useEffect(() => {
        props.getCategoriesData();
        props.getEventList();
    }, []);

    const fetchFilteredEvents = () => {
        const filterString = qs.stringify({
            address: address,
            startDate: startDate,
            endDate: endDate,
            category: category,
            isVirtual: isVirtual
        })
        props.getEventList(filterString);
    }

    useEffect(() => {
        fetchFilteredEvents();
    }, [address, startDate, endDate, category, isVirtual]);

    const handleFilterChange = (value, type) => {
        if (type === 'address') {
            setAddress(value)
        } else if (type === 'category') {
            setCategory(value)
        } else if (type === 'isVirtual') {
            setIsVirtual(value)
        } else if (type === 'date') {
          if (value) {
            setEndDate(moment(value[1]).format('YYYY-MM-DD'))
            setStartDate(moment(value[0]).format('YYYY-MM-DD'))
            setDateRange([moment(value[0]).format('YYYY-MM-DD'), moment(value[1]).format('YYYY-MM-DD')])
          } else {
            setEndDate(null)
            setStartDate(null)
            setDateRange([null, null])
          }
        }
    }

    const clearFilter = () => {
        setAddress(null)
        setDateRange([null, null])
        setCategory("")
        setIsVirtual("")
        setEndDate(null)
        setStartDate(null)
        setResetFilter(!resetFilter)
      }

    let loadData = (
        props.event.eventList.length ?
        props.event.eventList.map(res => {
            return (
                <div className="col-lg-4 col-md-4 col-sm-12 m-b20" key={res.id}>
                    <div className={`card`}>
                        <div className="card-body card-font-size">
                            <div className="row m-b5">
                                <div className="col-lg-10 col-md-10 col-sm-12">
                                    <h5 className="card-title">
                                        <span>{res.title}</span>
                                    </h5>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12 justify-content-end d-flex">
                                    <h5 className="card-title">
                                        {
                                            res.isVirtual ?
                                                <span className="card-text badge badge-pill badge-secondary">
                                                    {res.isVirtual ? 'Virtual' : 'Face To Face'}
                                                </span>
                                            : null
                                        }
                                    </h5>
                                </div>
                            </div>
                            <div className="row m-b5">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h5 className="card-title">
                                        <i className='fa fa-calendar'></i>&nbsp;
                                        <span className="card-text">
                                            {moment(res.date).format('YYYY-MM-DD')}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                            <div className="row m-b5">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h5 className="card-title">
                                        Category<br />
                                        <span className="card-text">
                                            {res.category}
                                        </span>
                                    </h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h5 className="card-title">
                                        <i className='fa fa-map-marker'></i>&nbsp;
                                        Location<br />
                                        <span className="card-text">
                                            {res.address}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                            <div className="row m-b5">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <h5 className="card-title">
                                        <span className="card-text">
                                            {res.description}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        :
        <div className="col-lg-4 col-md-12 col-md-12 m-b20">
            <div className="alert alert-primary" role="alert">
                No Data Available!
            </div>
        </div>
    )

    return (
        <div className="m-t10">
            <div className="card-group">
                <div className="row w-100">
                    <Filter
                        key={resetFilter}
                        categoryData={props.event.categoryData}
                        handleFilterChange={handleFilterChange}
                        clearFilter={clearFilter}
                        dateRange={dateRange}
                        address={address}
                        category={category}
                        isVirtual={isVirtual}
                    />
                </div>
                <div className="row w-100">
                    { loadData }
                </div>
            </div>
        </div>
    );
}

export default EventComponent
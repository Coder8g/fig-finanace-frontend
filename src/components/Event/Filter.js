import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const Index = ({
  handleFilterChange,
  clearFilter,
  dateRange,
  address,
  isVirtual,
  category,
  categoryData
}) => {
  const [keywords, setKeyword] = useState(address ? address : '')

  useEffect(() => {
    setKeyword(address)
  }, [address])

  const handleChange = (value, type) => {
    handleFilterChange(value, type)
  }

  const handleSearchInput = e => {
    setKeyword(e.target.value)
    if (e.target.value === '') {
      handleFilterChange(e.target.value, 'address')
    }
  }

  return (
    <div className="row py-3">
      <div className="col-md-3 py-2">
        <label className="filter-label">Event Date Range</label>
        <DateRangePicker onChange={value => handleChange(value, 'date')} format="y-MM-dd" value={dateRange} />
      </div>
      <div className="col-md-3 py-2">
        <label className="filter-label">Category</label>
        <Form>
          <Form.Group controlId="formGridState">
            <Form.Control
                as="select"
                value={category}
                onChange={event => handleChange(event.target.value, 'category')}>
                <option value="">All</option>
                {
                    categoryData.map(cur => {
                        return (
                            <option value={cur.code} key={cur.code}>{cur.name}</option>
                        )  
                    })
                }
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div className="col-md-2 py-2">
        <label className="filter-label">Is Virtual</label>
        <Form>
          <Form.Group controlId="formGridState">
            <Form.Control
                as="select"
                value={isVirtual}
                onChange={event => handleChange(event.target.value, 'isVirtual')}>
                <option value="">All</option>
                <option value={true}>Virtual</option>
                <option value={false}>Face to Face</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>

      <div className="col-md-3 py-2">
        <label className="filter-label">Address</label>
        <div class="row">
          <div class="col-12">
              <div class="input-group">
                  <input class="form-control border-secondary py-2" type="search" placeholder='Search by Address' value={keywords} onChange={handleSearchInput} />
                  <div class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button" onClick={() => handleChange(keywords, 'address')}>
                          <i class="fa fa-search"></i>
                      </button>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="col-md-1 py-2 mt2">
        <label className="filter-label">&nbsp;</label>
        <button class="btn btn-outline-secondary" type="button" onClick={() => clearFilter()}>
          <i class="fa fa-refresh"></i>
        </button>
      </div>
    </div>
  )
}

export default Index

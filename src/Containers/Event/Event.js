import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import EventComponent from "../../components/Event/Event";
import * as actions from "../../store/actions/index";

const mapStateToProps = state => {
    return {
        event: state.event,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategoriesData: () => dispatch(actions.getCategoriesData()),
        getEventList: (filterString) => dispatch(actions.getEventList(filterString)),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(EventComponent));
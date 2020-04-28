import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Main from "./presenter";
import { actionCreators } from "../../reducer";

function mapStateToProps(state) {
  const {
    code,
    food,
    isDatePicker,
    isLoading,
    year,
    month,
    day,
    fixMeal,
    meal,
    isAllergic,
    fixYear,
    fixMonth,
    fixDay,
  } = state;

  return {
    code,
    food,
    isDatePicker,
    isLoading,
    year,
    month,
    day,
    meal,
    isAllergic,
    fixYear,
    fixMonth,
    fixDay,
    fixMeal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDate: bindActionCreators(actionCreators.setDate, dispatch),
    setShowDatePicker: bindActionCreators(
      actionCreators.setShowDatePicker,
      dispatch
    ),
    nextMeal: bindActionCreators(actionCreators.nextMeal, dispatch),
    refresh: bindActionCreators(actionCreators.refresh, dispatch),
    setTable: bindActionCreators(actionCreators.setTable, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

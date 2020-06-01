import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Main from "./presenter";
import { actionCreators } from "../../reducer";

function mapStateToProps(state) {
  const {
    code,
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
    table,
    allCode,
    fixDay,
  } = state;

  return {
    code,
    isDatePicker,
    isLoading,
    year,
    month,
    table,
    day,
    meal,
    isAllergic,
    fixYear,
    fixMonth,
    fixDay,
    fixMeal,
    allCode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDate: bindActionCreators(actionCreators.setDate, dispatch),
    setShowDatePicker: bindActionCreators(
      actionCreators.setShowDatePicker,
      dispatch
    ),
    setMeal: bindActionCreators(actionCreators.setMeal, dispatch),
    refresh: bindActionCreators(actionCreators.refresh, dispatch),
    setTable: bindActionCreators(actionCreators.setTable, dispatch),
    setFixDate: bindActionCreators(actionCreators.setFixDate, dispatch),
    load: bindActionCreators(actionCreators.load, dispatch),
    setCodeInv: bindActionCreators(actionCreators.setCodeInv, dispatch),
    loadEnd: bindActionCreators(actionCreators.loadEnd, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

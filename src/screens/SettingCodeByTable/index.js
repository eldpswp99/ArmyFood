import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SettingCodeByTable from "./presenter";
import { actionCreators } from "../../reducer";

function mapStateToProps(state) {
  const {
    inputTable,
    posCode,
    allCode,
    init,
    question,
    fixYear,
    fixMonth,
    year,
    month,
    day,
    meal,
  } = state;

  return {
    inputTable,
    allCode,
    posCode,
    question,
    fixYear,
    init,
    fixMonth,
    year,
    month,
    day,
    meal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCode: bindActionCreators(actionCreators.setCode, dispatch),
    setInputTable: bindActionCreators(actionCreators.setInputTable, dispatch),
    nextQuestion: bindActionCreators(actionCreators.nextQuestion, dispatch),
    setQuestion: bindActionCreators(actionCreators.setQuestion, dispatch),
    cancelSetTable: bindActionCreators(actionCreators.cancelSetTable, dispatch),
    submitSetTable: bindActionCreators(actionCreators.submitSetTable, dispatch),
    setTable: bindActionCreators(actionCreators.setTable, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingCodeByTable);

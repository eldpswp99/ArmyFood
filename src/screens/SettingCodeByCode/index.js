import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SettingCodeByCode from "./presenter";
import { actionCreators } from "../../reducer";

function mapStateToProps(state) {
  const { inputCode, allCode, init, year, month, day, meal } = state;

  return {
    inputCode,
    allCode,
    init,
    year,
    month,
    day,
    meal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCode: bindActionCreators(actionCreators.setCode, dispatch),
    setInputCode: bindActionCreators(actionCreators.setInputCode, dispatch),
    setTable: bindActionCreators(actionCreators.setTable, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingCodeByCode);

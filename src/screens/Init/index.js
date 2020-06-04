import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Init from "./presenter";
import { actionCreators } from "../../reducer";

function mapStateToProps(state) {
  const { allCode } = state;

  return {
    allCode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFixDate: bindActionCreators(actionCreators.setFixDate, dispatch),
    setCodeInv: bindActionCreators(actionCreators.setCodeInv, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Init);

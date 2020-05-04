import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "./presenter";
import { actionCreators } from "../../reducer";

function mapStateToProps(state) {
  const { allCode, fixDay } = state;

  return {
    allCode,
    fixDay,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadEnd: bindActionCreators(actionCreators.loadEnd, dispatch),
    load: bindActionCreators(actionCreators.load, dispatch),
    setFixDate: bindActionCreators(actionCreators.setFixDate, dispatch),
    setCodeInv: bindActionCreators(actionCreators.setCodeInv, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);

import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import Loader from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {allCode} = state;
	
	return {
		allCode
	}
}

function mapDispatchToProps(dispatch){
	return {
		addData : bindActionCreators(actionCreators.addData,dispatch),
		loadEnd : bindActionCreators(actionCreators.loadEnd,dispatch),
		load :bindActionCreators(actionCreators.load,dispatch),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Loader);
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
		setDate : bindActionCreators(actionCreators.setDate,dispatch),
		setFixDate : bindActionCreators(actionCreators.setFixDate,dispatch),
		setMeal : bindActionCreators(actionCreators.setMeal,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Loader);
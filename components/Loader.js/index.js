import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import Loader from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {all} = state;
	
	return {
		all
	}
}

function mapDispatchToProps(dispatch){
	return {
		addData,
		loadEnd,
		setDate,
		setMeal
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Loader);
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import Main from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {code,food,isLoading,year,month,day,meal} = state;
	
	return {
		code,
		food,
		isLoading,
		year,
		month,
		day,
		meal
	}
}

function mapDispatchToProps(dispatch){
	return {
		setDate : bindActionCreators(actionCreators.setDate,dispatch),
		setMeal : bindActionCreators(actionCreators.setMeal,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import MealPicker from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {meal} = state;
	
	return {
		meal
	}
}

function mapDispatchToProps(dispatch){
	return {
		nextMeal : bindActionCreators(actionCreators.nextMeal,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(MealPicker);
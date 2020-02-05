import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import Main from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {isSettingMain,code,food,isDatePicker,isLoading,year,month,day,meal,isAllergic,fixYear,fixMonth,fixDay} = state;
	
	return {
		code,
		food,
		isDatePicker,
		isLoading,
		year,
		month,
		day,
		meal,
		isSettingMain,
		isAllergic,
		fixYear,
		fixMonth,
		fixDay
	}
}

function mapDispatchToProps(dispatch){
	return{
		setShowSetting : bindActionCreators(actionCreators.setShowSetting,dispatch),
		setDate : bindActionCreators(actionCreators.setDate,dispatch),
		setShowDatePicker : bindActionCreators(actionCreators.setShowDatePicker,dispatch),
		nextMeal : bindActionCreators(actionCreators.nextMeal,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
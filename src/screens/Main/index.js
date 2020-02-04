import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import Main from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {isSettingMain,code,food,isLoading,year,month,day,meal,isAllergic} = state;
	
	return {
		code,
		food,
		isLoading,
		year,
		month,
		day,
		meal,
		isSettingMain,
		isAllergic
	}
}

function mapDispatchToProps(dispatch){
	return{
		setShowSetting : bindActionCreators(actionCreators.setShowSetting,dispatch),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
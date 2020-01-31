import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SettingMain from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {isSettingMain} = state;
	
	return {
		isSettingMain
	}
}

function mapDispatchToProps(dispatch){
	return {
		setShowSetting : bindActionCreators(actionCreators.setShowSetting,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingMain);
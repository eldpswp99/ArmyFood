import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SettingCode from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {isSettingCode} = state;
	
	return {
		isSettingCode
	}
}

function mapDispatchToProps(dispatch){
	return {
		setShowSetting : bindActionCreators(actionCreators.setShowSetting,dispatch),
		setCode : bindActionCreators(actionCreators.setCode,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingCode);
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SettingAllergic from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {isSettingAllergic} = state;
	
	return {
		isSettingAllergic
	}
}

function mapDispatchToProps(dispatch){
	return {
		setShowSetting : bindActionCreators(actionCreators.setShowSetting,dispatch),
		setAllergic : bindActionCreators(actionCreators.setAllergic,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingAllergic);
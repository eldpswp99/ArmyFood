import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SettingIcon from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	
	return {
	
	}
}

function mapDispatchToProps(dispatch){
	return {
		setShowSetting : bindActionCreators(actionCreators.setShowSetting,dispatch),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingIcon);
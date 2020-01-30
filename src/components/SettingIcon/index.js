import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SettingIcon from "./presenter";
import {actionCreators} from "../../reducer";

function mapDispatchToProps(dispatch){
	return {
		setShowSetting : bindActionCreators(actionCreators.setShowSetting,dispatch),
	}
}

export default connect(mapDispatchToProps)(SettingIcon);
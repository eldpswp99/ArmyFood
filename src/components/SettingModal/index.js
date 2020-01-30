import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SettingModal from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {showSetting} = state;
	
	return {
		showSetting
	}
}

export default connect(mapStateToProps)(SettingModal);
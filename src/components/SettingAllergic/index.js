import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SettingAllergic from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {isSettingAllergic,allAllergic,posAllergic} = state;
	
	return {
		isSettingAllergic,
		allAllergic,
		posAllergic
	}
}

function mapDispatchToProps(dispatch){
	return {
		cancelAllergic : bindActionCreators(actionCreators.cancelAllergic,dispatch),
		toggleAllergic : bindActionCreators(actionCreators.toggleAllergic,dispatch),
		submitAllergic : bindActionCreators(actionCreators.submitAllergic,dispatch),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingAllergic);
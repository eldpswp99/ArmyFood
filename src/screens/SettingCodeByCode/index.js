import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SettingCodeByCode from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){

	const{inputCode,allCode,init} = state;
	
	return {
		inputCode,
		allCode,
		init
	}
}

function mapDispatchToProps(dispatch){
	return {
		setCode : bindActionCreators(actionCreators.setCode,dispatch),
		setInputCode : bindActionCreators(actionCreators.setInputCode,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingCodeByCode);
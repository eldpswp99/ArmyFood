import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SettingCodeByTable from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){

	const{inputTable,posCode,allCode,food,question,fixYear,fixMonth} = state;
	
	return {
		inputTable,
		allCode,
		posCode,
		food,
		question,
		fixYear,
		fixMonth,
	}
}

function mapDispatchToProps(dispatch){
	return {
		setCode : bindActionCreators(actionCreators.setCode,dispatch),
		setInputTable : bindActionCreators(actionCreators.setInputCode,dispatch),
		setPosCode : bindActionCreators(actionCreators.setPosCode,dispatch),
		setQuestion : bindActionCreators(actionCreators.setQuestion,dispatch),
		cancelSetTable : bindActionCreators(actionCreators.cancelSetTable,dispatch),
		submitSetTable : bindActionCreators(actionCreators.submitSetTable,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingCodeByTable);
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import DatePicker from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	const {year,month,day,isDatePicker} = state;
	
	return {
		year,
		month,
		day,
		isDatePicker
	}
}

function mapDispatchToProps(dispatch){
	return {
		setDate : bindActionCreators(actionCreators.setDate,dispatch),
		setShowDatePicker : bindActionCreators(actionCreators.setShowDatePicker,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(DatePicker);
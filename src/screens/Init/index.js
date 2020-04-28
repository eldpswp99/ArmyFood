import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import Init from "./presenter";
import {actionCreators} from "../../reducer";

function mapStateToProps(state){
	
	const {isLoading} = state;
	
	return {
		isLoading
	}
}

function mapDispatchToProps(dispatch){
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Init);
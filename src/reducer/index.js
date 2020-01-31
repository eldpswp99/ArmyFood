//Import
import * as Enums from "../Enums";
//Actions

const SET_CODE = "SET_CODE";
const ADD_DATA = "ADD_DATA";
const LOAD_END = "LOAD_END";
const SET_DATE = "SET_DATE";
const NEXT_MEAL = "NEXT_MEAL";
const SET_SHOW_DATEPICKER = "SET_SHOW_DATEPICKER";
const SET_SHOW_SETTING = "SET_SHOW_SETTING";

//Action Creators

function setCode(code){
	return{
		type:SET_CODE,
		code
	}
}

function addData(code,data){
	return{
		type:ADD_DATA,
		code,
		data
	}
}

function loadEnd(){
	return{
		type:LOAD_END
	}
}

function setDate(year,month,day,isDatePicker){
	return{
		type:SET_DATE,
		year,
		month,
		day,
		isDatePicker
	}
}

function nextMeal(meal){
	return{
		type:NEXT_MEAL,
		meal
	}
}

function setShowDatePicker(isDatePicker){
	return{
		type:SET_SHOW_DATEPICKER,
		isDatePicker
	}
}

function setShowSetting(setShowSettingModal){
	return{
		type:SET_SHOW_SETTING,
		setShowSettingModal
	}
}

//Reducer

const initialState = {
	all : [
		"ATC",
		"1691",
		"2171",
		"3389",
		"5322",
		"6282",
		"6335",
		"8902",
		"9030",
		"7369",
		"3333"
	],
	code:undefined,
	food:[],
	isLoading:true,
	year:2020,
	month:1,
	day:29,
	meal:"brst",
	isDatePicker:false,
	isSettingMain:false,
	isSettingCode:false,
	isSettingAllergic:false,
	isWhoDev:false
}

function reducer(state = initialState,action){
	switch(action.type){
		case SET_CODE:
			return applySetCode(state,action.code);
		case ADD_DATA:
			return applyAddData(state,action.code,action.data);
		case LOAD_END:
			return applyLoadEnd(state);
		case SET_DATE:
			return applySetDate(state,action.year,action.month,action.day,action.isDatePicker);
		case NEXT_MEAL:
			return applyNextMeal(state,action.meal);
		case SET_SHOW_DATEPICKER:
			return applySetShowDatePicker(state,action.isDatePicker);
		case SET_SHOW_SETTING:
			return applySetShowSetting(state,action.setShowSettingModal);
		default :
			return state;
	}
}

//Reducer Functions

function applySetCode(state,code){
	return{
		...state,
		code
	}
}

function applyAddData(state,code,data){
	return{
		...state,
		food:state.food.concat({
			foodCode:code,
			foodData:data
		})
	}
}

function applyLoadEnd(state){
	return{
		...state,
		isLoading:false
	}
}

function applySetDate(state,year,month,day,isDatePicker){
	return{
		...state,
		year,
		month,
		day,
		isDatePicker
	}
}

function applyNextMeal(state,meal){
	let nextmeal;
	
	switch(meal){
		case "brst":
			nextmeal="lunc";
			break;
		case "lunc":
			nextmeal="dinr";
			break;
		case "dinr":
			nextmeal="brst";
			break;
	}
	
	return{
		...state,
		meal:nextmeal
	}
}

function applySetShowDatePicker(state,isDatePicker){
	return{
		...state,
		isDatePicker
	}
}

function applySetShowSetting(state,setShowSettingModal){
	let isSettingMain,isSettingCode,isSettingAllergic,isWhoDev;
	isSettingMain = isSettingCode = isSettingAllergic = isWhoDev = false;
	
	switch(setShowSettingModal){
		case Enums.SHOW_SET_NONE:
			break;
		case Enums.SHOW_SET_MAIN:
			isSettingMain = true;
			break;
		case Enums.SHOW_SET_CODE:
			isSettingCode = true;
			break;
		case Enums.SHOW_SET_ALLERGIC:
			isSettingAllergic = true;
			break;
		case Enums.SHOW_WHO_DEV:
			isWhoDev = true;
			break;
	}
	
	return{
		...state,
		isSettingMain,
		isSettingCode,
		isSettingAllergic,
		isWhoDev
	}
}

//Export Action Creators

const actionCreators = {
	setCode,
	addData,
	loadEnd,
	setDate,
	nextMeal,
	setShowDatePicker,
	setShowSetting
};

export {actionCreators};

//Export Reducer

export default reducer;
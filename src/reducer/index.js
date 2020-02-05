//Import
import * as Enums from "../Enums";
//Actions

const SET_CODE = "SET_CODE";
const ADD_DATA = "ADD_DATA";
const LOAD_END = "LOAD_END";
const SET_DATE = "SET_DATE";
const SET_FIX_DATE = "SET_FIX_DATE";
const SET_MEAL = "SET_MEAL";
const NEXT_MEAL = "NEXT_MEAL";
const SET_SHOW_DATEPICKER = "SET_SHOW_DATEPICKER";
const SET_SHOW_SETTING = "SET_SHOW_SETTING";
const TOGGLE_ALLERGIC = "TOGGLE_ALLERGIC";
const SUBMIT_ALLERGIC = "SUBMIT_ALLERGIC";
const CANCEL_ALLERGIC = "CANCEL_ALLERGIC";

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

function setFixDate(year,month,day){
	return{
		type:SET_FIX_DATE,
		year,
		month,
		day
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

function setMeal(meal){
	return{
		type:SET_MEAL,
		meal
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

function setShowSetting(isSettingMain){
	return{
		type:SET_SHOW_SETTING,
		isSettingMain
	}
}

function toggleAllergic(num){
	return{
		type:TOGGLE_ALLERGIC,
		num,
	}
}

function submitAllergic(){
	return{
		type:SUBMIT_ALLERGIC,
	}
}

function cancelAllergic(){
	return{
		type:CANCEL_ALLERGIC,
	}
}



//Reducer

const initialState = {
	allCode : [
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
	pos : [
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
	allAllergic : [
		{
			num:1,
			value:"난류",
		},
		{
			num:2,
			value:"우유",
		},
		{
			num:3,
			value:"메밀",
		},
		{
			num:4,
			value:"땅콩",
		},
		{
			num:5,
			value:"대두",
		},
		{
			num:6,
			value:"밀",
		},
		{
			num:7,
			value:"고등어",
		},
		{
			num:8,
			value:"게",
		},
		{
			num:9,
			value:"새우",
		},
		{
			num:10,
			value:"돼지고기",
		},
		{
			num:11,
			value:"복숭아",
		},
		{
			num:12,
			value:"토마토",
		},
		{
			num:13,
			value:"아황산염",
		},
		{
			num:14,
			value:"호두",
		},
		{
			num:15,
			value:"닭고기",
		},
		{
			num:16,
			value:"쇠고기",
		},
		{
			num:17,
			value:"오징어",
		},
		{
			num:18,
			value:"조개류",
		},
	],
	isAllergic:Array.from(new Array(Enums.ALLERGIC+1),()=>false),
	posAllergic:Array.from(new Array(Enums.ALLERGIC+1),()=>false),
	code:"1691",
	allergic:[],
	food:[],
	isLoading:true,
	year:2020,
	month:1,
	day:29,
	fixYear:2020,
	fixMonth:2,
	fixDay:5,
	meal:"brst",
	isDatePicker:false,
	isSettingMain:false,
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
		case SET_FIX_DATE:
			return applySetFixDate(state,action.year,action.month,action.day);
		case SET_MEAL:
			return applySetMeal(state,action.meal);
		case NEXT_MEAL:
			return applyNextMeal(state,action.meal);
		case SET_SHOW_DATEPICKER:
			return applySetShowDatePicker(state,action.isDatePicker);
		case SET_SHOW_SETTING:
			return applySetShowSetting(state,action.isSettingMain);
		case TOGGLE_ALLERGIC:
			return applyToggleAllergic(state,action.num);
		case SUBMIT_ALLERGIC:
			return applySubmitAllergic(state);
		case CANCEL_ALLERGIC:
			return applyCancelAllergic(state);
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

function applyAddData(state,data){
	return{
		...state,
		food:state.food.concat(data)
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

function applySetFixDate(state,year,month,day){
	return{
		...state,
		year,
		month,
		day,
	}
}

function applySetMeal(state,meal){
	return{
		...state,
		meal
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

function applySetShowSetting(state,isSettingMain){
	
	return{
		...state,
		isSettingMain,
	}
}

function applyToggleAllergic(state,num){
	let newIsAllergic = state.posAllergic.slice();
	newIsAllergic[num] = !state.posAllergic[num];
	
	return{
		...state,
		posAllergic : newIsAllergic
	}
}

function applySubmitAllergic(state){	
	return{
		...state,
		isAllergic:[...state.posAllergic],
		isSettingAllergic:false
	}
}

function applyCancelAllergic(state){
	return{
		...state,
		posAllergic:[...state.isAllergic],
		isSettingAllergic:false
	}
}

//Export Action Creators

const actionCreators = {
	setCode,
	addData,
	loadEnd,
	setDate,
	setFixDate,
	setMeal,
	nextMeal,
	setShowDatePicker,
	setShowSetting,
	toggleAllergic,
	submitAllergic,
	cancelAllergic,
};

export {actionCreators};

//Export Reducer

export default reducer;
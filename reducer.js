//Import

//Actions

const SET_CODE = "SET_CODE";
const ADD_DATA = "ADD_DATA";
const LOAD_END = "LOAD_END";
const SET_DATE = "SET_DATE";
const SET_MEAL = "SET_MEAL";
const SET_SHOW_DATEPICKER = "SET_SHOW_DATEPICKER";

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

function setMeal(meal){
	return{
		type:SET_MEAL,
		meal
	}
}

function setShowDatePicker(isDatePicker){
	return{
		type:SET_SHOW_DATEPICKER,
		isDatePicker
	}
}

//Reducer

const initialState = {
	all : [
		{
			code : "TRAIN",
			url : "#"
	},
		{
		code : "OSNO",
		url : "#"
	},
		{
		code : "TOSO",
		url : "#"
	},
		{
		code : "TTEN",
		url : "#"
	},
		{
		code : "FTTT",
		url : "#"
	},
		{
		code : "STET",
		url : "#"
	},
		{
		code : "STTF",
		url : "#"
	},
		{
		code : "ENZT",
		url : "#"
	},
		
		{
		code : "NZTZ",
		url : "#"
	},
		{
		code : "TTTT",
		url : "#"
	}],
	code:undefined,
	food:[],
	isLoading:true,
	year:2020,
	month:1,
	day:29,
	meal:"brst",
	isDatePicker:false
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
		case SET_MEAL:
			return applySetMeal(state,action.meal);
		case SET_SHOW_DATEPICKER:
			return applySetShowDatePicker(state,action.isDatePicker);
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

function applySetMeal(state,meal){
	return{
		...state,
		meal
	}
}

function applySetShowDatePicker(state,isDatePicker){
	return{
		...state,
		isDatePicker
	}
}

//Export Action Creators

const actionCreators = {
	setCode,
	addData,
	loadEnd,
	setDate,
	setMeal,
	setShowDatePicker
};

export {actionCreators};

//Export Reducer

export default reducer;
//Import

//Actions

const SET_CODE = "SET_CODE";
const ADD_DATA = "ADD_DATA";
const LOAD_END = "LOAD_END";
const SET_DATE = "SET_DATE";
const SET_MEAL = "SET_MEAL";

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

function setDate(year,month,day){
	return{
		type:SET_DATE,
		year,
		month,
		day
	}
}

function setMeal(meal){
	return{
		type:SET_MEAL,
		meal
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
	year,
	month,
	day,
	meal
}

function reducer(state = initialState,action){
	switch(action.type){
		case:SET_CODE:
			return applySetCode(state,action.code);
		case:ADD_DATA:
			return applyAddData(state,action.code,action.data);
		case:LOAD_END:
			return applyLoadEnd(state);
		case:SET_DATE:
			return applySetDate(state,action.year,action.month,action.day);
		case:SET_MEAL:
			return applySetMeal(state,action.meal);''
		default:
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

function applySetDate(state,year,month,day){
	return{
		...state,
		year,
		month,
		day
	}
}

function applySetMeal(state,meal){
	return{
		...state,
		meal
	}
}

//Export Action Creators

const actionCreators = {
	setCode,
	addData,
	loadEnd,
	setDate,
	setMeal	
};

export {actionCreators};

//Export Reducer

export default reducer;
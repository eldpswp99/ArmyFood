//Import
import * as Enums from "../Enums";
//Actions

const SET_CODE = "SET_CODE";
const SET_TABLE = "SET_TABLE";
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
const SET_INPUT_CODE = "SET_INPUT_CODE";
const SET_INPUT_TABLE = "SET_INPUT_TABLE";
const NEXT_QUESTION = "NEXT_QUESTION";
const SET_QUESTION = "SET_QUESTION";
const CANCEL_SET_TABLE = "CANCEL_SET_TABLE";
const SUBMIT_SET_TABLE = "SUBMIT_SET_TABLE";
const NEXT_QUESTION_SET_TABLE = "NEXT_QUESTION_SET_TABLE";
const LOAD = "LOAD";
const REFRESH = "REFRESH";
const SET_CODE_INV = "SET_CODE_INV";

//Action Creators

function setCode(code) {
  return {
    type: SET_CODE,
    code,
  };
}

function setTable(data) {
  return {
    type: SET_TABLE,
    data,
  };
}

function loadEnd() {
  return {
    type: LOAD_END,
  };
}

function setFixDate(fixYear, fixMonth, fixDay) {
  return {
    type: SET_FIX_DATE,
    fixYear,
    fixMonth,
    fixDay,
  };
}

function setDate(year, month, day, isDatePicker) {
  return {
    type: SET_DATE,
    year,
    month,
    day,
    isDatePicker,
  };
}

function load(year, month, day, meal) {
  return {
    type: LOAD,
    year,
    month,
    day,
    meal,
  };
}

function setMeal(meal) {
  return {
    type: SET_MEAL,
    meal,
  };
}

function nextMeal(meal) {
  return {
    type: NEXT_MEAL,
    meal,
  };
}

function setShowDatePicker(isDatePicker) {
  return {
    type: SET_SHOW_DATEPICKER,
    isDatePicker,
  };
}

function setShowSetting(isSettingMain) {
  return {
    type: SET_SHOW_SETTING,
    isSettingMain,
  };
}

function toggleAllergic(num) {
  return {
    type: TOGGLE_ALLERGIC,
    num,
  };
}

function submitAllergic() {
  return {
    type: SUBMIT_ALLERGIC,
  };
}

function cancelAllergic() {
  return {
    type: CANCEL_ALLERGIC,
  };
}

function setInputCode(inputCode) {
  return {
    type: SET_INPUT_CODE,
    inputCode,
  };
}

function setInputTable(inputTable) {
  return {
    type: SET_INPUT_TABLE,
    inputTable,
  };
}

function nextQuestion(posCode) {
  return {
    type: NEXT_QUESTION,
    posCode,
  };
}

function setQuestion(question) {
  return {
    type: SET_QUESTION,
    question,
  };
}

function cancelSetTable() {
  return {
    type: CANCEL_SET_TABLE,
  };
}

function submitSetTable(code) {
  return {
    type: SUBMIT_SET_TABLE,
    code,
  };
}

function refresh() {
  return {
    type: REFRESH,
  };
}

function setCodeInv(codeInv) {
  return {
    type: SET_CODE_INV,
    codeInv,
  };
}

//Reducer

const initialState = {
  allCode: [
    "ATC",
    "9030",
    "8902",
    "8623",
    "7652",
    "7369",
    "6335",
    "6282",
    "6176",
    "5322",
    "5021",
    "3389",
    "3296",
    "2171",
    "1691",
    "3333",
  ],
  posCode: [
    "ATC",
    "9030",
    "8902",
    "8623",
    "7652",
    "7369",
    "6335",
    "6282",
    "6176",
    "5322",
    "5021",
    "3389",
    "3296",
    "2171",
    "1691",
    "3333",
  ],
  codeInv: {},
  allAllergic: [
    {
      num: 1,
      value: "난류",
    },
    {
      num: 2,
      value: "우유",
    },
    {
      num: 3,
      value: "메밀",
    },
    {
      num: 4,
      value: "땅콩",
    },
    {
      num: 5,
      value: "대두",
    },
    {
      num: 6,
      value: "밀",
    },
    {
      num: 7,
      value: "고등어",
    },
    {
      num: 8,
      value: "게",
    },
    {
      num: 9,
      value: "새우",
    },
    {
      num: 10,
      value: "돼지고기",
    },
    {
      num: 11,
      value: "복숭아",
    },
    {
      num: 12,
      value: "토마토",
    },
    {
      num: 13,
      value: "아황산염",
    },
    {
      num: 14,
      value: "호두",
    },
    {
      num: 15,
      value: "닭고기",
    },
    {
      num: 16,
      value: "쇠고기",
    },
    {
      num: 17,
      value: "오징어",
    },
    {
      num: 18,
      value: "조개류",
    },
  ],
  isAllergic: Array.from(new Array(Enums.ALLERGIC + 1), () => false),
  posAllergic: Array.from(new Array(Enums.ALLERGIC + 1), () => false),
  code: undefined,
  allergic: [],
  table: [],
  isLoading: true,
  year: 2020,
  month: 1,
  day: 29,
  fixYear: 2020,
  fixMonth: 2,
  fixDay: 5,
  fixMeal: "brst",
  meal: "brst",
  isDatePicker: false,
  isSettingMain: false,
  inputCode: "",
  inputTable: "",
  question: 1,
  init: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CODE:
      return applySetCode(state, action.code);
    case SET_TABLE:
      return applySetTable(state, action.data);
    case LOAD_END:
      return applyLoadEnd(state);
    case SET_DATE:
      return applySetDate(
        state,
        action.year,
        action.month,
        action.day,
        action.isDatePicker
      );
    case SET_FIX_DATE:
      return applySetFixDate(
        state,
        action.fixYear,
        action.fixMonth,
        action.fixDay
      );
    case SET_MEAL:
      return applySetMeal(state, action.meal);
    case NEXT_MEAL:
      return applyNextMeal(state, action.meal);
    case SET_SHOW_DATEPICKER:
      return applySetShowDatePicker(state, action.isDatePicker);
    case SET_SHOW_SETTING:
      return applySetShowSetting(state, action.isSettingMain);
    case TOGGLE_ALLERGIC:
      return applyToggleAllergic(state, action.num);
    case SUBMIT_ALLERGIC:
      return applySubmitAllergic(state);
    case CANCEL_ALLERGIC:
      return applyCancelAllergic(state);
    case SET_INPUT_CODE:
      return applySetInputCode(state, action.inputCode);
    case SET_INPUT_TABLE:
      return applySetInputTable(state, action.inputTable);
    case NEXT_QUESTION:
      return applyNextQuestion(state, action.posCode);
    case SET_QUESTION:
      return applySetQuestion(state, action.question);
    case CANCEL_SET_TABLE:
      return applyCancelSetTable(state);
    case SUBMIT_SET_TABLE:
      return applySubmitSetTable(state, action.code);
    case LOAD:
      return applyLoad(
        state,
        action.year,
        action.month,
        action.day,
        action.meal
      );
    case REFRESH:
      return applyRefresh(state);
    case SET_CODE_INV:
      return applySetCodeInv(state, action.codeInv);
    default:
      return state;
  }
}

//Reducer Functions

function applySetCode(state, code) {
  return {
    ...state,
    code,
  };
}

function applySetTable(state, data) {
  return {
    ...state,
    table: data,
  };
}

function applyLoadEnd(state) {
  return {
    ...state,
    isLoading: false,
    posAllergic: state.isAllergic,
  };
}

function applySetDate(state, year, month, day, isDatePicker) {
  return {
    ...state,
    year,
    month,
    day,
    isDatePicker,
  };
}

function applySetFixDate(state, fixYear, fixMonth, fixDay) {
  return {
    ...state,
    fixYear,
    fixMonth,
    fixDay,
  };
}

function applySetMeal(state, meal) {
  return {
    ...state,
    meal,
  };
}

function applySetShowDatePicker(state, isDatePicker) {
  return {
    ...state,
    isDatePicker,
  };
}

function applySetShowSetting(state, isSettingMain) {
  return {
    ...state,
    isSettingMain,
  };
}

function applyToggleAllergic(state, num) {
  let newIsAllergic = state.posAllergic.slice();
  newIsAllergic[num] = !state.posAllergic[num];

  return {
    ...state,
    posAllergic: newIsAllergic,
  };
}

function applySubmitAllergic(state) {
  return {
    ...state,
    isAllergic: [...state.posAllergic],
    isSettingAllergic: false,
    init: false,
  };
}

function applyCancelAllergic(state) {
  return {
    ...state,
    posAllergic: [...state.isAllergic],
    isSettingAllergic: false,
  };
}

function applySetInputCode(state, inputCode) {
  return {
    ...state,
    inputCode,
  };
}

function applySetInputTable(state, inputTable) {
  return {
    ...state,
    inputTable,
  };
}

function applyNextQuestion(state, posCode) {
  return {
    ...state,
    posCode,
    question: state.question + 1,
    inputTable: "",
  };
}

function applySetQuestion(state, question) {
  return {
    ...state,
    question,
  };
}

function applyCancelSetTable(state) {
  return {
    ...state,
    inputTable: "",
    posCode: state.allCode,
    question: 1,
  };
}

function applySubmitSetTable(state, code) {
  return {
    ...state,
    code,
    inputTable: "",
    posCode: state.allCode,
    question: 1,
  };
}

function applySetInit(state, init) {
  return {
    ...state,
    init,
  };
}

function applyLoad(state, year, month, day, meal) {
  return {
    ...state,
    fixMeal: meal,
    meal,
    year,
    month,
    day,
  };
}

function applyRefresh(state) {
  return {
    ...state,
    year: state.fixYear,
    month: state.fixMonth,
    day: state.fixDay,
    meal: state.fixMeal,
  };
}

function applySetCodeInv(state, codeInv) {
  return {
    ...state,
    codeInv,
  };
}

//Export Action Creators

const actionCreators = {
  setCode,
  setTable,
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
  setInputCode,
  setInputTable,
  nextQuestion,
  setQuestion,
  cancelSetTable,
  submitSetTable,
  load,
  refresh,
  setCodeInv,
};

export { actionCreators };

//Export Reducer

export default reducer;

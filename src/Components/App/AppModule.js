import { combineReducers } from "redux";
import { quiz } from "./../CreateQuizFeature/CreateQuiz/CreateQuizModule";
import { test } from "./../TestsFeature/QuestionList/QuestionListModule";

export const app = combineReducers({
  quiz,
  test,
});

import { combineReducers } from "redux";
import { name } from "./../Name/NameModule";
import { questions } from "./../QuestionList/QuestionListModule";
import { emails } from "./../Emails/EmailsModule";

export const quiz = combineReducers({
  name,
  questions,
  emails,
});

export const clearQuestions = () => {
  return {
    type: "clearQuestions",
  };
};

export const clearName = () => {
  return {
    type: "clearName",
  };
};

export const clearEmails = () => {
  return {
    type: "clearEmails",
  };
};

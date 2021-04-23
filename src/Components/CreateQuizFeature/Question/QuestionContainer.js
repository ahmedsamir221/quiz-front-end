import { connect } from "react-redux";
import Question from "./Question";
import { addAnswer, updateQuestion, deleteQuestion } from "./QuestionModule";
const mapDispachToProps = (dispach) => {
  return {
    updateQuestionClickHandler: (i, value) => {
      dispach(updateQuestion(i, value));
    },
    deleteQuestionClickHandler: (i) => {
      dispach(deleteQuestion(i));
    },
    AddAnswerClickHandler: (i) => {
      dispach(addAnswer(i));
    },
  };
};

const QuestionContainer = connect(null, mapDispachToProps)(Question);

export default QuestionContainer;

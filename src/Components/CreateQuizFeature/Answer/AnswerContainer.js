import { connect } from "react-redux";
import Answer from "./Answer";
import { updateAnswer, deleteAnswer, correctAnswer } from "./AnswerModule";

const mapStateToProps = (state, props) => {
  return {
    isChecked: state.quiz.questions[props.i].correctAnswer === props.j,
  };
};

const mapDispachtoProps = (dispach) => {
  return {
    updateAnswerClickHandler: (i, j, value) => {
      dispach(updateAnswer(i, j, value));
    },
    deleteAnswerClickHandler: (i, j) => {
      dispach(deleteAnswer(i, j));
    },
    correctAnswerClickHandler: (i, j) => {
      dispach(correctAnswer(i, j));
    },
  };
};

const AnswerContainer = connect(mapStateToProps, mapDispachtoProps)(Answer);

export default AnswerContainer;

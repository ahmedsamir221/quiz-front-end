import { connect } from "react-redux";
import QuestionList from "./QuestionList";

const mapStatetoProps = (state) => {
  return {
    questions: state.quiz.questions,
  };
};

const QuestionListContainer = connect(mapStatetoProps)(QuestionList);

export default QuestionListContainer;

import { connect } from "react-redux";
import { updateName } from "../../CreateQuizFeature/Name/NameModule";
import Quiz from "./Quiz";
import { fillEmails, fillQuestions } from "./QuizModule";

const mapDispachToProps = (dispach) => {
  return {
    prepare: (quiz) => {
      dispach(fillQuestions(quiz.questions));
      dispach(fillEmails(quiz.emails));
      dispach(updateName(quiz.name));
    },
  };
};

const QuizContainer = connect(null, mapDispachToProps)(Quiz);
export default QuizContainer;

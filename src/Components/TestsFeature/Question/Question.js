import AnswerList from "../AnswerList/AnswerList";
import "./Question.css";
const Question = ({ children: question, i }) => {
  return (
    <li className="test-question">
      <p className="test-question-head">{question.question}</p>
      <AnswerList i={i}>{question.answers}</AnswerList>
    </li>
  );
};

export default Question;

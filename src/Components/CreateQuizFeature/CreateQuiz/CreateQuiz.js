import React from "react";
import AddQuestionContainer from "../AddQuestion/AddQuestionContainer";
import NameContainer from "../Name/NameContainer";
import QuestionListContainer from "../QuestionList/QuestionListContainer";
import EmailsContainer from "./../Emails/EmailsContainer";
import AddEmailContainer from "./../AddEmail/AddEmailContainer";
import "./CreateQuiz.css";

class CreateQuiz extends React.Component {
  constructor(props) {
    super(props);
    props.prepare();
  }
  render() {
    let quiz = this.props.quiz;
    let saveQuizClickHandler = this.props.saveQuizClickHandler;
    return (
      <div>
        <NameContainer />
        <div>
          <h1 className="h1-questions"> Questions </h1>
          <QuestionListContainer />
          <AddQuestionContainer />
        </div>
        <div>
          <h1 className="h1-questions"> Emails</h1>
          <EmailsContainer />
          <AddEmailContainer />
        </div>

        <button
          className="save-quiz"
          onClick={() => saveQuizClickHandler(quiz)}
        >
          {" "}
          Save{" "}
        </button>
      </div>
    );
  }
}

export default CreateQuiz;

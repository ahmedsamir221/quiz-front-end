import AnswerList from "./../AnswerList/AnswerList";
import Error from "../Error/Error";
import "./Question.css";
import React from "react";

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      edit: false,
    };
  }
  editToggle = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  render() {
    let {
      i,
      children,
      updateQuestionClickHandler,
      deleteQuestionClickHandler,
      AddAnswerClickHandler,
    } = this.props;
    let edit = this.state.edit;
    let input;
    if (edit) {
      return (
        <li className="question">
          <div className="question-top">
            <textarea
              className="question-input"
              ref={(n) => (input = n)}
              defaultValue={children.question}
            ></textarea>
            <button
              onClick={() => {
                updateQuestionClickHandler(i, input.value);
                this.editToggle();
              }}
              className="question-save"
            >
              {" "}
              save
            </button>
          </div>

          <h1 className="answer-list-title"> Answers </h1>
          <AnswerList i={i}>{children.answers}</AnswerList>
          <button
            className="answer-add"
            onClick={() => AddAnswerClickHandler(i)}
          >
            {" "}
            add answer{" "}
          </button>
        </li>
      );
    }
    return (
      <li className="question">
        <div className="question-top">
          <div className="question-top-val">
            {" "}
            {i + 1} : {children.question}
            <Error value={children.question} />
          </div>
          <div>
            <button
              onClick={() => {
                this.editToggle();
              }}
              className="question-edit"
            >
              {" "}
              edit{" "}
            </button>
            <button
              className="question-delete"
              onClick={() => deleteQuestionClickHandler(i, input?.value)}
            >
              {" "}
              delete{" "}
            </button>
          </div>
        </div>

        <h1 className="answer-list-title"> Answers </h1>
        <AnswerList i={i}>{children.answers}</AnswerList>
        <button className="answer-add" onClick={() => AddAnswerClickHandler(i)}>
          {" "}
          add answer{" "}
        </button>
      </li>
    );
  }
}

/*
const Question = ({
    i,
    children,
    updateQuestionClickHandler,
    deleteQuestionClickHandler,
    AddAnswerClickHandler,
    edit
}) => {
    let input;
    if(edit) {
        return (
            <li className="question">
            <textarea ref={n => input = n}></textarea>
            <button onClick={() => {
                    updateQuestionClickHandler(i ,input.value);
                    input.value = '';
                }}
                className='save'
            > save
            </button>
            <AnswerList i={i}>{children.answers}</AnswerList>
            <button
             onClick={() => AddAnswerClickHandler(i)}>Add answer</button>
        </li>
        );
    }
    return (
        <li className="question">
            <span> Question {i + 1} : </span>
            <span> {children.question} </span>
            <Error value={children.question} />
            <button onClick={() => {
                    this.editToggle();
                }}
                className='edit'
            >
            </button>
            <button
             className='delete'
             onClick={() => deleteQuestionClickHandler(i ,input.value)}></button>
            <br/>
            <AnswerList i={i}>{children.answers}</AnswerList>
            <button
             onClick={() => AddAnswerClickHandler(i)}>Add answer</button>
        </li>
    )
}
*/

export default Question;

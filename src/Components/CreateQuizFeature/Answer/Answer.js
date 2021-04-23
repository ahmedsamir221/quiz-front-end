import Error from "../Error/Error";
import "./Answer.css";
import React from "react";

class Answer extends React.Component {
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
      children,
      i,
      j,
      isChecked,
      updateAnswerClickHandler,
      deleteAnswerClickHandler,
      correctAnswerClickHandler,
    } = this.props;
    let edit = this.state.edit;
    let input;
    if (edit) {
      return (
        <li className="answer">
          <textarea
            className="answer-input"
            ref={(n) => (input = n)}
            defaultValue={children}
          ></textarea>
          <button
            onClick={() => {
              updateAnswerClickHandler(i, j, input.value);
              this.editToggle();
            }}
            className="answer-save"
          >
            {" "}
            save
          </button>
        </li>
      );
    }
    return (
      <li className="answer">
        <div className="answer-top">
          {" "}
          {j + 1} : {children}
          <Error value={children} />
        </div>
        <div className="answer-buttons">
          <input
            style={{ margin: "1rem" }}
            onClick={() => correctAnswerClickHandler(i, j)}
            readOnly
            type="checkbox"
            checked={isChecked}
          ></input>
          <button
            onClick={() => {
              this.editToggle();
            }}
            className="answer-edit"
          >
            {" "}
            edit{" "}
          </button>
          <button
            className="answer-delete"
            onClick={() => deleteAnswerClickHandler(i, j)}
          >
            {" "}
            delete{" "}
          </button>
        </div>
      </li>
    );
  }
}

/*
const Answer = ({
    children,
    i,
    j,
    isChecked,
    updateAnswerClickHandler,
    deleteAnswerClickHandler,
    correctAnswerClickHandler
}) => {
    let input;
    return (
        <li >
            <span> {j + 1} : </span>
            <span> {children} </span>
            <input ref={n =>input = n}></input>
            <Error value={children} />
            <input onClick={() => correctAnswerClickHandler(i, j)} readOnly type='checkbox' checked={isChecked}></input>
            <button onClick={() => {
                    updateAnswerClickHandler(i, j, input.value);
                    input.value = ''
                }}
            >
            Update 
            </button>
            <button onClick={() => deleteAnswerClickHandler(i, j)} > Delete </button>
        </li>
    )
}
*/
export default Answer;

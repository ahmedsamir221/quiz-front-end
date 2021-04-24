import Error from "./../Error/Error";
import React from "react";
import "../Answer/Answer.css";
import "./Name.css";
class Name extends React.Component {
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

  componentDidUpdate() {
    this.in?.focus();
  }

  render() {
    let { name, updateNameClickHandler } = this.props;
    let edit = this.state.edit;
    let input;
    if (edit) {
      return (
        <div className="question-head-block">
          <textarea
            className="question-name-input"
            ref={(n) => {input = n; this.in = n;}}
            defaultValue={name}
          ></textarea>
          <button
            onClick={() => {
              updateNameClickHandler(input.value);
              this.editToggle();
            }}
            className="question-name-save"
          >
            {" "}
            save
          </button>
        </div>
      );
    }
    return (
      <div className="question-head-block">
        <div className="question-name">
          Quiz name : {name} <Error value={name} />
        </div>
        <button
          onClick={() => {
            this.editToggle();
          }}
          className="question-name-edit"
        >
          {" "}
          edit{" "}
        </button>
      </div>
    );
  }
}

/*
const Name = ({
    name,
    updateNameClickHandler
}) => {
    let input;
    return (
        <div className="head">
            <span> Quiz name : {name}</span>
            <input ref={ n => input = n}></input>
            <Error value={name}/>
            <button onClick={() => {
                    updateNameClickHandler(input.value);
                    input.value = '';
                }}
            >
                update
            </button>
        </div>
    )
}
*/

export default Name;

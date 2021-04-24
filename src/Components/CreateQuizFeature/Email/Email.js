import Error from "./../Error/Error";
import React from "react";
import "../Answer/Answer.css";
class Email extends React.Component {
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
    let {
      children,
      i,
      updateEmailClickHandler,
      deleteEmailClickHandler,
    } = this.props;
    let edit = this.state.edit;
    let input;
    if (edit) {
      return (
        <li className="answer">
          <textarea
            className="answer-input"
            ref={(n) => {input = n; this.in = n;}}
            defaultValue={children}
          ></textarea>
          <button
            onClick={() => {
              updateEmailClickHandler(i, input.value);
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
          {i + 1} : {children}
          <Error value={children} />
        </div>
        <div>
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
            onClick={() => deleteEmailClickHandler(i)}
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
const Email = ({
    children,
    i,
    updateEmailClickHandler,
    deleteEmailClickHandler

}) => {
    let input;
    return (
        <div>
            <span> email {i + 1} : {children}</span>
            <input ref={n => input = n}></input>
            <Error value={children}/>
            <button onClick={() => {
                    updateEmailClickHandler(i, input.value);
                    input.value = '';
                }}
            >
                update 
            </button>
            <button onClick={() => deleteEmailClickHandler(i)}> delete </button>
            
        </div>
    )
}
*/
export default Email;

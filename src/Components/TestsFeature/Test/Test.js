import React from "react";
import QuestionList from "../QuestionList/QuestionList";
import "./Test.css";
import loading from './loading.png'

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      degree: 0,
    };
    let url = "https://make-your-quiz.herokuapp.com/tests/" + props._id;
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.token,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        props.prepare(r.questions.length);
        this.setState({
          data: r,
        });
      });
  }
  getDegree = () => {
    this.setState({
      degree: <div className='load-img'> <img src={loading} alt='....loading'/> </div> 
    });
    let url =
      "https://make-your-quiz.herokuapp.com/getDegree/" + this.props._id;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.token,
      },
      body: JSON.stringify(this.props.answers),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        this.setState({
          degree: r.degree + ' %',
        });
      });
  };
  render() {
    let quiz = this.state.data;
    if (quiz) {
      return (
        <div>
          <div className="test-head">
            <h1 className="test-head-item"> Quiz name : {quiz.name}</h1>
            <div className="test-head-item load-img">
              Your Degree is : {this.state.degree}
            </div>
          </div>
          <QuestionList>{quiz.questions}</QuestionList>
          <button className="get-degree" onClick={this.getDegree}>
            {" "}
            Get degree{" "}
          </button>
        </div>
      );
    } else {
      return (
        <div className="loading">
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }
  }
}

export default Test;

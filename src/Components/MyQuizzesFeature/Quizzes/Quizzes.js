import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import QuizContainer from "../Quiz/QuizContainer";
import "./Quizzes.css";
class Quizzes extends React.Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
    };
    let url = "https://make-your-quiz.herokuapp.com/getQuizzes";
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.token,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        this.setState({
          data: r,
        });
      });
  }
  render() {
    if (this.state.data) {
      return (
        <div className="container">
          <ul className="side">
            {this.state.data.map((quiz) => {
              return (
                <li key={quiz._id}>
                  <Link className="side-item " to={"/myQuizzes/" + quiz._id}>
                    {quiz.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Switch>
            {this.state.data.map((quiz) => {
              return (
                <Route key={quiz._id} path={"/myQuizzes/" + quiz._id}>
                  <div className="main">
                    <QuizContainer _id={quiz._id} />
                  </div>
                </Route>
              );
            })}
          </Switch>
        </div>
      );
    }
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

export default Quizzes;

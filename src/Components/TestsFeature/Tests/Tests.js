import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import TestContainer from "./../Test/TestContainer";
import "../../MyQuizzesFeature/Quizzes/Quizzes.css";
class Tests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
    };
    let url = "https://make-your-quiz.herokuapp.com/tests";
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
    let data = this.state.data;
    if (data) {
      return (
        <div className="container">
          <ul className="side">
            {data.map((quiz) => {
              return (
                <li key={quiz._id}>
                  {" "}
                  <Link className="side-item" to={"/tests/" + quiz._id}>
                    {quiz.name}
                  </Link>{" "}
                </li>
              );
            })}
          </ul>
          <Switch>
            {data.map((quiz) => {
              return (
                <Route key={quiz._id} path={"/tests/" + quiz._id}>
                  <div className="main">
                    <TestContainer _id={quiz._id} />
                  </div>
                </Route>
              );
            })}
          </Switch>
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

export default Tests;

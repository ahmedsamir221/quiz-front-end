import React from "react";
import CreateQuizContainer from "./../CreateQuizFeature/CreateQuiz/CreateQuizContainer";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Link, Switch, Route, matchPath } from "react-router-dom";
import Quizzes from "./../MyQuizzesFeature/Quizzes/Quizzes";
import Tests from "../TestsFeature/Tests/Tests";
import "./App.css";
import logo from "./logo2.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogedIn: sessionStorage.isLogedIn,
      active:
        window.location.href ===
        "https://create-quiz-easy.herokuapp.com/createQuiz"
          ? 1
          : window.location.href ===
            "https://create-quiz-easy.herokuapp.com/myQuizzes"
          ? 2
          : window.location.href ===
            "https://create-quiz-easy.herokuapp.com/tests"
          ? 3
          : 0,
    };
  }

  success = (response) => {
    console.log("done ahmed............");
    sessionStorage.token = response.tokenId;
    sessionStorage.name = response.profileObj.givenName;
    sessionStorage.isLogedIn = true;
    this.setState({ isLogedIn: true });
  };
  failure = () => {
    console.log("not done ahmed............");
    sessionStorage.token = "";
    sessionStorage.isLogedIn = false;
    this.setState({ isLogedIn: false });
  };

  active = (id) => {
    sessionStorage.active = id;
    this.setState({
      active: id,
    });
  };
  render() {
    let active = this.state.active;
    if (this.state.isLogedIn) {
      return (
        <div>
          <ul className="nav">
            <li>
              <img className="nav-item logo" src={logo} alt="logo" />
            </li>
            <li>
              <Link
                className={"nav-item" + (active === 0 ? " active" : "")}
                to="/"
                onClick={() => this.active(0)}
              >
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link
                className={"nav-item" + (active === 1 ? " active" : "")}
                to="/createQuiz"
                onClick={() => this.active(1)}
              >
                {" "}
                Create Quiz{" "}
              </Link>
            </li>
            <li>
              <Link
                className={"nav-item" + (active === 2 ? " active" : "")}
                to="/myQuizzes"
                onClick={() => this.active(2)}
              >
                {" "}
                My Quizzes{" "}
              </Link>
            </li>
            <li>
              <Link
                className={"nav-item" + (active === 3 ? " active" : "")}
                to="/tests"
                onClick={() => this.active(3)}
              >
                {" "}
                My Tests{" "}
              </Link>
            </li>
            <li>
              <span className="user-icon nav-item">{sessionStorage.name}</span>
            </li>
            <li>
              <GoogleLogout
                className="nav-item"
                clientId="1082313788044-ru8kfvsc9j6okm8itc5al91l4qf9kond.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={this.failure}
              ></GoogleLogout>
            </li>
          </ul>

          <Switch>
            <Route path="/createQuiz">
              <CreateQuizContainer />
            </Route>
            <Route path="/myQuizzes">
              <Quizzes />
            </Route>
            <Route path="/tests">
              <Tests />
            </Route>
            <Route path="/">
              <div className="home">
                <p>
                  * you can with this app to create multiple choice quizzes, to
                  do this click on create a quiz in the navbar.
                </p>
                <br />
                <p>
                  * you can also add people by their emails that can try these
                  quizzes and get results from them.
                </p>
                <br />
                <p>
                  * if anyone adds you to his quiz you can try it, ``and you
                  will find it in the tests in the navbar.
                </p>
                <br />
                <div>
                  <h2> Creator: ahmed samir </h2>
                  <h2> Email: asamir2211997@gmail.com </h2>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      );
    }

    return (
      <div className="back">
        <div className="login">
          <p>long in with your google account</p>
          <GoogleLogin
            clientId="1082313788044-ru8kfvsc9j6okm8itc5al91l4qf9kond.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.success}
            onFailure={this.failure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      </div>
    );
  }
}

export default App;

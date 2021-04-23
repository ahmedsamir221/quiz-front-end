import React from "react";
import CreateQuizContainer from "./../../CreateQuizFeature/CreateQuiz/CreateQuizContainer";
import "./Quiz.css";
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
    };
    console.log(props._id);
    let url = "https://make-your-quiz.herokuapp.com/getQuiz/" + props._id;
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.token,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        props.prepare(r);
        this.setState({
          data: true,
        });
      });
  }
  render() {
    if (this.state.data) {
      return (
        <div>
          <CreateQuizContainer _id={this.props._id} />
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

export default Quiz;

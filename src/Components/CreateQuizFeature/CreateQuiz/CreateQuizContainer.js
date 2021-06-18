import { connect } from "react-redux";
import CreateQuiz from "./CreateQuiz";
import { clearQuestions, clearName, clearEmails } from "./CreateQuizModule";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    quiz: state.quiz,
  };
};

const isQuizeValid = (quiz) => {
  if (!quiz.name) return false;
  if (quiz.questions.length === 0) return false;
  let check = quiz.questions.every((question) => {
    if (question.question.length === 0) return false;
    let check = question.answers.every((answer) => {
      if (answer.length === 0) return false;
      return true;
    });
    return check;
  });
  if (!check) return false;
  check = quiz.emails.every((email) => {
    if (!email) return false;
    return true;
  });
  return check;
};

const mapDispachToProps = (dispach, props) => {
  return {
    prepare: () => {
      if (!props._id) {
        dispach(clearQuestions());
        dispach(clearName());
        dispach(clearEmails());
      }
    },
    saveQuizClickHandler: (quiz) => {
      if (!isQuizeValid(quiz)) {
        console.log("in valid quiz");
        return;
      }
      if (props._id) {
        quiz._id = props._id;
        let url = "https://make-your-quiz.herokuapp.com/updateQuiz";
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.token,
          },
          body: JSON.stringify(quiz),
        })
          .then((r) => {
            window.location.href = "/myQuizzes";
            return r.text();
          })
          .then((r) => console.log(r))
          .catch(() => {
            alert("server error try again later.");
          });
        return;
      }

      let url = "https://make-your-quiz.herokuapp.com/addQuiz";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.token,
        },
        body: JSON.stringify(quiz),
      })
        .then((r) => {
          window.location.href = "/myQuizzes";
          return r.text();
        })
        .then((r) => console.log(r))
        .catch(() => {
          alert("server error try again later.");
        });
    },
  };
};

const CreateQuizContainer = connect(
  mapStateToProps,
  mapDispachToProps
)(CreateQuiz);
export default CreateQuizContainer;

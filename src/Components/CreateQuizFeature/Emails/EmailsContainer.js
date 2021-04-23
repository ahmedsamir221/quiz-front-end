import { connect } from "react-redux";
import Emails from "./Emails";

const mapStateToProps = (state) => {
  return {
    emails: state.quiz.emails,
  };
};

const EmailsContainer = connect(mapStateToProps)(Emails);
export default EmailsContainer;

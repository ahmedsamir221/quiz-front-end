import { connect } from "react-redux";
import Email from "./Email";
import { updateEmail, deleteEmail } from "./EmailModule";

const mapDispachToProps = (dispach) => {
  return {
    updateEmailClickHandler: (i, value) => {
      dispach(updateEmail(i, value));
    },
    deleteEmailClickHandler: (i) => {
      dispach(deleteEmail(i));
    },
  };
};

const EmailContainer = connect(null, mapDispachToProps)(Email);
export default EmailContainer;

import { connect } from "react-redux";
import AddEmail from "./AddEmail";
import { addEmail } from "./AddEmailModule";

const mapDispachtoProps = (dispach) => {
  return {
    addEmailClickHandler: () => {
      dispach(addEmail());
    },
  };
};

const AddEmailContainer = connect(null, mapDispachtoProps)(AddEmail);
export default AddEmailContainer;

import { connect } from "react-redux";
import AddQuestion from "./AddQuestion";
import { addQuestion } from "./AddQuestionModule";

const mapDispachToProps = (dispach) => {
  return {
    addQuestionClickHandler: () => {
      dispach(addQuestion());
    },
  };
};

const AddQuestionContainer = connect(null, mapDispachToProps)(AddQuestion);
export default AddQuestionContainer;

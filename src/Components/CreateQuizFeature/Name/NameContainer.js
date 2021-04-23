import { connect } from "react-redux";
import Name from "./Name";
import { updateName } from "./NameModule";

const mapStateToProps = (state) => {
  return {
    name: state.quiz.name,
  };
};

const mapDispachToProps = (dispach) => {
  return {
    updateNameClickHandler: (value) => {
      dispach(updateName(value));
    },
  };
};

const NameContainer = connect(mapStateToProps, mapDispachToProps)(Name);
export default NameContainer;

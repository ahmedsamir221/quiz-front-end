import { connect } from "react-redux";
import Answer from "./Answer";
import { updateTest } from "./AnswerModule";

const mapStateToProps = (state, props) => {
  console.log(state.test);
  return {
    isChecked: state.test[props.i] === props.j,
  };
};

const mapDispachToProps = (dispach) => {
  return {
    updateTestClickHandler: (i, j) => {
      dispach(updateTest(i, j));
    },
  };
};

const AnswerContainer = connect(mapStateToProps, mapDispachToProps)(Answer);
export default AnswerContainer;

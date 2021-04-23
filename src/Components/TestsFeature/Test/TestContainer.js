import { connect } from "react-redux";
import Test from "./Test";
import { fillTest } from "./TestModule";

const mapStateToProps = (state) => {
  return {
    answers: state.test,
  };
};

const mapDispachToProps = (dispach) => {
  return {
    prepare: (cnt) => {
      dispach(fillTest(cnt));
    },
  };
};

const TestContainer = connect(mapStateToProps, mapDispachToProps)(Test);
export default TestContainer;

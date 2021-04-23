import "./AddQuestion.css";
const AddQuestion = ({ addQuestionClickHandler }) => {
  return (
    <button onClick={addQuestionClickHandler} className="add-question">
      {" "}
      add question{" "}
    </button>
  );
};

export default AddQuestion;

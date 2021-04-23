import "../AddQuestion/AddQuestion.css";
const AddEmail = ({ addEmailClickHandler }) => {
  return (
    <button className="add-question" onClick={addEmailClickHandler}>
      {" "}
      add email{" "}
    </button>
  );
};

export default AddEmail;

import EmailContainer from "./../Email/EmailContainer";
import "./Emails.css";

const Emails = ({ emails }) => {
  return (
    <ul className="email-list">
      {emails.map((email, i) => {
        return (
          <EmailContainer key={i} i={i}>
            {email}
          </EmailContainer>
        );
      })}
    </ul>
  );
};

export default Emails;

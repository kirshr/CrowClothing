import SignUpForm from "../sign-up-form/sign-up-form.component";
import SignInForm from "../sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <h2>Sign In</h2>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;

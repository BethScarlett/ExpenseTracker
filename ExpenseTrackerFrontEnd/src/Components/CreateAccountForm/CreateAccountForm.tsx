import "./CreateAccountForm.scss";

const CreateAccountForm = () => {
  return (
    <div>
      <form>
        <h1>Create an account</h1>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input type="text" name="first-name" />
        </div>
        <div>
          <label htmlFor="last-name"></label>
          <input type="text" name="last-name" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input type="text" name="password" />
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;

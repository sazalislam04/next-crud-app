import AddUserForm from "./AddUserForm";
import UpdatedUserForm from "./UpdatedUserForm";

const Form = () => {
  const flag = true;

  return <>{flag ? <AddUserForm /> : <UpdatedUserForm />}</>;
};

export default Form;

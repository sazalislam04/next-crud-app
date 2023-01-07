import { useReducer } from "react";
import Bug from "./Bug";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const AddUserForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(formData).length === 0) {
      return alert("Please filup all input data");
    }
    console.log(formData);
  };

  //   if (Object.keys(formData).length > 0) {
  //     return <Success message={"Data Added Success"} />;
  //   }
  if (Object.keys(formData).length > 0) {
    return <Bug message={"Error Occure"} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 mt-2 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="fname"
          placeholder="First name"
          className="border py-3 px-3 w-full rounded-md focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-lg "
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="lname"
          placeholder="Last name"
          className="border py-3 px-3 w-full rounded-md focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-lg "
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="email"
          name="email"
          placeholder="Your email"
          className="border py-3 px-3 w-full rounded-md focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-lg "
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          placeholder="$00"
          name="salary"
          className="border  py-3 px-3 w-full rounded-md focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-lg "
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="date"
          placeholder="$00"
          name="date"
          className="border py-3 px-3 rounded-md focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-lg "
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="form-check">
          <input
            onChange={setFormData}
            type="radio"
            className="mr-1"
            name="status"
            value="Active"
            id="radioId1"
          />
          <label htmlFor="radioId1">Active</label>
        </div>
        <div className="form-check">
          <input
            onChange={setFormData}
            type="radio"
            className="mr-1"
            name="status"
            value="Inactive"
            id="radioId2"
          />
          <label htmlFor="radioId2">Inactive</label>
        </div>
      </div>

      <div className="button">
        <button className="bg-indigo-500 flex items-center gap-1 hover:bg-indigo-600 px-10 py-1 border hover:border-indigo-500 hover:bg-transparent rounded hover:text-gray-900 transition duration-300 text-gray-50 text-lg">
          Add{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;

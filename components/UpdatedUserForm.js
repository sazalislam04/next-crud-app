import { useReducer } from "react";
import Bug from "./Bug";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const UpdatedUserForm = () => {
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
        <button className="bg-yellow-500 flex items-center gap-1 px-10 py-1 border hover:border-yellow-500 hover:text-gray-900 hover:bg-white  rounded text-gray-50 text-lg transition duration-300">
          Updated{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default UpdatedUserForm;

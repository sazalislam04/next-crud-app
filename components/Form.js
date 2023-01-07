const Form = () => {
  return (
    <form className="mb-8 mt-2">
      <div className="flex items-center gap-8">
        <div className="input-type w-full">
          <input
            type="text"
            name="fname"
            placeholder="First name"
            className="border py-3 px-3 w-full rounded-md focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-lg "
          />
        </div>
        <div className="input-type w-full">
          <input
            type="text"
            name="lname"
            placeholder="Last name"
            className="border w-full py-3 px-3 rounded-md focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-lg "
          />
        </div>
      </div>
      <div className="flex gap-8 w-full mt-8">
        <div className="input-type w-full">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="border w-full py-3 px-3 rounded-md focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-lg "
          />
        </div>
        <div className="input-type w-full">
          <input
            type="text"
            placeholder="$00"
            name="salary"
            className="border w-full py-3 px-3 rounded-md focus:border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-lg "
          />
        </div>
      </div>
      <div className="flex gap-4 items-center mt-5">
        <div className="form-check">
          <input
            type="radio"
            className="mr-1"
            name="check"
            value="Active"
            id="radioId1"
          />
          <label htmlFor="radioId1">Active</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="mr-1"
            name="check"
            value="Inactive"
            id="radioId2"
          />
          <label htmlFor="radioId2">Inactive</label>
        </div>
      </div>
      <div className="button mt-5">
        <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1 rounded text-gray-50 text-lg">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;

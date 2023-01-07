import Users from "../model/user";
// Controller
// get: http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    if (!users) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching Data" });
  }
}
// get: http://localhost:3000/api/user/1
export async function getUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User Data not found" });
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

// post: http://localhost:3000/api/users
export async function postUsers(req, res) {
  try {
    const formData = req.body;
    if (!formData) {
      res.status(404).json({ error: "FormData not Provided...!" });
    }
    Users.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error: "Error while fetching data" });
  }
}

// put: http://localhost:3000/api/users/1
export async function putUsers(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;
    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    return res.status(404).json({ error: "Error while fetching data" });
  }
}

// delete: http://localhost:3000/api/users/1

export async function deleteUsers(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findByIdAndDelete(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "Users not selected..!" });
  } catch (error) {
    return res.status(404).json({ error: "Error while deleting the user" });
  }
}

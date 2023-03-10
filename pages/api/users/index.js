import {
  deleteUsers,
  getUsers,
  postUsers,
  putUsers,
} from "../../../database/controller";
import connectDB from "../../../database/mongo";

export default async function handler(req, res) {
  connectDB().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );
  //  type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      postUsers(req, res);
      break;
    case "PUT":
      putUsers(req, res);
      break;
    case "DELETE":
      deleteUsers(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}

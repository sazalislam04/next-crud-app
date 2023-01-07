// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../database/mongo";

export default function handler(req, res) {
  connectDB();
  res.status(200).json({ message: "running on next app server" });
}

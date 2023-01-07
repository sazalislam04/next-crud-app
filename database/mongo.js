import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.ghivirv.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const connectDB = async () => {
  try {
    client.connect();
    console.log("database connect");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;

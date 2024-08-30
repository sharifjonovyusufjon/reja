const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://yusufjon6727:Yusufjon7276@cluster0.2h5wt.mongodb.net/";
mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("MongoDB connected ERROR");
    } else {
      console.log("MongoDB connected success!");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT} http://localhost:${PORT}`
        );
      });
    }
  }
);

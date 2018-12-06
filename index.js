const mongoose = require("mongoose");
const app = require("./app");
const port = 3002;

app.listen(port, () => console.log(`Server is listening on port ${port}`));

// Mongoose Connection
mongoose.connect("mongodb://localhost/fakebae", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => console.log(err));

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./routes/emailRoutes")(app);

app.get("/", (req, res) => {
  res.send("Hello, Gridder!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

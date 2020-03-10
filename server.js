const express = require("express");
const app = express();

app.set('view engine', 'ejs');

//Setting the defaul folder to search for any included scripts
app.use(express.static(__dirname + '/'))

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});


app.get("/", (req, res) => {
  res.render("index");
});

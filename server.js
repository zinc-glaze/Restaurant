var express = require("express");
var path = require("path");

var app = express();

var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
  {
  id: "Example",
  name: "John Smith",
  email: "YourEmail@gmail.com",
  phone: "(999) 999-9999"
}
];

var waitList = [
{
  id: "Example",
  name: "John Smith",
  email: "YourEmail@gmail.com",
  phone: "(999) 999-9999"
}
];

//ROUTING
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
   
});
app.get("/api/wait", function(req, res) {
  
   return res.json(waitList);
});
app.get("/api/res", function(req, res) {
  
   return res.json(reservations);
});

//Create new reservation
app.post("/api/reservations", function(req, res) {

  var newRes = req.body;

  console.log(reservations.length);
  if (reservations.length < 5) {
  reservations.push(newRes);
  
  }
  else {
    waitList.push(newRes);
   

  }
  
});


/////////////////Listener////////////////////////////////
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
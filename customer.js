var express = require('express');
var app = express();



var EmployeeController=function (req, res) {
  console.log("CAlling rest api");
  var Employee=[
            {Empid:'1' firstName:'Sumit',lastName:'Pawar',salary:'100000'},
            {Empid:'2' firstName:'Harsh',lastName:'Rakshit',salary:'200000'},
            
      ];
  res.send(Employee);
};



app.get('/Employee',EmployeeController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})















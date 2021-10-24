var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "jam",
    password: "",
    database: "mydb",
    port : "3000"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Contected");
});
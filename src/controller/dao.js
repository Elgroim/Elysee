var express = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "elysee"
});

dao = express();

var getCRSByGroup;
getCRSByGroup = () => {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT intervention_group.name as groupe, crs.name as membre FROM intervention_group, crs WHERE crs.group_id = intervention_group.id", function (err, result, fields) {
            if (err) throw err;

            if(result.length > 0){

            }
            console.log(result);
        });
    });
};

var getArmory;
getArmory = () => {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT intervention_group.name as groupe, crs.name as membre FROM intervention_group, crs WHERE crs.group_id = intervention_group.id", function (err, result, fields) {
            if (err) throw err;

            if(result.length > 0){

            }
            console.log(result);
        });
    });
};

module.exports = getArmory;
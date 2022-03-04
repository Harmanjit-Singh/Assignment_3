const exp = require("express");
const app = exp();

const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const { check, validationResult } = require("express-validator");
const { request, response } = require("express");

app.use(bodyParser.urlencoded({ extended: false }));
app.engine(".hbs", handlebars.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use(exp.static("public"))

app.get('/home', function (req,res){
    res.sendFile(__dirname+"/home.html");
});

app.get('/registration', function (req, res) {
    res.render("registration", { layout: false });
});

app.post("/registration_submit", function (req, res) {

    let resObj = {
        firstname: req.body.fname,
        lastname: req.body.lname,
        birthdate: req.body.birthDate,
        phonenumber: req.body.pnumber,
        email: req.body.email,
        msg1:"",
        msg2:"",
        msg3:"",
        msg4:"",
        msg5:"",
    };


    if (resObj.firstname) {
        resObj.msg1 = "";
    }

    else {
        resObj.msg1 = "First name is Invaild";
    }

    if (resObj.lastname) {
        resObj.msg2 = "";
    }

    else {
        resObj.msg2 = "Last name is Invaild";
    }
    if (resObj.birtdate) {
        resObj.msg3 = "";
    }

    else {
        resObj.msg3 = "Birthdate is Invaild";
    }
    if (resObj.phonenumber) {
        resObj.msg4 = "";
    }

    else {
        resObj.msg4 = "Phone Number is Invaild";
    }

    if (resObj.email) {
        resObj.msg5 = "";
    }

    else {
        resObj.msg5 = "Email is Invalid";
    }

    res.render("registration", { resObj: resObj, layout: false });
});



app.get('/login', function (req, res) {
    res.render("login", { layout: false });
});

app.post("/login_submit", function (req, res) {

    let resObj = {
        useremail: req.body.email,
        userpassword: req.body.password,
        msg1: "",
        msg2: ""
    };

    if (resObj.useremail) {
        resObj.msg1 = "";
    }

    else {
        resObj.msg1 = "Email is Invalid";
    }

    if (resObj.userpassword) {
        resObj.msg2 = "";
    }

    else {
        resObj.msg2 = "Password is Invalid";
    }

    res.render("login", { resObj: resObj, layout: false });
});

const port = process.env.PORT || 8080;
app.listen(port);
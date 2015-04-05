/**
 * Created by Kenan on 5.4.2015.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mailer = require('nodemailer');
var hash = require('MD5');
var user = require('../dbmodels/user').User;

router.get('/:jwt', function(req, res, next) {
    var dek = jwt.decode(req.params.jwt);
    var username = dek.U;
    var password = dek.P;
    var email = dek.E;
    var insert = {
        "Username": username,
        "Password" : password,
        "Email" : email
    }
    //user.create(insert);

    user.create(insert, function (err, post) {
        if (!err) {
            //fali view
            res.status(200).json({"message":"Korisnik uspjesno dodan."});
        } else {
            //fali view
            res.status(500).json({"message":"Greška prilikom kreiranja korisnika."});
        }
    });
    //router.body += '{"Username":'+username+',"Password":'+password+',"Email":'+email+'}';
    //router.redirect("./user");
    //res.status(200).json(insert);
});

router.put('/', function(req, res, next) {

    var username = req.body.username;
    var password = hash(req.body.password);
    var email = req.body.email;
    var key = "gramas sifra";

    var my_jwt = jwt.sign({"U":username, "P":password, "E":email}, key);

    var mail_text = "Ovo je automatski mail, ne odgovarajte.";
    mail_text += "\n\nMail je poslan od strane www.gramas.ba ";
    mail_text += "\nVaš username je " + username;
    mail_text += "\nVaš password je " + password;
    mail_text += "\n\nKliknite na sljedeći link kako biste završili vašu registraciju: http://localhost:3000/register/"+my_jwt

    var transport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "gramasautomaticmail@gmail.com",
            pass: "%3avrk)i9{-ccv!?"
        }
    });
    transport.sendMail({
        from: "gramasautomaticmail@gmail.com",
        to: email,
        subject: "Registracija na www.gramas.ba",
        text : mail_text

    }, function(err,responseStatus){
        transport.close();
        if(!err)
        //view fali
            res.status(200).json({"jedinica": "ok", "email" :email});
        else
        //view fali
            res.status(500).json({"dvica": err, "email" : email});
    });

});

module.exports = router;
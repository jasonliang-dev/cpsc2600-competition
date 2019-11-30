// TODO
const {check} = require('express-validator');


const sort = require('./sortingHat.js');



exports.studentValidator = [
    check("name")
    .trim()
    .not().empty().withMessage("Student Name empty")
    .custom(value => sort(value).then(house => {
        if (house === "Griffindor"){
            return true;
        }
        Promise.reject();
    })).withMessage("Student from wrong house")
    
    ]
    

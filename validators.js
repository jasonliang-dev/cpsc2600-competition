// TODO
const {check} = require('express-validator');


const sort = require('./sortingHat.js');



exports.studentValidator = [
    check("name", "Your student's name is empty")
    .trim()
    .not().empty()
    .escape(),
    check("name", "Student from wrong house")
    .custom(value => sort(value).then(house => {
        if (house === "Griffindor"){
            return true;
        }
        Promise.reject();
    }))
    
    ]
    

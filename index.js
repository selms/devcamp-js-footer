'use strict';
// means all of the code we write has to follow best practices but must follow
// js code


var moment = require('moment');



/**

 * Returns a string element with a footer and updating year

 * @param {string} name
 * means that the function will expect a parameter... the argument is the 'name'

 * @return {string}

 */

exports.footer = function (name) {

    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";

};
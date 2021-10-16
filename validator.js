/**
 * Function for checking email.
 * @param {*} email 
 * @returns true / false
 */
function validateEmail(email) {    
    let regexp = /^(([\da-z]){1}([\da-z\.\+\-]){1,19})@(([\da-z.!$%&’*+\/=?^_-]){1,15})\.{1}([a-z]{1,5})$/i;    
    return regexp.test(email);
}
let validEmail = ["fi@secondpart.end", "first-part@.se=cond%p.art.end", "first.part@se=cond%part.r"];
let noValidEmail = ["f@secondart.end,", "first-part@.se=cond@part.end", "-firstpart@.se=cond%.enddeded", 
                    "firs_tpart@.se.en", "firstpart@.se.enddeded"];

// test valid
for( let el of validEmail) {
    if (!validateEmail(el)) {
        console.log(`${el}` + " - test failed");
    }
}
// test no valid
for( let el of noValidEmail) {
    if (validateEmail(el)) {
        console.log(`${el}` + " - test failed");
    }
}
/**
 * Function for checking phone.
 * @param {*} phone 
 * @returns 
 */
function validatePhone(phone) {
    let regexp = /^(?=.{10,25}$)((\+?[\- ]*?((\d[\s-]*?){2}))?([\s-]*?))((\(?[\s-]*?((\d[\s-]*?){3})\))?|((\d[\s-]*?){3}))([\s-]*?\d[\s-]*?){7}$/;
    return regexp.test(phone);
}
let validPhone = ["+38 (099) 567 8901", "+38 099 5 6 7 8 9  01", "(09-9) 567-890-1",
                  "--  (099) 567 890-1"];
let noValidPhone = ["+38 (099) 567 8901 0", "+38 099 a0000000", "+38 (0989) 567 8901", 
                    "+48 (0989) 567 8901"];

// test valid
for( let el of validPhone) {
    if (!validatePhone(el)) {
        console.log(`${el}` + " - test failed");
    } else {
        console.log(`${el}` + " - OK");
    }
}
// test no valid
for( let el of noValidPhone) {
    if (validatePhone(el)) {
        console.log(`${el}` + " - test failed");
    } else {
        console.log(`${el}` + " - OK");
    }
}
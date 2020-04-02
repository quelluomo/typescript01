"use strict";
var userInput; //we use this when we don't know what's the type
var userName;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
} // to assign a type to unknown, we first need to check that we actually want to change its type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured", 500);

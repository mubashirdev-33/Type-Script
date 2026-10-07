"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "ADMIN";
    UserRole["manager"] = "MANAGER";
})(UserRole || (UserRole = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Not_Found"] = 404] = "Not_Found";
    StatusCode[StatusCode["Success"] = 200] = "Success";
})(StatusCode || (StatusCode = {}));
let arr = ["ckd", false];
let arr2 = ["vmfk", false, 45, null];
let abc = () => {
    console.log("hi janii");
};
abc();
// let foo ; => any
// type narrowing
let foo;
if (typeof foo == "string") {
    foo.toUpperCase();
}
if (typeof foo == "number") {
    foo.toFixed();
}
let val = 45;
// class in TS
class laptop {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let l1 = new laptop("hp", 45000);
console.log(l1);

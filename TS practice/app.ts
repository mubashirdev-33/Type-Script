enum UserRole {
  admin = "ADMIN",
  manager = "MANAGER",
}
enum StatusCode {
  Not_Found = 404,
  Success = 200,
}

let arr: (string | number | boolean)[] = ["ckd", false];
let arr2 = ["vmfk", false, 45, null];

let abc = (): void => {
  console.log("hi janii");
};
abc();

// let foo ; => any
// type narrowing
let foo: unknown;
if (typeof foo == "string") {
  foo.toUpperCase();
}
if (typeof foo == "number") {
  foo.toFixed();
}

let val = 45;

// class in TS
class laptop {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

let l1 = new laptop("hp", 45000);
console.log(l1);

interface userObj {
  name: string;
  age: number;
  email: string;
  pass: string | number;
}

function jani(obj:userObj):void {
    obj.age 
}

jani()


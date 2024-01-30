//one by one import

// import * as usr from "./modules/user.js";
// import { code, withdraw } from "./modules/user.js";

//import multiple function in single import
//yaha pe default function ka name dena compulsory hai.
import { default as tg, withdraw as wd, deposit } from "./modules/account.js";
//jab hamare pass 2 function hota same name ka alag alag file me to  as ka use karte hai. nahi to error show hoga

// console.log(usr.name);

// usr.code();
// wd();
// usr.withdraw();
// deposit();

// tg();

import { code } from './modules/user.js';
// code();




//aggregating module

//yaha pe hum chahte the ki ek he import me sab function ka use kare  --> grouping
import { circle, triangle, square } from "./aggregating_module/shape.js";
circle();
triangle();
square();

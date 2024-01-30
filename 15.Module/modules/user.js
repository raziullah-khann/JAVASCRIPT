import { withdraw } from "./account.js";

//har file me ek he default function hoga aur us function ka koi name nahi hoga
//aur export isko compulsory karna he karna hai.
export default function() {
    console.log("user default function called...");
}

export let name = "Raziullah";
let age = 22;

export function code() {
    console.log("coding...");
    withdraw();
}

// export function withdraw() {
//     console.log("User withdraw function called...");
// }

function cook() {
    console.log("cooking...");
}


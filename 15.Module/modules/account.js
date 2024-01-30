//jab hamko lagta ki function clash karega to use karte hai export default
//mtlb ek he function 2 3 file me hai 
export default function() {
    console.log("account default function called...");
}

let account_no = 42553215;
let account_type = "saving";    

function withdraw() {
    console.log("Account withdraw function called...");
}

function deposit() {
    console.log("Balance Updated...");
}

export {withdraw, deposit}
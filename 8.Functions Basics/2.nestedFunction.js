function addSquare(a,b) {
    
    const sa = squares(a);
    const sb = squares(b);
    console.log(`The inner ${sa}`);
    
    function squares (num){ 
        return num*num;
    }
    
    return sa + sb;
    
}
console.log(addSquare(3,4));
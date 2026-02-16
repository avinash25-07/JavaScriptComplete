let expect = function(val) {
    function toBe(otherVal){
        if(val === otherVal){
            return true;
        }
        else {
            throw new Error("Not Equal");
        }
    } 
    function notToBe(otherVal){
        if(val !== otherVal){
            return true;
        }
        else {
            throw new Error("Equal");
        }
    }

    return {
        toBe,
        notToBe
    } 
};

// let r = expect(5).toBe(5);
// console.log(r); // true
let r1 = expect(5).notToBe(5);
console.log(r1); // throws "Equal"
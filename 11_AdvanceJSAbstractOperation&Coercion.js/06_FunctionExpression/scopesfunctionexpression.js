const f = function fun(){
    console.log("How much fun???");
    // fun(); /// can all here but outside need to call f() - RangeError: Maximum call stack size exceeded
} // here it gets the scope of corresponding variable in which they are assined scope of "f"
f();
// fun(); // here can't call it b/c it gets scope of f() function so can't aceess outside that function 
//case 1
function fun() {
    for(var i = 0; i < 10; i++){     // use let not var
        //do something
    }
    console.log(i);  // can i access outside also
}

fun();

//case 2 - swap to element 
function process() {
    if (x > y) {
        var temp = x;   // use let instead var
        x = y;
        y = temp;  // so temp can access outside so i can create problems using let it can be better
    }
    return y - x;
}
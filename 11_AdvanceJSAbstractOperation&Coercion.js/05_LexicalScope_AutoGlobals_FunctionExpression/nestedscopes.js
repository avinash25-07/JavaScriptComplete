function fun() {    // fun -> GC
    var x = 10;    // x -> Fun Scope
    function gun() {    //gun -> fun Scope
        var y = 20;     //y -> gun scope
        console.log(x);   // if gun called then -> prints 10 else only declaration untill it called
        console.log(y);  // y -> 20
    }
    gun();
    console.log(x);  // 10
    console.log(y);  //here we get one scope out there is no y in auto globals also so gets error //hapens in execution phase 
                        //but we return it and store then we can access y but scope concept doesn't comes
}

fun();
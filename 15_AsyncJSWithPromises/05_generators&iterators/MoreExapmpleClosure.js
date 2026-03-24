function process(){
    let i = 0;
    function innerProcess1(){
        i += 1;
        return i;
    }
    function innerProcess2(){
        i += 1;
        return i;
    }
    return {innerProcess1, innerProcess2}
}

y = process();
console.log(y);
i1 = y.innerProcess1();
console.log(i1);
i1 = y.innerProcess1();
console.log(i1);
i1 = y.innerProcess1();
console.log(i1);
i1 = y.innerProcess1();
console.log(i1);
i1 = y.innerProcess1();
console.log(i1);
i2 = y.innerProcess2();
console.log(i2);
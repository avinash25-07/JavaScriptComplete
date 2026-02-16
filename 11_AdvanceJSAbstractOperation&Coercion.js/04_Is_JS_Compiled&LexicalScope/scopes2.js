var teacher = "Sanket";

function fun() {
    var teacher = "Pulkit";
    // content;  // gets error b/c using here without assign
    // content =  "JS";  //here content gets GC 
    var content;   //here content grts FC not global scope 
    console.log(teacher);
    console.log(content); // b/c of content gets FC print undefined
}

function gun() {
    var student = "Avinash";
    console.log(student);
}

// console.log(content);  //throw error here b/c using it not assining
gun();
fun();
console.log(teacher);
// console.log(content);  //works here b/c autoglobals when fun executes content get GC b/c of autoglobals thats it
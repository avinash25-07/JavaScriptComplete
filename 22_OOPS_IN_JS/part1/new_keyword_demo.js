class Product {
    #name;  //private
    // price;
    // description;
    // no need to define this values and why this - 

    constructor(n, p, d) {
        this.#name = n;
        this.price = p;
        this.description = d;
        // return 10;   // no effect
        // return {x: 10}; //get obj. return
        // return this; // if you don't return anything it equal to saying return this
    }

    set name(n) {
        this.#name = n;
    }

    set name1(n) {
        this.#name = n;
    }

    get getname() {
        return this.#name;
    }

    get getname1() {
        return this.#name;
    }

    
    display() {
        console.log(this);
    }
}

const p = new Product("Bag", 100, "a cool bag");
// p.display();
// console.log(p);

p.name = "Raja";
p.name1 = "baja";
console.log(p.getname);
console.log(p.getname1);
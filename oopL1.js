'use strict'
/**
 * Class AbstractProduct
 * @param {*} name 
 * @param {*} description 
 * @param {*} price 
 * @param {*} brand 
 */
function AbstractProduct(name = "", 
                        description = "", 
                        price = 0.00,
                        brand = "") {    
    this.ID = Symbol("id");
    this.name = name;    
    this.description = description;
    this.price = price;
    this.quantity = 0;
    this.reviews = [];
    this.images = [];
    this.date = new Date (2021, 0, 1, 0, 0, 0, 0);
    this.brand = brand;
}
// Adding methods to a class AbstractProduct
Object.assign(AbstractProduct.prototype, {
    getID() {return this.ID;},
    setID(id) {this.ID = Symbol(id);},
    getName() {return this.name;},
    setName(name) {this.name = name;},
    getDescription() {return this.description;},
    setDescription(description) {
        this.description = description;    
    },
    getPrice() {return this.price;},
    setPrice(price) {this.price = price;},
    getBrand() {return this.brand;},
    setBrand(brand) {this.brand = brand;},
    
    getQuantity() {return this.quantity;},
    setQuantity(quantity) {this.quantity = quantity;},
    getDate() {return this.date;},
    setDate(date = new Date) {this.date = date;},
    getReviewByID(id) {
        if(id >=0 & id < this.reviews.length) {
            return this.reviews[id];
        };
    },
    getImage(id = 0) {
        if(id >=0 & id < this.images.length) {
            return this.images[id];
        }        
    },
    addReview (review) {
        this.reviews.push(review);
        return this;
    },
    deleteReview(id) {
        if(id >=0 & id < this.reviews.length) {
            this.reviews.splice(id, 1);
        } 
    },
    getAverageRating() {
        let resAr = [];
        this.reviews.forEach(element => {
            resAr = resAr.concat(Object.values(element.rating));
        });
        console.log(resAr);
        let check = resAr.reduce((a, b) => a + b) / resAr.length;
        return check;
    },
    getFullInformation() {        
        let res = "";
        for (let el of Object.keys(this)) {            
            res += '' + el + ' - ' + JSON.stringify(this[el]) + '\n'
        }
        return res;
    },
    getPriceForQuantity(int) {
        return 'Quantity ' + int + " = $" + (this.price * int);
    },
    superFunction (name = 'name', value = null) {
        if (value == null) {
            return this[name];
        } else {
            this[name] = value;
        }
    }
})
/**
 * Class Clothes
 * @param {*} material 
 * @param {*} color 
 */
function Clothes(material = '', color = '') {
    this.material = material;
    this.color = color;
}

Clothes.prototype = Object.create(AbstractProduct.prototype);
// Adding methods to a class Clothes
Object.assign(Clothes.prototype, {
    getMaterial() {
        return this.material;
    },
    setMaterial(material) {
        this.material = material;
    },
    getColor() {
        return this.color;
    },
    setColor(color) {
        this.color = color;
    }
})
/**
 * Class Electronics
 * @param {*} warranty 
 * @param {*} power 
 */
function Electronics(warranty = 0, power = 0) {
    this.warranty = warranty;
    this.power = power;
}

Electronics.prototype = Object.create(AbstractProduct.prototype);
// Adding methods to a class Electronics
Object.assign(Electronics.prototype, {
    getWarranty() {
        return this.warranty;
    },
    setWarranty(warranty) {
        this.warranty = warranty;
    },
    getPower() {
        return this.power;
    },
    setPower(power) {
        this.power = power;
    }
})

// let test = new AbstractProduct('ddd');
// console.log(test.getID());
//console.log(test.getFullInformation());
let test2 = new Electronics(10, 20);
test2.setName('Sasha');
test2.setPrice(25);
test2.setID(1);
console.log(test2.getID());
console.log(test2.getName());
console.log(test2.getFullInformation());
console.log(test2.getPriceForQuantity(10));
test2.superFunction('name', 'Vasya');
console.log(test2.superFunction('name'));
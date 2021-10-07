let count = 0;

// Obj - Product
function Product (name = "", 
                  description = "", 
                  price = 0.00,
                  brand = ""
                  ){
    this.ID = Symbol(`${count++}`);
    this.name = name;    
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    this.activeSize = '';
    this.quantity = 0;
    this.date = new Date (2021, 0, 1, 0, 0, 0, 0);    
    this.reviews = [];
    this.images = [];

    this.getID = function () {return this.ID;}    
    this.getName = function () {return this.name;}
    this.setName = function (name) {this.name = name;}
    this.getDescription = function () {return this.description;}
    this.setDescription = function (description) {
        this.description = description;    
    }
    this.getPrice = function () {return this.price;}
    this.setPrice = function (price) {this.price = price;}
    this.getBrand = function () {return this.brand;}
    this.setBrand = function (brand) {this.brand = brand;}
    this.getSize = function () {return this.activeSize;}
    this.setSize = function (size) {this.activeSize = size;}
    this.getQuantity = function () {return this.quantity;}
    this.setQuantity = function (quantity) {this.quantity = quantity;}
    this.getDane = function () {return this.date;}
    this.setDate = function (date = new Date) {this.date = date;}
    this.getReviewByID = function (id) {
        if(id >=0 & id < this.reviews.length) {
            return this.reviews[id];
        }        
    }    
    this.getImage = function(id = 0) {
        if(id >=0 & id < this.images.length) {
            return this.images[id];
        }        
    }
    this.addSize = function(str) {
        this.sizes.push(str);
    }
    this.deleteSize = function(id) {
        if(id >=0 & id < this.sizes.length) {
            this.sizes.splice(id, 1);
        }        
    }
    this.addReview = function (review) {
        this.reviews.push(review);
    }
    this.deleteReview = function (id) {
        if(id >=0 & id < this.reviews.length) {
            this.reviews.splice(id, 1);
        } 
    }
    this.getAverageRating = function () {
        let resAr = [];
        this.reviews.forEach(element => {
            resAr = resAr.concat(Object.values(element.rating));
        });
        console.log(resAr);
        let check = resAr.reduce((a, b) => a + b) / resAr.length;
        return check;
    }
}
// Obj - Reviews
function Reviews (id, 
                  author = "", 
                  date = new Date, 
                  comment = ""
                  ){
    this.ID = '' + id;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = {};
}

// test
let testPro1 = new Product("BMV333");
console.log(testPro1.name);
testPro1.name = 'BMV';
console.log(testPro1.getName());
console.log(testPro1.getID());
console.log(testPro1.sizes);
testPro1.deleteSize(2);
console.log(testPro1.sizes);

let ratArr1 = {service: 5, price: 10, value: 34, quality: 12};
let ratArr2 = {price: 18, quality: 30};
let ratArr3 = {service: 32, price: 20, value: 13, quality: 12};

let testRew1 = new Reviews (1, 'Nikitenko');
let testRew2 = new Reviews (2, 'Bro');
let testRew3 = new Reviews (3, 'Redly');
testRew1.rating = ratArr1;
testRew2.rating = ratArr2;
testRew3.rating = ratArr3;
testPro1.addReview(testRew1);
testPro1.addReview(testRew2);
testPro1.addReview(testRew3);
console.log(testPro1.getAverageRating());
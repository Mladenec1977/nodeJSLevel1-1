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
            resAr = Object.values(element.rating);
        });
        let check = resAr.reduce((a, b) => a + b) / resAr.length;
        return check;
    }
}
// Obj - Reviews
function Reviews (Id, author = "", 
                  date = new Date, 
                  comment = ""
                  ){
    this.ID = '' + Id;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = [];
}

test1 = new Product("BMV333");
console.log(test1.name);
test1.name = 'BMV';
console.log(test1.name);
// test1.getName();
// console.log(test1.getID());
// test1.deleteSize(-10);
// console.log(test1.sizes);
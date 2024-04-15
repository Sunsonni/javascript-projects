// Define your Book class here:
class Book{
    constructor(title, author, copyrightDate, isbn, numPages, 
    numCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numPages = numPages;
        this.numCheckedOut = numCheckedOut;
        this.discarded = discarded;
    }

    checkOut(uses = 1) {
         return this.numCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor (title, author, copyrightDate, isbn, numPages, 
        numCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numPages, 
            numCheckedOut, discarded); 
    }
    discardOldManuals () {
    if(this.copyrightDate < 2019){
        this.discarded = 'Yes';
    }
    return this.discarded;
    }
}

class Novel extends Book {
    constructor (title, author, copyrightDate, isbn, numPages, 
        numCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numPages, 
            numCheckedOut, discarded);
    }
    over100CheckedOut () {
    if(this.numCheckedOut > 100) {
        this.discarded = "Yes";
    }    
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideNPrejudice = new Novel('Pride and Prejudice','Jane Austen',
1813,1111111111111,432,32,"No");
let makingTheShip = new Manual('Top Secret Shuttle Building Manual',
'Redacted', 2013, 0o0, 1147, 1, "No");

// Code exercises 4 & 5 here:
console.log(makingTheShip.discardOldManuals());
console.log(prideNPrejudice.checkOut(5));
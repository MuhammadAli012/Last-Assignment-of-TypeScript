// 1. Write a TypeScript program to list the properties of a TypeScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log("Name is:", student.name);
console.log("sclass is:", student.sclass);
console.log("Rollno is:", student.rollno);


         
// 2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

var student2 = {
     name : "David Rayy",
     sclass : "VI",
     rollno : 12
     };

console.log("object without Delete", student2);
var student2 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
    };
  // delete student2.rollno;
    
console.log("object with Delete rollNO property", student2);
     



// 3. Write a TypeScript program to get the length of a TypeScript object.   
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

var student4 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log("the lenght of given object is :" , Object.keys(student4).length);
    


// 4. Write a TypeScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

for (let index = 0; index < library.length; index++) {
       const student = library[index];
       console.log("author Name: ", student.author);
       console.log("title name: ", student.title);
       console.log("book status: ", student.readingStatus);
    
    }


//5. Write a TypeScript program to get the volume of a Cylinder with four decimal places using object classes.   
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
  }
  
  Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
  };
  
  var cyl = new Cylinder(7, 4);
  // Volume of the cylinder with four decimal places.
  console.log('volume =', cyl.Volume().toFixed(4));

  

  //--------------------------------google pick up-------------------------------------





  





//1

// for (var i = 0;  i< 5; i++){
//     console.log('Hello world' ,i)

// }




//2
// for (var i = 1; i<=10 ; i++){
//     console.log(i)
// }



//3
    // var tableNumber = +prompt("enter an TableNumber");
    // var tableLenght = +prompt("Enter table lenght")

    // for( var i =0; i<=tableLenght; i++){
    //     // var result = i * tableNumber;
    //     console.log("tebleNumer"+ tableNumber +" ableLenght" + tableNumber * [i] )
    // }


//4



// var mobile = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']

// for( var i = 0; i<mobile.length; i++){

//     console.log(mobile[i])
// }




//5

// var mobile = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']

// for( var i = 0; i<mobile.length; i++){
//     var firstIndex = 0;
//     console.log(firstIndex);
//     var mobilIndex = mobile[firstIndex] 

//     console.log('firstIndex ' , )
    
//     // var lastIndex = mobile.length -;
//     //   console.log(lastIndex);


//     console.log(mobile[i])

// }





//7


 
































// 1. Write a program to display the message “Hello World” 5 times 
// in your browser using for loop......................................................

// var div = document.querySelector("div")


// for(var i = 1; i<=5; i++){
//     console.log('Hello world', i)

//     div.innerHTML += `Hello wolrd <br>`
// }

















// Write a program to print numeric counting from 1 to 10


// var div = document.querySelector("div")
// for(var i = 1; i<= 10; i++){
//     console.log(i);
//     div.innerHTML +=   `${i} <br>`
// }



















// Write a program to print multiplication table of any number 
// using for loop. Table number & length should be taken as an 
// input from user



// var tableNumber = +prompt("Enter your table Number ");
// var tableLength = +prompt("Enter your table lenght ");
// var div = document.querySelector("div")


// for(var i =1 ; i<=tableLength; i++){

//     var result = i * tableNumber;
//     console.log("tableNumber * " + tableNumber + " == "  +  tableNumber * [i]);

//     div.innerHTML += ` tablenumber * tablelenght == ${result} </br> `
// }





// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.











// var div = document.querySelector("div");

// var phones = [ 'nokia' , 'samsung ', 'apple', 'sony','Huawei'];

// console.log(phones)

// for(var i =0; i<=phones.length; i++){
//     console.log(phones[i])
//   div.innerHTML += `${phones[i]} <br/>`

// }






// . Write a program to print items of the following array using for 
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]





// var div = document.querySelector("div")
// var fruits =['apple','banana','mango','organe','strawberry']
// console.log(fruits);

// console.log('Element at index 0 is ', fruits[0]);
// console.log('Element at index 1 is ', fruits[1]);
// console.log('Element at index 2 is ', fruits[2]);
// console.log('Element at index 3 is ', fruits[3]);
// console.log('Element at index 4 is ', fruits[4]);



// for(var i = 0; i <=fruits.length; i++){
//     console.log(fruits[i]);

//     div.innerHTML +=   `${fruits[i]} <br/>`
    
// }

// div.innerHTML += ` <br/>Element at index o is ${fruits[0]} <br/> Element at index 1 is ${fruits[1]} <br/>Element at index 2 is ${fruits[2]}  <br/>Element at index 3 is ${fruits[3]}   <br/>Element at index 4 is ${fruits[4]}`










 

// var arr = +prompt("enter your items");

// var items = []

// for (var i = 0; i < arr; i++) {
//     var arr = items.push('')
//     console.log(arr[items])
// }



// 7. Generate the following series in your browser. See example 
// output.



//a

// var div = document.querySelector("div")
// div.innerHTML +=`counting `
//  for(var i =1; i<=10; i++){
//     console.log(i)
//     div.innerHTML += `  ${i} `
//  }



// 7. Generate the following series in your browser. See example 
// output.


//b






// var div = document.querySelector("div")
// div.innerHTML += `Reversing Number is `
// for( var i = 10; i>0 ; i--){
//     console.log(i)

//     div.innerHTML += ` ${i}`
// }




//c
// var div = document.querySelector("div")
// div.innerHTML += `even Number is `
// for(var i= 0; i<=20; i +=2 ){
//     console.log(i)
//     div.innerHTML += `  ${i}`
// }



//d
// var div = document.querySelector("div");
// div.innerHTML += `odd  number  `
// for(var i=1; i<20; i+=2){
//     console.log(i)

//     div.innerHTML += `${i}   `
// }







// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is 
// found in the list or not.







// var div = document.querySelector("div")
// var  A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search in the list:");

// if (A.includes(userInput)) {
//     alert(userInput + " is available in the list.");
//     div.innerHTML += ` Here is available in the lis <br/> ${A}`
// } else {
//     alert(userInput + " is not available in the list.");
// div.innerHTML += `is not available in the lis `
// }



// 9. Write a program to identify the largest number in the given 
// array.
// A = [24, 53, 78, 91, 12]




// var div = document.querySelector("div")

// var A = ['24', '53', '78', '91', '22'];
// var largest = A[0]; 

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest=  A[i]; 
//     }
// }

// console.log("The largest number in the array is: " + largest);
// div.innerHTML += ` The Array is ${A} <br/>`
// div.innerHTML += `THe largest number in the array is ${largest}`



// 10. Write a program to identify the smallest number in the given 
// array.
// A = [24, 53, 78, 91, 12]


// var div = document.querySelector("div");

// var A = ['24', '53', '78', '91', '12'];

// var smallNumber = A[0];

// for(var i = 0; i<=A.length; i++){
//     if(A[i] < smallNumber){
//         smallNumber = A[i]
//     }
// }
// console.log("The SmallNumber is :" , smallNumber)
// div.innerHTML += `The array is ${A} <br/>`
// div.innerHTML += `The samllest number in array is : ${smallNumber}`
















// Write a program to identify the largest & the smallest
// number in the given array.


// var div = document.querySelector("div");
// var A = ['24', '53', '78', '91', '12']

// var largest = A[0];
// var smallest = A[0];



// for(var i = 0; i<=A.length; i++){
//     if(A[i]> largest){

//         largest = A[i];


//     } else if(A[i] < smallest){
//             smallest = A[i]
//     }
// }
// console.log("The largest number is : ",largest);
// console.log("The largest number is : ", smallest);
// div.innerHTML += `The array is ${A} : <br/> `
// div.innerHTML += `The largest number in array is : ${largest} <br/> The Samllest number in array is : ${smallest}`
















// Write a program to print multiples of 5 ranging 1 to 100

// var div = document.querySelector("div");

// for(var i = 1 ; i<=20 ; i++){
//     var fiveNumber = 5  * i
//     console.log( fiveNumber)
//     div.innerHTML += `${fiveNumber}    `

// }







// 13. You have given the following arrays:


// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// var div = document.querySelector("div");
// var table = document.querySelector("table")

// var students = ['Ali ', ' Sami' ,'taha' ,' inam'];
// var scores  = [ '58', '73', '89','90'];
// console.log(students, scores)


// for (var i = 0; i < students.length; i++) {
//     div.innerHTML += `<tr><td>  ${students[i]}  </td><td> ${scores[i]}  </td></tr>`
// }




















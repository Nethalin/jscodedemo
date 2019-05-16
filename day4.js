// Arrays
/*let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatevers new",
];
console.log (coffeeOrder)*/

/*let favouriteMusic = [
    "Mark - House",
    "Ben - Rock",
    "Jamie - Trance",
];
console.log (favouriteMusic.length)*/

/*let favouriteMusic = [
    "Mark - House",
    "Ben - Rock",
    "Jamie - Trance",
];
console.log (favouriteMusic.pop())*/

/*let favouriteWebsite = [
    "www.youtube.com",
    "www.facebook.com",
    "www.netflix.com",
];
favouriteWebsite.push ("www.amazon.com" , "w3schools");
    console.log (favouriteWebsite)*/

//The slice() method returns a shallow copy of a portion of an array into a new array object 
//selected from begin to end (end not included).
//The original array will not be modified.
/*let favouriteMusic = [
    "House",
    "Dance",
    "Trance",
    "Rock",
    "Indie",
];
console.log (favouriteMusic.slice(2))*/

//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
/*let favouriteMusic = [
    "House",
    "Dance",
    "Trance",
    "Rock",
    "Indie",
];
console.log (favouriteMusic.splice(4))*/

//The shift() method removes the first element from an array and returns that removed element.
//This method changes the length of the array.
/*let favouriteMusic = [
    "House",
    "Dance",
    "Trance",
    "Rock",
    "Indie",
];
console.log (favouriteMusic.shift(2))*/

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
/*let favouriteMusic = [
    "House",
    "Dance",
    "Trance",
    "Rock",
    "Indie",
];
console.log (favouriteMusic.unshift(4,5))*/

/*const takeOrder = (topping1 , topping2, topping3, topping4, topping5) =>{ 
    console.log(`${topping1} sandwich with ${topping2}, ${topping3}, ${topping4},${topping5}`)
}
takeOrder("Cheese", "Ham", "Chicken", "Tomato", "Salad")*/

//create an array with 3 values and then add another to the start of the array using a method

/*let favouriteWebsite = [
    "www.youtube.com",
    "www.facebook.com",
    "www.netflix.com",
];
favouriteWebsite.push ("www.amazon.com");
    console.log (favouriteWebsite)*/

//generate random number between 0-50 6 times
/*for (i =0; i < 6; i++){
   console.log(Math.random ()*49 + 1)
}*/

// create a loop from 9 - 0
   /*for( i = 9 ; i > 0; i-- ){
    console.log(i);
   } */

//Create an array that lists your favourite films, up to 5 elements
//Add 2 more using a method
//Use a loop to cycle through array

/*let favouriteFilm = [
    "sword art online",
    "click",
    "Donnie Darko",
    "Training Day",
    "The Hunger Games",
];
favouriteFilm.push ("Looper", "Judge Dredd")
for(let filmIndex = 0; filmIndex<favouriteFilm.length; filmIndex++) {
    console.log(favouriteFilm[filmIndex]);
}*/

//Display 4 films stored in an array
//Create a function called filmCheck() that checks if the
//3rd film in the array is Ghostbusters.
//If it is, it should return “yey it’s ghostbusters”. If it isn’t, it
//should return “booo, we want ghostbusters”
/*let favouriteFilm = [
    "sword art online",
    "click",
    "ghostbusters",
    "training day"
];
const filmCheck = (favouriteFilm[1]);
if (filmCheck === ("ghostbusters")){
    console.log ("Yay it's ghostbusters")
}
else {
    console.log ("Noo, it's not ghostbusters")
}*/
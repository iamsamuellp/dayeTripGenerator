

//declare my fuction(s)

let destinArray = ["cleveland","Orlando","Dallas","Miami"]; 
let restaurantArray = ["The1#Steakhouse","Good Burger","Jamaica Gates","KrustyCrab"];
let transportArray = ["Limo","PartyBus","Herbie","Bumblebee","Knight Rider"];
let entertainArray = ["ComedyClub","NightClub","Gentlemen's Club","The Theater"];

function thisDestination(destinArray) {
   let setDestination = 0;
   
}

function thisRestaurant(restaurantArray) {
    let setResturanut = 0;
    
}

function thisTransport(transportArray) {
    let setTransport = 0;
}

function thisEntertain(entertainArray) {
    let setEntertain = 0;

}
let randomDestin = destinArray[Math.floor(Math.random()*destinArray.length)];
let randomRestaurant = restaurantArray[Math.floor(Math.random()*destinArray.length)];
let randomTransport = transportArray[Math.floor(Math.random()*destinArray.length)];
let randomEntertainment= entertainArray[Math.floor(Math.random()*destinArray.length)];

alert(" here is your destination " + randomDestin);
alert(" here is your restaurant " + randomRestaurant);
alert(" here is your transportation " + randomTransport);
alert(" here is your Entertainment " + randomEntertainment);

let DayyTrip = console.log( randomDestin + randomEntertainment + randomRestaurant + randomTransport);

let reselect;

if (confirm(" Do you want to cofirm your day trip? ") == true) {
    reselect = alert ("trip saved successfully!");
} else {
    reselect = alert(" Here is your new trip " +  randomDestin  +  randomEntertainment  +  randomRestaurant  +  randomTransport);
}
let userCompleted;

if (confirm("Was you trip completed?") == true) {
    userCompleted = alert(" Trip successfull ");
} else {
    userCompleted = alert (" Trip Cancelled! ");
}


let xp= 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory= ["Stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText= document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [
    {
        name: "plaza",
        "button text": ["Go to Mina's Mercado", "Go to cave", "Fight the dragon!"]

    }
]

// Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// When go to store is clicked a new prompt and menu will show
function goStore(){
    button1.innerText= "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to Town Square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "Welcome to Mina's Mercado! What would you like to do?"
}

// Functionality for buttons when in the store
function buyHealth(){
    console.log("you bought health")
}

function buyWeapon(){
    console.log("weapon is clicked")
}

function goTown(){
    button1.innerText= "Go to Mina's Mercado";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight the dragon!";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the plaza you see a sign that says 'Mina's Mercado'";
}

function update(location){

}


function goCave(){
    console.log("Going to the Cave");
}

function fightDragon(){
    console.log("Slay the dragon!")
}


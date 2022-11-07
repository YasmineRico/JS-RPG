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

const weapons = [
    {
        name: "Stick",
        power: 5
    },
    {
        name: "Dagger",
        power: 30
    },
    {
        name: "Claw Hammer",
        power: 50 
    },
    {
        name: "Sword",
        power: 100
    }
];

const locations = [
    {
        name: "Main Plaza",
        "button text": ["Go to Mina's Mercado", "Go to cave", "Fight the dragon!"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the plaza you see a sign that says 'Mina's Mercado'."
    },
    {
        name: "Store",
        "button text": ["Buy 10 health (10 gold)", "Buy Weapon (30 gold)", "Go to the Main Plaza"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "Welcome to Mina's Mercado! What would you like to do?"
    },
    {
        name: "Cave",
        "button text": ["Fight Slime", "Fight Beast", "Go to the Main Plaza"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You've entered the cave and see monsters!"
    }

]

// Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// When go to store is clicked a new prompt and menu will show
function goStore(){
    update(locations[1]);
}


// if gold is greater than 
function buyHealth(){
   if(gold >= 10 ){
        gold -= 10;
        health += 10;
        gold.innerText= gold;
        health.innerText= health;
   } else{
    text.innerText = "You do not have enough gold to buy health.";
   }
    
}

function buyWeapon(){
    if (gold >= 30){
        gold -= 30;
        currentWeapon ++; //Adds one to the current weapon similar to +1
        goldText.innerText = gold;
        let newWeapon = weapons[currentWeapon].name;
        text.innertext = `You now have a ${newWeapon}.`;
    }
}

// passes in the locations array and gets the code from the 1st element by using the index of 0
function goTown(){
    update(locations[0]);
}

// Accessing the elements by key and then their values from the index
function update(location){
    button1.innerText= location["button text"] [0];
    button2.innerText = location["button text"] [1];
    button3.innerText = location["button text"] [2];
    button1.onclick = location["button functions"] [0];
    button2.onclick = location["button functions"] [1];
    button3.onclick = location["button functions"] [2];
    text.innerText = location.text;
}

// Buttons shown when in the cave


function goCave(){
   update(locations[2]);
}

function fightSlime(){
    console.log("Fight the Slime!!!");
}
function fightBeast(){
    console.log("fight the beast!");
}

function fightDragon(){
    console.log("Slay the dragon!");
}


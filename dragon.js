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

const monsters = [
    {
        name: "slime", 
        level: 2,
        health: 15
    },
    {
        name: "Beast", 
        level: 8,
        health: 60
    },
    {
        name: "Dragon", 
        level: 20,
        health: 300
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
    },
    {
        name: "Fight",
        "button text": ["Attack!", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: `You are fighting a monster!`
    },
    {
        name: "Kill Monster",
        "button text": ["Go to main plaza", "Go to main plaza", "Go to main plaza"],
        "button functions": [goTown, goTown, goTown],
        text: `The monster screams as it dies. You gain experience and find gold!`
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die ..."
    },
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeated the monster! You WIN the GAME!!!"
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
        healthText.innerText= health;
   } else{
    text.innerText = "You do not have enough gold to buy health.";
   }
    
}

function buyWeapon(){
    if (currentWeapon < weapons.length - 1){
        if (gold >= 30){
            gold -= 30;
            currentWeapon ++; //Adds one to the current weapon similar to +1
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innertext = `You now have a ${newWeapon}. `;
            inventory.push(newWeapon);
            text.innerText += `In your inventory you have ${inventory} .`
        }else {
            text.innerText= "You do not have enough gold to buy a weapon."
        }
    }else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }    
}

function sellWeapon(){
    if (inventory.length > 1){
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = `You sold a ${currentWeapon}.`
    }else {
        text.innerText = `Don't sell your only weapon!`
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
    fighting = 0;
    goFight();
}
function fightBeast(){
    fighting = 1;
    goFight();
}

function fightDragon(){
    fighting = 2;
    goFight();
}

function goFight(){
    update (locations[3])
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterNameText.innerText = monsters[fighting].name;
    monsterHealthText = monsterHealth;
}

function attack(){
    text.innerText = `The ${monsters[fighting].name} attacks.`;
    text.innerText += `You attack it with your ${weapons[currentWeapon.name]}.`;
    health -= monsters[fighting].level;
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random()* xp) + 1;;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if(health <= 0){
        lose();
    }else if( monsterHealth <= 0){
        fighting === 2 ? winGame() : defeatMonster();
    
    }
}

function dodge(){
    text.innerText = "You dodge the attack from the " + monsters[fighting].name + ".";
}

function defeatMonster(){
    gold += Math.floor(monsters[fighting].level *6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}

function lose(){
    update(locations[5]);
}

function winGame(){
    update(locations[6]);
}

function restart(){
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
}

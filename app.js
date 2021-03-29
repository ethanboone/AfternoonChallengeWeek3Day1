import Antelope from "./models/Antelope.js"
import BengalTiger from "./models/BengalTiger.js"
import Camel from "./models/Camel.js"
import Deer from "./models/Deer.js";
import Elephant from "./models/Elephant.js";
import Fox from "./models/Fox.js";
import Giraffe from "./models/Giraffe.js";
import Hippo from "./models/Hippo.js";
import Iguana from "./models/Iguana.js";
import Jaguar from "./models/Jaguar.js";
import Kangaroo from "./models/Kangaroo.js";
import Lion from "./models/Lion.js"
import Monkey from "./models/Monkey.js";
import Narwhal from "./models/Narwhal.js";
import Owl from "./models/Owl.js"
import Panda from "./models/Panda.js";
import Quail from "./models/Quail.js";
import Rhino from "./models/Rhino.js";
import Seal from "./models/Seal.js"
import Tortoise from "./models/Tortoise.js";
import Unicorn from "./models/Unicorn.js";
import Vulture from "./models/Vulture.js";
import Wolf from "./models/Wolf.js";
import XrayFish from "./models/XrayFish.js";
import Yak from "./models/Yak.js";
import Zebra from "./models/Zebra.js";



let zoo = {
    Antelope: new Antelope('Alfred', 'plants', 150, 'male', 28),
    BengalTiger: new BengalTiger('Benjamin', 'animals', 430, 'male', 18),
    Camel: new Camel('Cam', 'plants', 600, 'female', 7),
    Deer: new Deer('Devon', 'plants', 70, 'male', 12),
    Elephant: new Elephant('Ellie', 'plants', 2500, 'female', 10),
    Fox: new Fox('Fred', 'animals', 55, 'male', 16),
    Giraffe: new Giraffe('Geno', 'plants', 470, 'male', 10),
    Hippo: new Hippo('Hallie', 'plants', 2350, 'female', 8),
    Iguana: new Iguana('Izzy', 'plants', 12, 'female', 2),
    Jaguar: new Jaguar('Jeff', 'animals', 260, 'male', 28),
    Kangaroo: new Kangaroo('Kaylee', 'plants', 205, 'female', 12),
    Lion: new Lion('Lionel', 'animals', 390, 'male', 22),
    Monkey: new Monkey('Mallory', 'plants', 80, 'female', 7),
    Narwhal: new Narwhal('Nathan', 'animals', 700, 'male', 18),
    Owl: new Owl('Oliver', 'animals', 11, 'male', 30),
    Panda: new Panda('Pam', 'plants', 640, 'female', 10),
    Quail: new Quail('Quinten', 'plants', 4, 'male', 22),
    Rhino: new Rhino('Richard', 'animals', 900, 'male', 20),
    Seal: new Seal('Sally', 'plants', 550, 'female', 15),
    Tortoise: new Tortoise('Tristan', 'plants', 60, 'male', 1),
    Unicorn: new Unicorn('Eugene', 'plants', 450, 'male', 99),
    Vulture: new Vulture('Vicky', 'animals', 16, 'female', 25),
    Wolf: new Wolf('Walter', 'animals', 180, 'male', 25),
    XrayFish: new XrayFish('X', 'animals', 10, 'female', 5),
    Yak: new Yak('Yasmine', 'plants', 320, 'female', 20),
    Zebra: new Zebra('Zachary', 'plants', 290, 'male', 24)
}

function draw() {
    let templateTrue = ''
    let templateFalse = ''
    let zoo1 = document.getElementById('zoo1')
    let zoo2 = document.getElementById('zoo2')
    for (let key in zoo) {
        let elem = zoo[key]
        if (elem.isPredator() == true) {
            templateTrue += `<p>${key}: ${elem.name} is a predator. </p></div>`
        } else {
            templateFalse += `<p>${key}: ${elem.name} is not a predator. </p></div>`
        }
    }

    zoo1.innerHTML = templateTrue
    zoo2.innerHTML = templateFalse
}

console.log(zoo)
draw()
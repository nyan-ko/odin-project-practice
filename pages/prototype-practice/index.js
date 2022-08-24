function Planet () {
    this.name = "Big rock";
    this.pollution = "unknown";
    this.test = "hello";
}

Planet.prototype.introduction = function() {
    console.log(`MY NAME IS ${this.name}. MY POLLUTION LEVEL IS ${this.pollution}`);
}

Planet.prototype.test2 = "hello hello";

let rock = new Planet();
rock.introduction();

function TerrestrialPlanet (name, pollution) {
    this.name = name;
    this.pollution = pollution;
}

TerrestrialPlanet.prototype = Object.create(Planet.prototype);
TerrestrialPlanet.prototype.tests = function() {
    console.log(this.test);
    console.log(this.test2);
}

let earth = new TerrestrialPlanet("Earth", "12%");
earth.introduction();
// earth.tests();
console.log(earth.test);
console.log(earth.test2);

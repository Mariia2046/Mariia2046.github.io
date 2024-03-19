//1
let person = {
    name: "Rayan Gosling",
    age: 38
};

console.log("Ім'я:", person.name);
console.log("Вік:", person.age);

//2
/*let person = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30
};

console.log("Ім'я:", person.name.firstName, person.name.lastName);
console.log("Вік:", person.age);
*/

//3
/*let person = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30,
    bio: function() {
        console.log("Ім'я:", this.name.firstName);
        console.log("Прізвище:", this.name.lastName);
        console.log("Вік:", this.age);
    }
};

person.bio();*/

//4

/*let person = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30,
    introduceSelf: function() {
        console.log("Hi! I'm " + this.name.firstName);
    }
};

person.introduceSelf();*/

//5

/*function createPerson(name) {
    return {
        name: name,
        introduceSelf: function() {
            console.log("Hi! I'm " + this.name);
        }
    };
}

let person1 = createPerson("John");
let person2 = createPerson("Alice");

person1.introduceSelf();
person2.introduceSelf();*/

//6

/*function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
        console.log("Hi! I'm " + this.name);
    };
}

let mary = new Person("Mary");
let tom = new Person("Tom");

mary.introduceSelf();
tom.introduceSelf();

// визначити, чи містить об'єкт mary властивість під назвою prop
let mary = new Person("Mary");
let hasProp = 'prop' in mary;
console.log(hasProp); // Виведе: false*/

//7

/*let DirtyMartini = {
    english_please: function() {
        console.log("ingredients:");
        console.log("  170.4786 ml of gin");
        console.log("  1 dash of dry vermouth (0.0351951 ml)");
        console.log("  28.4131 ml of brine from olive jar");
        console.log("  4 stuffed green olives");
    },
    excuse_my_french: function() {
        console.log("ingrédients:");
        console.log("  170.4786 ml de gin");
        console.log("  1 trait de vermouth sec (0.0351951 ml)");
        console.log("  28.4131 ml de saumure du pot d'olive");
        console.log("  4 olives vertes farcies");
    }
};

// Виклик методу excuse_my_french()
DirtyMartini.excuse_my_french();*/

// АНГЛІЙСЬКА

/*let DirtyMartini = {
    english_please: function() {
        console.log("ingredients:");
        console.log("  170.4786 ml of gin");
        console.log("  1 dash of dry vermouth (0.0351951 ml)");
        console.log("  28.4131 ml of brine from olive jar");
        console.log("  4 stuffed green olives");
    },
    excuse_my_french: function() {
        console.log("ingrédients:");
        console.log("  170.4786 ml de gin");
        console.log("  1 trait de vermouth sec (0.0351951 ml)");
        console.log("  28.4131 ml de saumure du pot d'olive");
        console.log("  4 olives vertes farcies");
    }
};

// Виклик методу english_please()
DirtyMartini.english_please();*/
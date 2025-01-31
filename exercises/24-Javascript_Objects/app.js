var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [1,2,3,4],
    significant_other: null
}

var family = {
    lastname: "Doe",
    members: [person, person2, person3]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray) {
    let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    for (let i = 0; i < anArray.length; i++) {
        for (let x = 0; x < anArray[i].lucky_numbers.length; x++) {
            sumOfAllLuckyNumbers += anArray[i].lucky_numbers[x];
        }
    }
    //To-Do: loop and add; consider nested loops
    //Hint: use the anArray variable to get all of the lucky numbers

    return sumOfAllLuckyNumbers;
}

//Enter all your code here:
person.lucky_numbers[3] = 33;

/*
for (let i = 0; i <= family.members.length-1; i++){
    let sum = 0;
    for (let j = 0; j < family.members[i]; j++){
        if (j == lucky_numbers){
            for (let k = 0; k < lucky_numbers.length-1; k++){
                sum = sum + lucky_numbers[k];
                console.log(sum)
            }
        }
    }
}*/
 

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 
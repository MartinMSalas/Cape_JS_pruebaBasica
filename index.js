function sayHello(){
    for (let i = 0; i < 5; i++) {
        console.log(i);
        
    }
    
}
//sayHello();
const person = {
    name : "Martin",
    walk () {
        console.log(this);
    },
    talk : function () {

    }
}
person.talk;
const targetMember = 'name';
person[targetMember] = 'John';
//person.walk();

const walk = person.walk.bind(person);
walk();
const square = function (number){
    return number * number;
    
}
const square2 = number => number * number;

console.log(square2(6));

const jobs = [
    {id:1, isActive: true},
    {id:2, isActive: true},
    {id:3, isActive: false},
]

const activeJobs1 = jobs.filter(function(job) { return job.isActive;});
const activeJobs2 = jobs.filter(job => job.isActive);

const person2 = {
    talk() {
        console.log('this', this);
    }
};
console.log("------------------------------------------")
person2.talk();



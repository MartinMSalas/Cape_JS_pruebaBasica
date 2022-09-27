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
//person.talk;
const targetMember = 'name';
person[targetMember] = 'John';
//person.walk();

const walk = person.walk.bind(person);
//walk();
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
//person2.talk();
//person.walk();

const activeJobs = jobs.filter(function(job) { return job.isActive;});
const activeJobs02 = jobs.filter ( cacholo => cacholo.isActive);
//console.log(activeJobs02);
const person03 = {
    talk() {
        var self = this;
        setTimeout(function() {
            
            console.log("self", self);
        },1000);
    }
    
};

//person03.talk();

let colors = ['red','green','blue','orange'];
console.log(colors);
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

const address = {
    street: '',
    city: '',
    country: ''
};
const street = address.street;
const city = address.city;
const country = address.country;

const { street: st} = address;
const paleta = ['#000000', '#AC1848', '#BFB9A4', '#888B90', '#AAB2B7', '#131315'];
const [background, ...gama] = paleta;
//console.log(background,gama);

/* 
const first = [1,2,3];
const second = [4,5,6];
//const combined = first.concat(second);
const combined = [...first,...first];
console.log(combined);
const clone = [...first];
console.log(first);
console.log(clone);
*/
const first = {name: 'Martin'};
const second = {job: 'Dev'};

const combined = {...first,...second,location: "Argentina"};
console.log(combined);

const clone ={...first};




const person04 = new Person("Martin");
console.log("Martin");

const teacher = new Teacher("Julio","Evil Genius");
teacher.teach();
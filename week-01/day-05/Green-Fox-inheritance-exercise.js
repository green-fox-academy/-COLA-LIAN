class Person {
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender =gender;
    }
    introduce(){
        console.log('Hi,I\'m '+ this.name +' a '+this.age+' year old '+ this.gender);
    }
    getGoal(){
        console.log('My goal is: Live for the moment!');
    }
}
// const person = new Person("Jane Doe", 30, "female");


class Student extends Person{
    constructor(name,age,gender,previousOrganization,skippedDays){
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }  
    getGoal(){
        console.log("My goal is: Be a junior software developer.");
    }
    introduce(){
        console.log('Hi,I\'m '+ this.name +' a '+this.age+' year old '+ this.gender +" from "+this.previousOrganization+" who has skipped"+ this.skippedDays+"days from the course already.");
    }
    skipDays(numberOfDays){
        this.skippedDays = this.skippedDays + numberOfDays;
    }
}
// let student0 = new Student("Jane Doe", 30, "female", "The School of Life", 0);

class Mentor extends Person{
    constructor(name, age, gender,level){
        super(name,age,gender);
        this.level = level;
    }
    getGoal(){
        console.log("My goal is: Educate brilliant junior software developers.");
    }
    introduce(){
        console.log("Hi, I'm "+this.name+", a "+this.age+" year old"+ this.gender+this.level+" mentor.")
    }
}
// let mentor0 = new Mentor("Jane Doe", 30, "female", "intermediate");


class Sponsor extends Person{
    constructor(name,age,gender,company,hiredStudents){
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = hiredStudents;
    }  
    introduce(){
        console.log("Hi, I'm "+this.name+", a "+this.age+" year old"+ this.gender+"who represents"+ this.company+" and hired"+ this.hiredStudents+ "students so far.");
    }
    hire(){
        this.hiredStudents = this.hiredStudents - 1;
    }
    getGoal(){
        console.log("My goal is: Hire brilliant junior software developers.");
    }
}
//  let sponsor0 = new  Sponsor("Jane Doe", 30, "female", "Google", 0)

class Cohort{
    constructor(name, student, mentor){
        this.name = name;
        this.student = [];
        this.mentor = [];
    }

    addStudent(Student){
        student.push(Student);
    }
    addMentor(Mentor){
        mentor.push(Mentor);
    }

    info(){
        console.log("The "+this.name+" cohort has "+this.students.size+ " students and "+ this.mentors.size+" mentors.")
    }

}

const people = [];


const mark = new Person('Mark', 46, 'male');
people.push(mark);

const jane = new Person("Jane Doe", 30, "female");
people.push(jane);

const john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

const student = new Student("Jane Doe", 30, "female", "The School of Life", 0);
people.push(student);

const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

const mentor = new Mentor("Jane Doe", 30, "female", "intermediate");
people.push(mentor);

const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

const sponsor = new Sponsor("Jane Doe", 30, "female", "Google", 0);
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
})

const awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
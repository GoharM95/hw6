class Person {
    constructor({ firstName, lastName, gender, age }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._gender = gender;
        this.age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get gender() {
        this._gender = gender;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    toString() {
        JSON.stringify(this);
    }
}

class Student extends Person {

    constructor(props) {
        const { programs, year, fee, ...otherProps } = props;
        super(otherProps);
        this.programs = programs;
        this.year = year;
        this.fee = fee;
    }



    get programs() {
        return this._programs;
    }

    set programs(value) {
        this._programs = {};
        for (let program of value) {
            this._programs[program] = null;
        }

    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get fee() {
        return this._fee;
    }

    set fee(value) {
        this._fee = value;
    }

    takeExam(program, grade) {
        this._programs[program] = grade;
        const isReadyToGraduate = Object.values(this._programs).every(grade => {
            const isProgramPassed = grade && grade >= 50;
            return isProgramPassed;
        })
        if (isReadyToGraduate) {
            this.year = this.year + 1;
        }
        console.log('Passed');
    }

    toString() {
        JSON.stringify(this);
    }
}

const goharsParamsObj = { firstName: 'Gohar', lastName: 'Mamunts', gender: 'female', age: 26 }
const person = new Person(goharsParamsObj);
const goharStudentParamObj = { ...goharsParamsObj, programs: ['Math', 'Biology', 'Statistics'], year: 2016, fee: 1000 }
const student = new Student(goharStudentParamObj);
student.takeExam('Math', 50);
student.takeExam('Biology', 50);
student.takeExam('Statistics', 50);


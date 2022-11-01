var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonalInfo = /** @class */ (function () {
    function PersonalInfo(id, fullName, address, phoneNumber, email, position, rank, salary) {
        this.id = id;
        this.fullName = fullName;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.rank = rank;
        this.salary = salary;
    }
    return PersonalInfo;
}());
var Staff = /** @class */ (function () {
    function Staff(id, fullName, address, phoneNumber, email, position, rank, salary) {
        this.personalInfo = new PersonalInfo(id, fullName, address, phoneNumber, email, position, rank, salary);
    }
    return Staff;
}());
var PostgraduateStudent = /** @class */ (function (_super) {
    __extends(PostgraduateStudent, _super);
    function PostgraduateStudent(id, fullName, address, phoneNumber, email, position, rank, salary, phdStatus) {
        var _this = _super.call(this, id, fullName, address, phoneNumber, email, position, rank, salary) || this;
        _this.phdStatus = phdStatus;
        return _this;
    }
    PostgraduateStudent.prototype.askSickLeave = function (department) {
        return false;
    };
    PostgraduateStudent.prototype.sendRequest = function (department) {
        return true;
    };
    return PostgraduateStudent;
}(Staff));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, fullName, address, phoneNumber, email, position, rank, salary) {
        return _super.call(this, id, fullName, address, phoneNumber, email, position, rank, salary) || this;
    }
    Student.prototype.askSickLeave = function (department) {
        return false;
    };
    Student.prototype.sendRequest = function (department) {
        return true;
    };
    return Student;
}(Staff));
var Department = /** @class */ (function () {
    function Department() {
    }
    Department.prototype.proceedRequests = function () {
        console.log('proceedRequests');
    };
    return Department;
}());
var Group = /** @class */ (function () {
    function Group() {
    }
    return Group;
}());
var Seminar = /** @class */ (function () {
    function Seminar() {
    }
    Seminar.prototype.implementItem = function (itemName) {
        return "str";
    };
    Seminar.prototype.addComment = function (str) {
        console.log("Coment added");
    };
    return Seminar;
}());
var Enroll = /** @class */ (function () {
    function Enroll() {
        this.studentCourses = {};
        this.courseStudents = {};
    }
    Enroll.prototype.enroll = function (student, course) {
        if (course == null)
            return;
        var keys = Object.keys(this.studentCourses);
        if (keys.includes(student.personalInfo.id.toString())) {
            console.log("Currently enroll this course", this.studentCourses);
        }
        else {
            this.studentCourses[student.personalInfo.id] = [course.title];
            this.courseStudents[course.title] = [student.personalInfo.id];
            //console.log("Welcome new student to this course", this.studentCourses, this.courseStudents)
        }
    };
    Enroll.prototype.unenroll = function (student, course) {
        if (course == null)
            return;
        var keys = Object.keys(this.studentCourses);
        if (!keys.includes(student.personalInfo.id.toString())) {
            console.log("There is no such student in this course", this.studentCourses);
        }
        else {
            console.log("Removed student from this course", this.studentCourses);
            delete this.studentCourses[student.personalInfo.id];
            delete this.courseStudents[course.title];
            console.log(this.studentCourses);
        }
    };
    return Enroll;
}());
var PostStud = new PostgraduateStudent(4, "Oleg MUz", "Doroshenka 50", "+380971275232", "olehmuz87@gmail.com", "full-stack developer", "rank", 400, "Magistr");
var stud1 = new Student(3, "Oleg MUz", "Doroshenka 50", "+380971275232", "olehmuz87@gmail.com", "full-stack developer", "rank", 400);
var stud = new Student(4, "Oleg MUz", "Doroshenka 50", "+380971275232", "olehmuz87@gmail.com", "full-stack developer", "rank", 400);
//Course factory
var Course = /** @class */ (function () {
    function Course(title) {
        this.seminars = [];
        this.title = title;
    }
    return Course;
}());
var MathCourse = /** @class */ (function (_super) {
    __extends(MathCourse, _super);
    function MathCourse(title) {
        var _this = _super.call(this, title) || this;
        _this.feature = "Can teach you how to count cos(3301) without a calculator";
        return _this;
    }
    return MathCourse;
}(Course));
var ProgrammingCourse = /** @class */ (function (_super) {
    __extends(ProgrammingCourse, _super);
    function ProgrammingCourse(title) {
        var _this = _super.call(this, title) || this;
        _this.feature = "Also can develope calculator for math course btw...";
        return _this;
    }
    return ProgrammingCourse;
}(Course));
var AlgorithmsCourse = /** @class */ (function (_super) {
    __extends(AlgorithmsCourse, _super);
    function AlgorithmsCourse(title) {
        var _this = _super.call(this, title) || this;
        _this.feature = "Can teach you how to optimize your calculator";
        return _this;
    }
    return AlgorithmsCourse;
}(Course));
var CourseFactory = /** @class */ (function () {
    function CourseFactory() {
    }
    CourseFactory.prototype.create = function (type) {
        if (type === "Math") {
            return new MathCourse("Math");
        }
        if (type === "Programming") {
            return new ProgrammingCourse("Programming");
        }
        if (type === "Algorithms") {
            return new AlgorithmsCourse("Algorithms");
        }
        return null;
    };
    return CourseFactory;
}());
// Professor factory
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(id, fullName, address, phoneNumber, email, position, rank, salary) {
        return _super.call(this, id, fullName, address, phoneNumber, email, position, rank, salary) || this;
    }
    Professor.prototype.askSickLeave = function (destination) {
        return false;
    };
    Professor.prototype.sendRequest = function (department) {
        return true;
    };
    Professor.prototype.add_postgraduate_student = function (student) {
    };
    Professor.prototype.fill_course = function (group) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log("course_filled");
    };
    return Professor;
}(Staff));
var MathProffesor = /** @class */ (function (_super) {
    __extends(MathProffesor, _super);
    function MathProffesor(id, fullName, address, phoneNumber, email) {
        return _super.call(this, id, fullName, address, phoneNumber, email, "Math Professor", "Professor", "4000") || this;
    }
    MathProffesor.prototype.createCourse = function () {
        var factory = new CourseFactory();
        return factory.create("Math");
    };
    return MathProffesor;
}(Professor));
var ProgrammingProffesor = /** @class */ (function (_super) {
    __extends(ProgrammingProffesor, _super);
    function ProgrammingProffesor(id, fullName, address, phoneNumber, email) {
        return _super.call(this, id, fullName, address, phoneNumber, email, "Programming Professor", "Professor", "5000") || this;
    }
    ProgrammingProffesor.prototype.createCourse = function () {
        var factory = new CourseFactory();
        return factory.create("Programming");
    };
    return ProgrammingProffesor;
}(Professor));
var AlgorithmsProffesor = /** @class */ (function (_super) {
    __extends(AlgorithmsProffesor, _super);
    function AlgorithmsProffesor(id, fullName, address, phoneNumber, email) {
        return _super.call(this, id, fullName, address, phoneNumber, email, "Algorithms Professor", "Professor", "4500") || this;
    }
    AlgorithmsProffesor.prototype.createCourse = function () {
        var factory = new CourseFactory();
        return factory.create("Algorithms");
    };
    return AlgorithmsProffesor;
}(Professor));
var ProfessorsFactory = /** @class */ (function () {
    function ProfessorsFactory() {
    }
    ProfessorsFactory.prototype.create = function (type, id, name, address, number, email) {
        if (type === "Math") {
            return new MathProffesor(id, name, address, number, email);
        }
        if (type === "Programming") {
            return new ProgrammingProffesor(id, name, address, number, email);
        }
        if (type === "Algorithms") {
            return new AlgorithmsProffesor(id, name, address, number, email);
        }
        return null;
    };
    return ProfessorsFactory;
}());
var enroll = new Enroll();
var factoryCourse = new CourseFactory();
var mathCourse = factoryCourse.create("Math");
var mathProgramming = factoryCourse.create("Programming");
var mathAlgorithms = factoryCourse.create("Algorithms");
// console.log(mathCourse)
// console.log(mathProgramming)
// enroll.enroll(stud, mathCourse);
// console.log(enroll);
// enroll.enroll(stud, mathCourse);
// enroll.enroll(stud1, mathProgramming);
// enroll.unenroll(stud, mathCourse);
// console.log(enroll);
// return new MathProffesor(4, "Vitaliy Sin", "doroshenka", "0971111111", "vitsin@gmail.com");
var profFact = new ProfessorsFactory();
var mathProf = profFact.create("Math", 4, "Vitaliy Sin", "doroshenka", "0971111111", "vitsin@gmail.com");
// const mathProf = new MathProffesor(4, "Vitaliy Sin", "doroshenka", "0971111111", "vitsin@gmail.com");
var newCourse = mathProf === null || mathProf === void 0 ? void 0 : mathProf.createCourse();
console.log(mathProf);

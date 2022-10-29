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
    return Professor;
}(Staff));
var Department = /** @class */ (function () {
    function Department() {
    }
    return Department;
}());
var Course = /** @class */ (function () {
    function Course(title) {
        this.seminars = [];
        this.title = title;
    }
    return Course;
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
var enroll = new Enroll();
var course = new Course("Patterns");
enroll.enroll(stud, course);
console.log(enroll);
enroll.enroll(stud, course);
enroll.enroll(stud1, course);
enroll.unenroll(stud, course);
console.log(enroll);

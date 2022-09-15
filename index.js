var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Student = /** @class */ (function () {
    function Student(full_name, address, phone_number, email, student_number, average_mark, courses) {
        this.full_name = full_name;
        this.address = address;
        this.email = email;
        this.student_number = student_number;
        this.phone_number = phone_number;
        this.average_mark = average_mark;
        this.courses = courses;
    }
    Student.prototype.can_enroll = function (course) {
        if (course.students.includes(this) && this.courses.includes(course)) {
            console.log("".concat(this.full_name, " may enroll."));
            return true;
        }
        console.log("".concat(this.full_name, " can't enroll."));
        return false;
    };
    ;
    Student.prototype.taken_courses = function () {
        console.log("Student courses: ".concat(this.courses));
        return this.courses;
    };
    ;
    Student.prototype.enroll = function (course) {
        if (this.courses.includes(course)) {
            console.log("".concat(this.full_name, " currently enroll this course"));
        }
        else {
            this.courses = __spreadArray(__spreadArray([], this.courses, true), [course], false);
            console.log("".concat(this.full_name, " enrolled this course"));
        }
    };
    ;
    Student.prototype.unenroll = function (course) {
        if (!this.courses.includes(course)) {
            console.log("".concat(this.full_name, " currently unenrolled this course"));
        }
        else {
            this.courses = this.courses.filter(function (el) { return el.title != course.title; });
            console.log("".concat(this.full_name, " unenrolled this course"));
        }
    };
    ;
    return Student;
}());
var Course = /** @class */ (function () {
    function Course(title, start_date, end_date, description, lectures, assignments, limit, students) {
        this.title = title;
        this.start_date = start_date;
        this.end_date = end_date;
        this.description = description;
        this.lectures = lectures;
        this.assignments = assignments;
        this.limit = limit;
        this.students = students;
    }
    Course.prototype.add_student = function (student) {
        if (this.students.length + 1 <= this.limit) {
            if (this.students.includes(student)) {
                console.log("This student already has been added");
            }
            else {
                this.students = __spreadArray(__spreadArray([], this.students, true), [student], false);
            }
        }
        else {
            console.log("The student limit for this course has been exceeded. ".concat(student.full_name, " can't join."));
        }
    };
    ;
    Course.prototype.remove_student = function (student) {
        if (this.students.includes(student)) {
            this.students = this.students.filter(function (el) { return el.full_name !== student.full_name; });
            console.log("".concat(student.full_name, " has been removed from course ").concat(this.title, "."));
        }
        else {
            console.log("".concat(student.full_name, " not found in course ").concat(this.title, "."));
        }
    };
    ;
    return Course;
}());
var Professor = /** @class */ (function () {
    function Professor(name, address, phone_number, email, salary) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone_number = phone_number;
        this.salary = salary;
    }
    ;
    Professor.prototype.check_assignment = function (obj) {
        if (obj.is_done) {
            console.log("Assignment is done. You can get your mark: 5.");
        }
        else {
            console.log("Assignment isn't done. You can't get your mark.");
        }
    };
    ;
    return Professor;
}());
var CourseProgress = /** @class */ (function () {
    function CourseProgress(received_marks, visited_lectures, completed_assignments, notes) {
        this.received_marks = received_marks;
        this.visited_lectures = visited_lectures;
        this.completed_assignments = completed_assignments;
        this.notes = notes;
    }
    CourseProgress.prototype.get_progress_to_date = function (date) {
        console.log("Note: ".concat(this.notes[date.toString()]));
        return this.notes[date.toString()];
    };
    ;
    CourseProgress.prototype.get_final_mark = function () {
        return 123;
    };
    ;
    CourseProgress.prototype.fill_notes = function (date, note) {
        //Date can't be used as key;
        this.notes[date.toString()] = note;
    };
    ;
    CourseProgress.prototype.remove_note = function (date) {
        delete this.notes[date.toString()];
    };
    ;
    return CourseProgress;
}());
//create 2 students
var OlegStudent = new Student("Oleg Muz", "Doroshenka 50", "0971275232", "olehmuz87@gmail.com", 999, 11.5, []);
var OlegStudent2 = new Student("Oleg Muz2", "Doroshenka 50", "0971275232", "olehmuz87@gmail.com", 999, 11.5, []);
// create professor
var AndriyProfessor = new Professor("Andriy", "Tarnavskogo", "someProfessor@gmail.com", "0971111111", 19500);
// create course
var DesignPatterns = new Course("Design Patterns", new Date('Septemper 1, 2022'), new Date('December 1, 2022'), "description", ["1", "2", "3"], ["1", "2", "3"], 1, []);
//create DesignPatterns Progress and check methods of it;
var DesignPatternsProgress = new CourseProgress({}, 0, {}, {});
//create new note
DesignPatternsProgress.fill_notes(new Date("sep 14, 2022"), "1231");
console.log(DesignPatternsProgress);
//remove this note
DesignPatternsProgress.remove_note(new Date("sep 14, 2022"));
console.log(DesignPatternsProgress);
//check methods of Course class
//add new student to course
DesignPatterns.add_student(OlegStudent);
console.log(DesignPatterns);
//add another one, but limit 1 stop adding;
DesignPatterns.add_student(OlegStudent2);
//limit test
DesignPatterns.add_student(OlegStudent2);
//removing of student
DesignPatterns.remove_student(OlegStudent);
console.log(DesignPatterns);
//Student methods
OlegStudent2.can_enroll(DesignPatterns);
OlegStudent2.enroll(DesignPatterns);
console.log(OlegStudent2);
OlegStudent2.unenroll(DesignPatterns);
console.log(OlegStudent2);
// node . in patterns folder to start script

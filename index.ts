class Student {
  full_name: string;
  address: string;
  phone_number: string;
  email: string;
  student_number: number;
  average_mark: number;
  courses: Course[];
  can_enroll(course: Course): boolean{
    if(course.students.includes(this) && this.courses.includes(course)){
      console.log(`${this.full_name} may enroll.`);
      return true;
    }
    console.log(`${this.full_name} can't enroll.`);
    return false;
  };
  taken_courses(): Course[]{
    console.log(`Student courses: ${this.courses}`);
    return this.courses;
  };
  enroll(course: Course): void{
    if(this.courses.includes(course)){
      console.log(`${this.full_name} currently enroll this course`);
    }
    else{
      this.courses = [...this.courses, course];
      console.log(`${this.full_name} enrolled this course`);
    }
  };
  unenroll(course: Course): void{
    if(!this.courses.includes(course)){
      console.log(`${this.full_name} currently unenrolled this course`);
    }
    else{
      this.courses = this.courses.filter(el => el.title != course.title);
      console.log(`${this.full_name} unenrolled this course`);
    }
  };

  constructor(
    full_name: string,
    address: string,
    phone_number: string,
    email: string,
    student_number: number,
    average_mark: number,
    courses: []
  ) {
    this.full_name = full_name;
    this.address = address;
    this.email = email;
    this.student_number = student_number;
    this.phone_number = phone_number;
    this.average_mark = average_mark;
    this.courses = courses;
  }
}

type assignment = {
  title: string;
  is_done: boolean;
  description: string;
  mark: number;
};

class Course {
  title: string;
  start_date: Date;
  end_date: Date;
  description: string;
  lectures: string[];
  assignments: string[];
  limit: number;
  students: Student[];
  constructor(
    title: string,
    start_date: Date,
    end_date: Date,
    description: string,
    lectures: string[],
    assignments: string[],
    limit: number,
    students: Student[]
  ) {
    this.title = title;
    this.start_date = start_date;
    this.end_date = end_date;
    this.description = description;
    this.lectures = lectures;
    this.assignments = assignments;
    this.limit = limit;
    this.students = students;
  }
  add_student(student: Student):void {
    if(this.students.length + 1 <= this.limit){
      if(this.students.includes(student)){
        console.log(`This student already has been added`);
      }
      else{
        this.students = [...this.students, student];
      }
    }
    else{
      console.log(`The student limit for this course has been exceeded. ${student.full_name} can't join.`);
    }
  };
  remove_student(student: Student):void {
    if(this.students.includes(student)){
      this.students = this.students.filter(el => el.full_name !== student.full_name);
      console.log(`${student.full_name} has been removed from course ${this.title}.`);
    }
    else{
      console.log(`${student.full_name} not found in course ${this.title}.`);
    }
  };
}

class Professor {
  name: string;
  address: string;
  phone_number: string;
  email: string;
  salary: number;
  
  constructor(
    name: string,
    address: string,
    phone_number: string,
    email: string,
    salary: number
  ) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone_number = phone_number;
    this.salary = salary;
  };
  check_assignment(obj: assignment){
    if(obj.is_done){
      console.log(`Assignment is done. You can get your mark: 5.`);
    }
    else{
      console.log(`Assignment isn't done. You can't get your mark.`);
    }
  };
}

class CourseProgress {
  received_marks: {};
  visited_lectures: number;
  completed_assignments: {} | { datetime: assignment };
  notes: {};
  get_progress_to_date(date: Date) : string {
    console.log(`Note: ${this.notes[date.toString()]}`);
    return this.notes[date.toString()];
  };
  get_final_mark():number {
    return 123;
  };
  fill_notes(date: Date,note: string):void {
    //Date can't be used as key;
    this.notes[date.toString()] = note;
  };
  remove_note(date: Date):void {
    delete this.notes[date.toString()]
  };
  constructor(
    received_marks: {},
    visited_lectures: number,
    completed_assignments: {} | { datetime: assignment },
    notes: {} | { datetime: string }
  ) {
    this.received_marks = received_marks;
    this.visited_lectures = visited_lectures;
    this.completed_assignments = completed_assignments;
    this.notes = notes;
  }
}
//create 2 students
const OlegStudent = new Student(
  "Oleg Muz",
  "Doroshenka 50",
  "0971275232",
  "olehmuz87@gmail.com",
  999,
  11.5,
  []
);

const OlegStudent2 = new Student(
  "Oleg Muz2",
  "Doroshenka 50",
  "0971275232",
  "olehmuz87@gmail.com",
  999,
  11.5,
  []
);
// create professor
const AndriyProfessor = new Professor(
  "Andriy",
  "Tarnavskogo",
  "someProfessor@gmail.com",
  "0971111111",
  19500
);
// create course
const DesignPatterns = new Course(
  "Design Patterns",
  new Date('Septemper 1, 2022'),
  new Date('December 1, 2022'),
  "description",
  ["1", "2", "3"],
  ["1", "2", "3"],
  1,
  []
);
//create DesignPatterns Progress and check methods of it;
const DesignPatternsProgress = new CourseProgress({}, 0, {}, {});
//create new note
DesignPatternsProgress.fill_notes(new Date("sep 14, 2022"), "1231");
console.log(DesignPatternsProgress)
//remove this note
DesignPatternsProgress.remove_note(new Date("sep 14, 2022"))
console.log(DesignPatternsProgress)


//check methods of Course class
//add new student to course
DesignPatterns.add_student(OlegStudent)
console.log(DesignPatterns);
//add another one, but limit 1 stop adding;
DesignPatterns.add_student(OlegStudent2)
//limit test
DesignPatterns.add_student(OlegStudent2)
//removing of student
DesignPatterns.remove_student(OlegStudent)
console.log(DesignPatterns);

//Student methods
OlegStudent2.can_enroll(DesignPatterns);
OlegStudent2.enroll(DesignPatterns)
console.log(OlegStudent2)
OlegStudent2.unenroll(DesignPatterns)
console.log(OlegStudent2)


// node . in patterns folder to start script
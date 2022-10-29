class PersonalInfo {
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
  id: number;
  position: number;
  rank: string;
  salary: number;
  constructor(
    id,
    fullName,
    address,
    phoneNumber,
    email,
    position,
    rank,
    salary
  ) {
    this.id = id;
    this.fullName = fullName;
    this.address = address;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.position = position;
    this.rank = rank;
    this.salary = salary;
  }
}

abstract class Staff {
  personalInfo: PersonalInfo;
  constructor(
    id,
    fullName,
    address,
    phoneNumber,
    email,
    position,
    rank,
    salary){
      this.personalInfo = new PersonalInfo(id,
        fullName,
        address,
        phoneNumber,
        email,
        position,
        rank,
        salary)
    }
  abstract askSickLeave(department: Department): boolean
  abstract sendRequest(department: Department): boolean
}
class PostgraduateStudent extends Staff {
  askSickLeave(department: Department): boolean {
    return false;
  }
  sendRequest(department: Department): boolean {
    return true;
  }
  phdStatus: string;


  constructor(
    id,
    fullName,
    address,
    phoneNumber,
    email,
    position,
    rank,
    salary,
    phdStatus
  ) {
    super(id,
      fullName,
      address,
      phoneNumber,
      email,
      position,
      rank,
      salary);
    this.phdStatus = phdStatus;
    
  }
  
  
}
class Student extends Staff{
  askSickLeave(department: Department): boolean {
    return false;
  }
  sendRequest(department: Department): boolean {
    return true;
  }

  constructor(
    id,
    fullName,
    address,
    phoneNumber,
    email,
    position,
    rank,
    salary
  ) {
    super(id,
      fullName,
      address,
      phoneNumber,
      email,
      position,
      rank,
      salary);
    
  }
}
class Professor extends Staff {
  askSickLeave(destination: Department): boolean {
    return false;
  }
  sendRequest(department: Department): boolean {
    return true;
  }
  add_postgraduate_student(student: PostgraduateStudent): void {

  }

  constructor(
    id,
    fullName,
    address,
    phoneNumber,
    email,
    position,
    rank,
    salary
  ) {
    super(id,
      fullName,
      address,
      phoneNumber,
      email,
      position,
      rank,
      salary);
    
  }
}

class Department {
  title:string;
  students:Student[];
  professors:Professor[];
  courses:string[];
  requests:[];
  proceedRequests():void{
    console.log('proceedRequests')
  }
}

class Course {
  seminars:number[];
  title: string
  constructor(title: string){
    this.seminars = [];
    this.title = title;
  }
}
class Seminar {
  id:number;
  title:string;
  deadline:Date;
  assignments:{}[];
  status: any;
  related_course:string;

  implementItem(itemName:string):string{
    return "str";
  }
  addComment(str:string): void{
    console.log("Coment added")
  }
}
class Enroll{
  studentCourses: {};
  courseStudents: {};
  constructor(){
    this.studentCourses = {};
    this.courseStudents = {};
  }
  enroll(student: Student, course: Course):void{
    let keys = Object.keys(this.studentCourses);
    if(keys.includes(student.personalInfo.id.toString())){
      console.log("Currently enroll this course", this.studentCourses);
    }
    else{
      this.studentCourses[student.personalInfo.id] = [course.title];
      this.courseStudents[course.title] = [student.personalInfo.id];
      //console.log("Welcome new student to this course", this.studentCourses, this.courseStudents)
    }
  }
  unenroll(student: Student, course: Course):void{
    let keys = Object.keys(this.studentCourses);
    if(!keys.includes(student.personalInfo.id.toString())){
      console.log("There is no such student in this course", this.studentCourses);
    }
    else{
      console.log("Removed student from this course", this.studentCourses)
      delete this.studentCourses[student.personalInfo.id];
      delete this.courseStudents[course.title];
      console.log(this.studentCourses)
    }
  }
}

const PostStud = new PostgraduateStudent(
  4,
  "Oleg MUz",
  "Doroshenka 50",
  "+380971275232",
  "olehmuz87@gmail.com",
  "full-stack developer",
  "rank",
  400,
  "Magistr"

)

const stud1 = new Student(
  3,
  "Oleg MUz",
  "Doroshenka 50",
  "+380971275232",
  "olehmuz87@gmail.com",
  "full-stack developer",
  "rank",
  400)

const stud = new Student(
  4,
  "Oleg MUz",
  "Doroshenka 50",
  "+380971275232",
  "olehmuz87@gmail.com",
  "full-stack developer",
  "rank",
  400)

const enroll = new Enroll();
const course = new Course("Patterns");
enroll.enroll(stud, course);
console.log(enroll);
enroll.enroll(stud, course);
enroll.enroll(stud1, course);
enroll.unenroll(stud, course);
console.log(enroll);
 
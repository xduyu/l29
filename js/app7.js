const pupilName = document.getElementById('pupil-name');
const pupilSurName = document.getElementById('pupil-sur-name');
const pupilAbout = document.getElementById('pupil-about');
const pupilCourse = document.getElementById('pupil-course');
const pupilFaculty = document.getElementById('pupil-faculty');
const addNewStudent = document.getElementById('add-new-student');
const teacherName = document.getElementById('teacher-name');
const teacherSurName = document.getElementById('teacher-sur-name');
const teacherAbout = document.getElementById('teacher-about');
const teacherDirection = document.getElementById('teacher-direction');
const addNewTeacher = document.getElementById('add-new-teacher');
const userslist = document.getElementById('userslist');


class User {
    constructor(username, usersurname, userabout) {
        this.name = username;
        this.surname = usersurname;
        this.about = userabout;
    }
    getInfo() {
        return `Пользователь: ${this.surname}, ${this.name}`
    }
}

class Pupil extends User {
    constructor(username, usersurname, userabout, usercourse, userfaculty) {
        super(username, usersurname, userabout)
        this.role = 'student';
        this.course = usercourse;
        this.faculty = userfaculty;
    }
    getInfo() {

    }
}

class Teacher extends User {
    constructor(username, usersurname, userabout, userdirection) {
        super(username, usersurname, userabout)
        this.role = 'teacher';
        this.direction = userdirection;
    }
}

class Admin extends User {
    constructor(username, usersurname, userabout) {
        super(username, usersurname, userabout)
        this.role = 'admin';
    }
}

addNewStudent.addEventListener('click', () => {
    let name = pupilName.value;
    let surname = pupilSurName.value;
    let about = pupilAbout.value;
    let course = pupilCourse.value;
    let faculty = pupilFaculty.value;
    let newPupil = new Pupil(name, surname, about, course, faculty)
    console.log(newPupil)
    let userItem = document.createElement('li')
    let userItemP = document.createElement('p')
    userItemP.append(userItem)
    userItem.append(userslist)
    userItemP.textContent = `name: ${name}`
})
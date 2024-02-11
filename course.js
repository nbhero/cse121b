const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    teacher: "Bruno",
    sections: [
        {
            sectionNum: 0,
            roomNum: "STC 300",
            enrolled: 25,
            days: "Friday",
            instructor: "Bro Bruno",
        },
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "Thursday",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "Monday",
            instructor: "Sis A",
        },
    ],
    init(){
        setCourseInfo(this);
        renderSections(this.sections);
    },
    changeEnrollment: function (sectionNum, add = true) {
      // find the right section...Array.findIndex will work here
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        if (add) {
          this.sections[sectionIndex].enrolled++;
        } else {
          this.sections[sectionIndex].enrolled--;
        }
        renderSections(this.sections);
      }
    },
  };
  
  function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    const courseTeacher = document.querySelector("#courseTeacher");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
    courseTeacher.textContent = `Supervisor: ${course.teacher}`
  }
  
  function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }

export default aCourse;
const addBtn = document.querySelector(".add-btn");

// Load saved students on page load
window.addEventListener("DOMContentLoaded", () => {
  const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
  storedStudents.forEach((student) => displayStudent(student));
});

// Add student
addBtn.addEventListener("click", function () {
  const nameInput = document.querySelector("#student-name").value.trim();
  const idInput = document.querySelector("#student-id").value.trim();
  const emailInput = document.querySelector("#email-id").value.trim();
  const numInput = document.querySelector("#contact-no").value.trim();

  // Validation
  const validation = document.querySelector(".validation");
  validation.innerHTML = "";

  const validationIcon = document.createElement("ion-icon");
  const validationMsg = document.createElement("div");
  validationIcon.classList.add("validation-icon");
  validationMsg.classList.add("validation-msg");
  validation.append(validationIcon, validationMsg);

  if (!nameInput || !idInput || !emailInput || !numInput) {
    validationIcon.setAttribute("name", "alert-circle-outline");
    validationMsg.textContent = "All fields are mandatory";
    return;
  } else {
    validationIcon.setAttribute("name", "checkmark-circle-outline");
    validationIcon.style.color = "green";
    validationMsg.textContent = "Form submitted successfully";
    validationMsg.style.color = "green";
  }

  // Create a student object with a unique internal id
  const student = {
    uid: Date.now().toString(), // unique identifier
    name: nameInput,
    studentId: idInput,
    email: emailInput,
    num: numInput,
  };

  // Save to localStorage
  saveStudent(student);

  // Display on screen
  displayStudent(student);

  // Reset form ==================================================

  document.querySelector("#student-name").value = "";
  document.querySelector("#student-id").value = "";
  document.querySelector("#email-id").value = "";
  document.querySelector("#contact-no").value = "";
});

// Display a single student =====================================

function displayStudent(student) {
  const studentsLists = document.querySelector(".students-list");

  const registeredStudents = document.createElement("div");
  registeredStudents.classList.add("registered-students");
  registeredStudents.setAttribute("data-uid", student.uid); // store unique id

  const studentName = document.createElement("div");
  studentName.classList.add("display-name");
  studentName.innerHTML = student.name;

  const studentId = document.createElement("div");
  studentId.classList.add("display-id");
  studentId.innerHTML = student.studentId;

  const studentEmail = document.createElement("div");
  studentEmail.classList.add("display-email");
  studentEmail.innerHTML = student.email;

  const studentNum = document.createElement("div");
  studentNum.classList.add("display-num");
  studentNum.innerHTML = student.num;

  const deleteBtn = document.createElement("ion-icon");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.setAttribute("name", "close-circle-outline");

  // Delete only this student
  deleteBtn.addEventListener("click", () => {
    const uid = registeredStudents.getAttribute("data-uid");
    registeredStudents.remove();
    deleteStudent(uid);
  });

  //   add to HTML ===============================
  registeredStudents.append(
    studentName,
    studentId,
    studentEmail,
    studentNum,
    deleteBtn
  );
  studentsLists.appendChild(registeredStudents);
}

// Save student to localStorage
function saveStudent(student) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
}

// Delete only the target student by unique id
function deleteStudent(uid) {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  const updatedStudents = students.filter((student) => student.uid !== uid);
  localStorage.setItem("students", JSON.stringify(updatedStudents));
}

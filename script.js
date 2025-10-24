const addBtn = document.querySelector(".add-btn");

// Add button function ===============================

addBtn.addEventListener("click", function () {
  const nameInput = document.querySelector("#student-name").value;
  const idInput = document.querySelector("#student-id").value;
  const emailInput = document.querySelector("#email-id").value;
  const numInput = document.querySelector("#contact-no").value;

  //   validating forms ================================

  const validation = document.querySelector(".validation");
  validation.innerHTML = ""; // remove previous validation

  const validationIcon = document.createElement("ion-icon");
  const validationMsg = document.createElement("div");

  validationIcon.classList.add("validation-icon");
  validationMsg.classList.add("validation-msg");

  validation.appendChild(validationIcon);
  validation.appendChild(validationMsg);

  if (
    nameInput === "" ||
    idInput === "" ||
    emailInput === "" ||
    numInput === ""
  ) {
    validationIcon.setAttribute("name", "alert-circle-outline");
    validationMsg.innerHTML = "All feiilds are mendatory";

    return;
  } else {
    validationIcon.setAttribute("name", "checkmark-circle-outline");
    validationIcon.style.color = "green";
    validationMsg.innerHTML = "Form submitted Successfully";
    validationMsg.style.color = "green";
  }

  // creating list items ===============================

  const studentsLists = document.querySelector(".students-list");

  const registeredStudents = document.createElement("div");
  registeredStudents.classList.add("registered-students");

  const studentName = document.createElement("h4");
  studentName.classList.add("display-name");
  studentName.innerHTML = nameInput;

  const studentId = document.createElement("h4");
  studentId.classList.add("display-id");
  studentId.innerHTML = idInput;

  const studentEmail = document.createElement("h4");
  studentEmail.classList.add("display-email");
  studentEmail.innerHTML = emailInput;

  const studentNum = document.createElement("h4");
  studentNum.classList.add("display-num");
  studentNum.innerHTML = numInput;

  const deleteBtn = document.createElement("ion-icon");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.setAttribute("name", "close-circle-outline");
  deleteBtn.addEventListener("click", () => {
    registeredStudents.remove();
  });

  // adding to HTML

  registeredStudents.appendChild(studentName);
  registeredStudents.appendChild(studentId);
  registeredStudents.appendChild(studentEmail);
  registeredStudents.appendChild(studentNum);
  registeredStudents.appendChild(deleteBtn);
  studentsLists.appendChild(registeredStudents);

  // resetting forms ===================================

  document.querySelector("#student-name").value = "";
  document.querySelector("#student-id").value = "";
  document.querySelector("#email-id").value = "";
  document.querySelector("#contact-no").value = "";
});

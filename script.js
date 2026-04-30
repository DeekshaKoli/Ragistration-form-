function saveData() {

  let username = document.getElementById("username").value
  let fullname = document.getElementById("fullname").value
  let number = document.getElementById("number").value
  let age = document.getElementById("age").value
  let course = document.getElementById("course").value
  let fees = document.getElementById("fees").value
  let email = document.getElementById("email").value

  let gender = document.querySelector('input[name="gender"]:checked')

  if(!username || !fullname || !number || !age || !course || !fees || !email || !gender){
    alert("All fields are required")
    return
  }

  let student = {
    username,
    fullname,
    number,
    age,
    gender: gender.value,
    course,
    fees,
    email
  }

  let data = JSON.parse(localStorage.getItem("students")) || []

  let editIndex = localStorage.getItem("editIndex")

  if(editIndex !== null){
    data[editIndex] = student   // ✅ update
    localStorage.removeItem("editIndex")
  } else {
    data.push(student)          // ✅ new add
  }

  localStorage.setItem("students", JSON.stringify(data))

  alert("Registered Successfully ✅")

  document.querySelector("form")?.reset()
}
// function searchData(){
  // let value = document.getElementById("search").value.toLowerCase()

  // let filtered = students.filter(item =>
  //   item.fullname.toLowerCase().includes(value)
  // )

  // showData(filtered)
function searchData(){
  let value = document.getElementById("search").value.toLowerCase()

  let students = JSON.parse(localStorage.getItem("students")) || [];

  let filtered = students.filter(item => 
    item.fullname.toLowerCase().includes(value)
  )

  showData(filtered)
}


// function editData(index){
//   let student = students[index]

//   localStorage.setItem("editIndex", index)

  // redirect to form page
//   window.location.href = "index.html"
// }
function editData(index){
  let students = JSON.parse(localStorage.getItem("students")) || [];

  let student = students[index]

  localStorage.setItem("editIndex", index)

  window.location.href = "index.html"
}
let editIndex = localStorage.getItem("editIndex")

if(editIndex !== null){
  let data = JSON.parse(localStorage.getItem("students"))

  let student = data[editIndex]

  document.getElementById("username").value = student.username
  document.getElementById("fullname").value = student.fullname
  document.getElementById("number").value = student.number
  document.getElementById("age").value = student.age
  document.getElementById("course").value = student.course
  document.getElementById("fees").value = student.fees
  document.getElementById("email").value = student.email

  document.querySelector(`input[name="gender"][value="${student.gender}"]`).checked = true
}

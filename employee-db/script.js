(async function () {
  const data = await fetch("./data.json");
  const result = await data.json();
  console.log("data1", result.users);

  let users = result.users;

  let user = users[0]
  let id = user.id

  const renderEmployees = (users) => {
    document.querySelector(".employeeList").innerHTML = ""
    users.forEach(user => {
      const el = document.createElement("div")
      el.class = "employee"
      const el2 = document.createElement("div")
      el2.class = "title"
      el2.setAttribute("data-id", id)
      el2.innerHTML =  `${user.firstName} ${user.lastName}`
      el.appendChild(el2)
      document.querySelector(".employeeList").appendChild(el)
    });
  }

  const renderEmployee = (user) => {
    document.querySelector(".employeeInformation").innerHTML = ""
    document.querySelector(".employeeInformation").innerHTML = `${user.firstName} ${user.lastName}`
  }
  

  renderEmployee(user)
  renderEmployees(users)
})()
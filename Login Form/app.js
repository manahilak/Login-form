function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === "person1@gmail.com" && password === "12345") {
    alert("Login successfuly!");
  } else if (username === "" || password === "") {
    alert("Enter username or password");
  } else {
    alert("Incorrect username or password");
  }
}

function login() {
  const username = document.getElementById("username").value;
  document.getElementById("message").innerText = "Welcome, " + username + "!";
}

function buyItem(itemName) {
  document.getElementById("message").innerText = "You bought: " + itemName + "!";
}

const inventory = [];

function buyItem(itemName) {
  inventory.push(itemName);
  updateInventoryUI();
}

function updateInventoryUI() {
  const list = document.getElementById("inventoryList");
  list.innerHTML = "";
  inventory.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

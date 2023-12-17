document.querySelectorAll(".task-table td").forEach((el) => {
  if (el.innerHTML == "1") {
    el.addEventListener("mouseover", onCellMouseOver);
    el.addEventListener("mouseout", onCellMouseOut);
    el.addEventListener("click", onCellClick);
    el.addEventListener("dblclick", onCellDblClick);
  }
});

function onCellMouseOver(e) {
  e.target.originalColor = e.target.style.backgroundColor;
  const randomColorHex = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = `#${randomColorHex}`;
}

function onCellMouseOut(e) {
  e.target.style.backgroundColor = e.target.originalColor;
}

function onCellClick(e) {
  const colorPicker = document.querySelector("#color-picker");
  e.target.originalColor = colorPicker.value;
  e.target.style.backgroundColor = colorPicker.value;
}

function onCellDblClick(e) {
  const values = ["1", "2", "3", "4", "5", "6"];
  const tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    if (values.includes(td.innerHTML)) {
      td.style.background = document.getElementById("color-picker").value;
    }
  });
}

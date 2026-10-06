const ex3_2 = document.getElementById("ex3_two");
const ex3_drag = document.getElementById("ex3_element");
const ex3_1 = document.getElementById("ex3_one");

ex3_drag.setAttribute("draggable", "true");

ex3_drag.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text/plain", e.target.id);
});

[ex3_1, ex3_2].forEach((container) => {
  container.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  container.addEventListener("drop", function (e) {
    e.preventDefault();
    const elementId = e.dataTransfer.getData("text/plain");
    const elementToMove = document.getElementById(elementId);

    if (elementToMove) {
      this.appendChild(elementToMove);
    }
  });
});

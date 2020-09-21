function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.currentTarget.style.backgroundColor = 'yellow';
}

function onDrop(event) {
  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  draggableElement.style.backgroundColor = '#4AAE9B';
  const dropzone = event.target.closest(".dropzone");
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
}

function onDragOver(event) {
  event.preventDefault();
}
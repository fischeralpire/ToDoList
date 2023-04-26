// Diese Funktion wird aufgerufen, wenn das Formular abgeschickt wird
function addTodo() {
  event.preventDefault(); // Verhindert das Standardverhalten des Formulars (Neuladen der Seite)
  const deleteButton = document.getElementById("delete-button");
  const clearButton = document.getElementById("clear-list");

  todolist.innerHTML += `
    <li class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons  mdl-list__item-avatar">label</i>
        ${todofield.value} 
      </span>
      <span class="mdl-list__item-secondary-action">
        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
        <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" />
        </label>
      </span>
    </li>
  `;

  // Leert das Textfeld
  todofield.value = '';

  // Zeigt den "Liste löschen"-Button an, wenn die Liste Elemente enthält
  if (todolist.children.length > 0) {
    deleteButton.style.display = "block";
  }
  
  clearButton.addEventListener("click", function() {
    if (todolist.children.length > 0) {
      let list = document.getElementById("todolist");
      list.innerHTML = "";
      deleteButton.style.display = "none";
    }
  });
}

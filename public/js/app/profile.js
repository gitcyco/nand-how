const editProfileButton = document.getElementById("edit-profile-button");
editProfileButton.addEventListener("click", (e) => toggleEditView(e));

function toggleEditView(event) {
  const editDiv = document.getElementById("edit-profile-section");
  editDiv.classList.toggle("d-none");
}

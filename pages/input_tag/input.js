document.addEventListener("DOMContentLoaded", () => {
  const tagInputContainer = document.querySelector(".tag-input-container");
  const tagsList = document.querySelector(".tags-list");
  const tagInput = document.querySelector(".tag-input");

  let tags = [];

  // Function to render tags
  function renderTags() {
    // Clear existing tags
    tagsList.innerHTML = "";

    // Create and append tag elements
    tags.forEach((tag, index) => {
      const li = document.createElement("li");
      li.textContent = tag;

      // Create remove button
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-tag");
      removeBtn.innerHTML = "×"; // Multiplication sign (×)
      removeBtn.setAttribute("type", "button");
      removeBtn.addEventListener("click", () => removeTag(index));

      // Append remove button to tag
      li.appendChild(removeBtn);

      // Append tag to list
      tagsList.appendChild(li);
    });
  }

  // Function to add a tag
  function addTag(tag) {
    const trimmedTag = tag.trim();
    if (trimmedTag !== "" && !tags.includes(trimmedTag)) {
      tags.push(trimmedTag);
      renderTags();
    }
  }

  // Function to remove a tag by index
  function removeTag(index) {
    tags.splice(index, 1);
    renderTags();
  }

  // Event listener for keydown events on the input field
  tagInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(); // Prevent form submission or adding the comma
      const inputValue = tagInput.value;
      addTag(inputValue);
      tagInput.value = ""; // Clear input field
    } else if (e.key === "Backspace" && tagInput.value === "") {
      // Remove the last tag if Backspace is pressed and input is empty
      if (tags.length > 0) {
        removeTag(tags.length - 1);
      }
    }
  });
});

document.getElementById("addItem").addEventListener("click", function () {
    const input = document.getElementById("itemInput");
    const value = input.value.trim();

    if (value !== "") {
        const li = document.createElement("li");
        li.classList.add("todo-item");

        // Linke Gruppe: Checkbox + Text
        const leftGroup = document.createElement("div");
        leftGroup.classList.add("left-group");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const text = document.createElement("span");
        text.textContent = value;

        checkbox.addEventListener("change", function () {
            text.classList.toggle("done", checkbox.checked);
        });

        leftGroup.appendChild(checkbox);
        leftGroup.appendChild(text);

        // Löschen-Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        // Zusammenbauen
        li.appendChild(leftGroup);
        li.appendChild(deleteBtn);
        document.getElementById("list").appendChild(li);
        input.value = "";
    }
});

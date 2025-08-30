document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addBtn");
    const container = document.getElementById("notes-container");

    // Function to apply background based on status
    function applyColors(card, status){
        card.className = "card p-3";

        if(status === "Assigned") card.classList.add("task-assigned")
        if(status === "In-Progress") card.classList.add("task-progress")
        if(status === "Completed") card.classList.add("task-completed")
    }

    // Creating a new task
    function createNotes(title, description, status){
        const card = document.createElement("div");
        card.className = "card p-3"

        const noteTitle = document.createElement("h4");
        noteTitle.innerText = title;

        const noteDescription = document.createElement("p");
        noteDescription.innerText = description;

        const select = document.createElement("select");
        select.className = "form-select mt-2";
        ["Assigned", "In-Progress", "Completed"].forEach(data => {
            const options = document.createElement("option");
            options.value = data;
            options.innerText = data;
            if(data === status) options.selected = true;
            select.appendChild(options);
        })

        applyColors(card, status);

        // Change background colour when status changes
        select.addEventListener("change", e => {
            applyColors(card, e.target.value);
        })

        card.appendChild(noteTitle)
        card.appendChild(noteDescription)
        card.appendChild(select)
        container.appendChild(card);
    }

    addButton.addEventListener("click", () => {
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
        const status = document.getElementById("status").value;

        // Validation
        if(!title || !description || !status){
            alert("All fields are required");
            return;
        }

        createNotes(title, description, status);

        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("status").value = "";
    })
})
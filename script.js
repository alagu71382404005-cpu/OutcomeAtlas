function searchItems() {
    const input = document.getElementById("searchInput");
    const result = document.getElementById("result");

    const query = input.value.trim();

    if (query === "") {
        result.innerText = "Please enter something to search.";
        return;
    }

    result.innerText = "You searched for: " + query;
}

function selectCategory(category) {
    document.getElementById("result").innerText =
        "You selected: " + category;
}

function shareExperience() {
    const experience = prompt("Share your experience:");

    if (experience && experience.trim() !== "") {
        alert("Thank you! Your experience: " + experience);
    }
}

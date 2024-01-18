const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);

    const myObj = Object.fromEntries(formData)
    console.log(myObj)
    // correctly logs the formData object with the keys being the input name attribute and the value being the value of the input. 
});

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const colour = formData.get("colour");

    localStorage.setItem("colour", colour);
});

const colour = localStorage.getItem("colour");

if (colour) {
    const input = document.querySelector("input");
    input.value = colour;
}

const form = document.querySelector("form");

function savePreferences(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const colour = formData.get("colour");

    // preferences is now an object, it might contain other preferences...
    const preferences = {
        colour,
    }

    localStorage.setItem("preferences", JSON.stringify(preferences));
}

form.addEventListener("submit", savePreferences);


function loadPreferences() {
    // load the prefs
    const preferences = JSON.parse(localStorage.getItem("preferences"));

    // if we have some prefs
    if (preferences) {
        // set the form value
        const input = document.querySelector("input");
        input.value = preferences.colour || "#000000"; // || is the "or" operator, it will use the value on the left if it's truthy, otherwise it will use the value on the right as a default value if colour isn't saved

        // set the body color to the user colour preference (intentional US / UK spelling difference...)
        const body = document.querySelector("body");
        body.style.color = preferences.colour || "#000000";
    }
}

const defaults = {
    colour: "#000000",
};

body.style.color = preferences.colour || defaults.colour;

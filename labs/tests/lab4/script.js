// Menu page functionality...
if (document.getElementById("menuDisplay")) {
    // Array of spooky-themed menu items
    const menuItems = [
        {
            name: "Bloody Matcha Latte",
            description: "Ceremonial matcha with a chilling twist, steamed with crimson milk.",
            price: 6.00,
            image: "./assets/bloody-matcha-latte.webp"
        },

        {
            name: "Ghastly Matcha Tea",
            description: "Organic matcha steeped in ghostly water for an eerie refreshment.",
            price: 3.00,
            image: "./assets/ghastly-matcha-tea.webp"
        },

        {
            name: "Coffin Brew Coffee",
            description: "A dark, robust French press brew that awakens your inner spirit.",
            price: 3.50,
            image: "./assets/coffin-brew.webp"
        },

        {
            name: "Creepy Croissant",
            description: "Buttery, flaky, and haunted by mysterious flavors.",
            price: 5.00,
            image: "./assets/creepy-croissant.webp"
        },

        {
            name: "Graveyard Croissant",
            description: "A savory twist with ham and cheese, rising from the tomb of taste.",
            price: 5.50,
            image: "./assets/graveyard-croissant.webp"
        }
    ];

    let currentIndex = 0;

    // Function that displays current menu item
    function displayMenuItem(index) {
        const item = menuItems[index];
        document.getElementById("menuImage").src = item.image;
        document.getElementById("menuImage").alt = item.name;
        document.getElementById("menuItemName").textContent = item.name;
        document.getElementById("menuItemDescription").textContent = item.description;

        // Formating the price as $USD
        const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
        document.getElementById("menuItemPrice").textContent = formatter.format(item.price);
    }

    // Function for NEXT menu item
    function nextImage() {
        currentIndex = (currentIndex + 1) % menuItems.length;
        displayMenuItem(currentIndex);
    }

    // Function for PREVIOUS menu item
    function prevImage() {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        displayMenuItem(currentIndex);
    }

    // Initial display
    displayMenuItem(currentIndex);

    // Event listeners for buttons
    document.getElementById("nextButton").addEventListener("click", nextImage);
    document.getElementById("prevButton").addEventListener("click", prevImage);
}

// Now hiring page functionality
if (document.getElementById("hiringForm")) {
    const form = document.getElementById("hiringForm");
    const ageInput = document.getElementById("ageInput");
    const phoneInput = document.getElementById("phoneInput");
    const moreInfo = document.getElementById("moreInfo");
    const charCounter = document.getElementById("charCounter");

    // Character counter (max 30 characters)
    moreInfo.addEventListener("input", function () {
        const remaining = 30 - moreInfo.value.length;
        charCounter.textContent = remaining + " characters remaining";
    });

    // Form submission validation and logging
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validate Age (21-99)
        let age = parseInt(ageInput.value);
        if (isNaN(age) || age < 21 || age > 99) {
            alert("Age must be a number between 21 and 99.");
            return;
        }

        // Validate Phone Number (xxx-xxx-xxxx)
        let phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            alert("Phone number must be in the format xxx-xxx-xxxx.");
            return;
        }

        // Validate More Info length
        if (moreInfo.value.length > 30) {
            alert("More Info cannot exceed 30 characters.");
            return;
        }

        // Collecting form data
        const formData = {
            firstName: form.fName.value,
            lastName: form.lName.value,
            address: form.address1.value,
            city: form.city.value,
            state: form.state.value,
            age: age,
            phoneNumber: phoneInput.value,
            email: form.email.value,
            password: form.password.value,
            relationshipStatus: form.relationshipStatus.value,
            favoriteColors: [
                form.favoriteColor1?.checked ? "Red" : "",
                form.favoriteColor2?.checked ? "Green" : "",
                form.favoriteColor3?.checked ? "Blue" : "",
                form.favoriteColor4?.checked ? "Yellow" : "",
                form.favoriteColor5?.checked ? "Aquamarine" : ""
            ].filter(color => color !== ""),
            moreInfo: moreInfo.value
        };

        console.log("Form Data:", formData);
        alert("Application submitted! Check the console for details.");
    });
}

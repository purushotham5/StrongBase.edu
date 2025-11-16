const scriptURL = 'https://script.google.com/macros/s/AKfycbyXioBVtYIriKdej13RdRxBQJ4rWKP_jN73HeuRogTa-I7cHDKtmXMifC5U3Jb70aDK/exec';
const rollCheckURL = "https://script.google.com/macros/s/AKfycby07ax9yc44TfwZOKk5_Tp17rJV9vNhOvaaMP89PArcoLdTnQFd_b0io9aNyWjI8MY0/exec";

const form = document.forms['contact-form'];
const submitButton = document.getElementById("submit");
const originalButtonText = submitButton.value;

// Disable submit initially
submitButton.disabled = true;
submitButton.style.cursor = "not-allowed";

function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    document.getElementById("phoneError").textContent = phoneRegex.test(phone) ? "" : "Phone number must be exactly 10 digits.";
}

function validateRollNumber() {
    let rollNumberInput = document.getElementById("rollNumber");
    let rollNumber = rollNumberInput.value.trim().toUpperCase();
    let match = rollNumber.match(/^PROGFTWD(\d{1,3})$/);

    if (!match) {
        alert("Invalid Training ID. Enter a valid ID like: PROGFTWD01, PROGFTWD10, or PROGFTWD124.");
        return;
    }

    let serialNumber = parseInt(match[1], 10);
    if (serialNumber < 1 || serialNumber > 999) {
        alert("Invalid Training ID range. Use PROGFTWD01 to PROGFTWD999.");
        return;
    }

    rollNumberInput.value = serialNumber < 10 ? `PROGFTWD00${serialNumber}` : serialNumber < 100 ? `PROGFTWD0${serialNumber}` : `PROGFTWD${serialNumber}`;
}

function validateRating(event) {
    const rating = event.target.value.trim();
    if (rating && (rating > 5 || rating < 1)) {
        alert("Rating must be between 1 and 5.");
        event.target.value = "";
    }
}

async function checkDuplicateRollNumber() {
    const rollNumber = document.getElementById("rollNumber").value.trim().toUpperCase();
    if (!/^PROGFTWD\d{3}$/.test(rollNumber)) return false;

    try {
        const response = await fetch(rollCheckURL);
        const existingRollNumbers = await response.json();

        if (existingRollNumbers.includes(rollNumber)) {
            alert("You have already submitted feedback. Duplicate entries are not allowed.");
            return false;
        }
    } catch (error) {
        console.error("Error fetching roll numbers:", error);
        alert("Error checking roll number. Please try again later.");
        return false;
    }

    return true;
}

function checkFormCompletion() {
    const phone = document.getElementById("phone").value.trim();
    const rollNumber = document.getElementById("rollNumber").value.trim();
    const trainingRating = document.querySelector('input[name="How would you rate the quality of the training? (1-5)"]').value.trim();
    const instructorRating = document.querySelector('input[name="How would you rate the quality of the instructor? (1-5)"]').value.trim();

    const phoneValid = /^[0-9]{10}$/.test(phone);
    const rollNumberValid = /^PROGFTWD\d{3}$/.test(rollNumber);
    const ratingValid = trainingRating >= 1 && trainingRating <= 5 && instructorRating >= 1 && instructorRating <= 5;

    submitButton.disabled = !(phoneValid && rollNumberValid && ratingValid);
    submitButton.style.cursor = submitButton.disabled ? "not-allowed" : "pointer";
}

document.getElementById("rollNumber").addEventListener("blur", validateRollNumber);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.querySelector('input[name="How would you rate the quality of the training? (1-5)"]').addEventListener("blur", validateRating);
document.querySelector('input[name="How would you rate the quality of the instructor? (1-5)"]').addEventListener("blur", validateRating);

document.querySelectorAll(".input-box input").forEach(input => {
    input.addEventListener("input", checkFormCompletion);
});

form.addEventListener('submit', async e => {
    e.preventDefault();
    if (submitButton.disabled) return;

    document.getElementById("loader").style.display = "flex";

    if (!(await checkDuplicateRollNumber())) {
        document.getElementById("loader").style.display = "none";
        return;
    }

    submitButton.disabled = true;
    submitButton.style.cursor = "not-allowed";
    submitButton.value = "Submitting...";

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            alert("Thank you for your valuable feedback!");
            form.reset();
            checkFormCompletion();
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Submission failed. Please try again.");
        })
        .finally(() => {
            submitButton.value = originalButtonText;
            setTimeout(() => location.reload(), 100);
        });
});

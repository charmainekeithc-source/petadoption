/* ======================================
   FUREVER HOME
   COMPLETE JAVASCRIPT
====================================== */


/* ======================================
   SIGN UP
====================================== */

function signup(event) {

    event.preventDefault();

    const fullname =
        document.getElementById("fullname").value;

    const username =
        document.getElementById("username").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {

        alert("❌ Passwords do not match!");

        return;
    }


    const user = {

        fullname: fullname,

        username: username,

        email: email,

        password: password

    };


    localStorage.setItem(
        "fureverUser",
        JSON.stringify(user)
    );


    alert("✅ Account created successfully!");

    window.location.href = "login.html";
}



/* ======================================
   LOGIN
====================================== */

function login(event) {

    event.preventDefault();


    const username =
        document.getElementById("loginUsername").value;

    const password =
        document.getElementById("loginPassword").value;


    const savedUser =
        JSON.parse(
            localStorage.getItem("fureverUser")
        );


    if (!savedUser) {

        alert(
            "❌ No account found. Please sign up first."
        );

        return;
    }


    if (
        username === savedUser.username &&
        password === savedUser.password
    ) {

        localStorage.setItem(
            "fureverLoggedIn",
            "true"
        );


        alert("✅ Login successful!");

        window.location.href = "index.html";

    } else {

        alert("❌ Incorrect username or password.");

    }
}



/* ======================================
   ADOPTION APPLICATION
====================================== */

function submitApplication(event) {

    event.preventDefault();


    alert(
        "❤️ Your adoption application has been submitted!"
    );


    window.location.href = "index.html";
}



/* ======================================
   REHOME PET
====================================== */

function submitRehome(event) {

    event.preventDefault();


    alert(
        "🐾 Your rehoming request has been submitted!"
    );


    window.location.href = "index.html";
}



/* ======================================
   ADMIN - DELETE PET
====================================== */

function deletePet(button) {

    const answer = confirm(
        "Are you sure you want to delete this pet?"
    );


    if (answer) {

        button.closest("tr").remove();

        alert("🐾 Pet listing deleted.");

    }
}



/* ======================================
   ADMIN - APPROVE APPLICATION
====================================== */

function approveApplication(button) {

    const row =
        button.closest("tr");

    const status =
        row.querySelector(".status");


    status.textContent = "Approved";

    status.className =
        "status approved";


    alert(
        "❤️ Adoption application approved!"
    );
}



/* ======================================
   ADMIN - REJECT APPLICATION
====================================== */

function rejectApplication(button) {

    const row =
        button.closest("tr");

    const status =
        row.querySelector(".status");


    status.textContent = "Rejected";

    status.className =
        "status rejected";


    alert(
        "❌ Adoption application rejected!"
    );
}



/* ======================================
   ADMIN - APPROVE REHOME
====================================== */

function approveRehome(button) {

    const row =
        button.closest("tr");

    const status =
        row.querySelector(".status");


    status.textContent = "Approved";

    status.className =
        "status approved";


    alert(
        "🏠 Rehoming request approved!"
    );
}



/* ======================================
   ADMIN - REJECT REHOME
====================================== */

function rejectRehome(button) {

    const row =
        button.closest("tr");

    const status =
        row.querySelector(".status");


    status.textContent = "Rejected";

    status.className =
        "status rejected";


    alert(
        "❌ Rehoming request rejected!"
    );
}
/* ======================================
   ADMIN LOGIN
====================================== */

function adminLogin(event) {

    event.preventDefault();

    const username =
        document.getElementById("adminUsername").value;

    const password =
        document.getElementById("adminPassword").value;


    // BASIC ADMIN ACCOUNT

    if (
        username === "admin" &&
        password === "admin123"
    ) {

        localStorage.setItem(
            "fureverAdminLoggedIn",
            "true"
        );

        alert("✅ Admin login successful!");

        window.location.href = "admin.html";

    } else {

        alert("❌ Incorrect admin username or password.");

    }

}
/* ======================================
   ADMIN LOGOUT
====================================== */

function adminLogout() {

    localStorage.removeItem(
        "fureverAdminLoggedIn"
    );

    alert("👋 Admin logged out successfully!");

    window.location.href = "admin-login.html";
}
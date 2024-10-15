//Showcase Pop-Up
document.querySelector(".C").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
    var img = document.querySelector(".cool-img");
    img.src = "images/Advanced C.webp"
    img.alt = "Advanced C"
    document.body.style.overflow = "hidden";
});

document.querySelector(".Blender").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
    var img = document.querySelector(".cool-img");
    img.src = "images/Advanced Blender.png"
    img.alt = "Advanced Blender"
    document.body.style.overflow = "hidden";
});

document.querySelector(".Ai").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
    var img = document.querySelector(".cool-img");
    img.src = "images/Advanced Ai.png"
    img.alt = "Advanced Ai"
    document.body.style.overflow = "hidden";
});

document.querySelector(".Ps").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
    var img = document.querySelector(".cool-img");
    img.src = "images/Advanced Ps.png"
    img.alt = "Advanced Ps"
    document.body.style.overflow = "hidden";
});

document.querySelector("close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
    document.body.style.overflow = "auto";
});

//Discord Webhook from ChatGPT + some of my adaptation nakub TT
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value || "Maibok";
    const name = document.getElementById('name').value || "Maibok";
    const message = document.getElementById('message').value;

    const discordWebhookURL = "https://discord.com/api/webhooks/1295017007170977862/E1VD1diYbJQS1abMwvcbYbvatpfPxkJUuUamJ2Our7BBiAL7FCvBPmcZP5-pOv2ocNsI";

    const payload = {
        content: `From: ${email} (${name})\n[${message}]`
    };

    fetch(discordWebhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    }).then(response => {
        if (response.ok) {
            document.getElementById('form-response').innerText = "Message sent successfully!";
        } else {
            document.getElementById('form-response').innerText = "Failed to send the message.";
        }
        responseDiv.style.opacity = '1';
    }).catch(error => {
        document.getElementById('form-response').innerText = "Error: " + error.message;
    });

    const responseDiv = document.getElementById('form-response');
    setTimeout(() => {
        responseDiv.style.opacity = '0';
    }, 4267);
    document.getElementById('contact-form').reset();
});

//Nigga Mode
document.querySelector(".LD").onclick = function () {
    document.body.classList.toggle("nigga-theme");
    if (document.body.classList.contains("nigga-theme")) {
        document.querySelector(".LD").src = "images/sun.svg"
        document.querySelector(".Blender_icon").src = "images/Blender_DM.png"
    } else {
        document.querySelector(".LD").src = "images/moon.svg"
        document.querySelector(".Blender_icon").src = "images/Blender_LM.png"
    }
}

//Hard Code Languages
let English = true;
document.querySelector('.LNG').addEventListener('click', function () {
    document.body.classList.toggle("TH-mode");
    if (English) {
        document.querySelectorAll('.EN').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.TH').forEach(el => el.style.display = 'block');
        
        this.textContent = 'EN';
    } else {
        document.querySelectorAll('.TH').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.EN').forEach(el => el.style.display = 'block');
        
        this.textContent = 'TH';
    }
    English = !English;
});

//sidebar
function showSidebar(){
    document.querySelector(".sidebar").style.display = "flex"
}

function hideSidebar(){
    document.querySelector(".sidebar").style.display = "none"
}
// Get references to form and display areas
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLink = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;

    // Generate resume content
    var resumeContent = `
        <h2>Editable Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the generated resume
    resumeDisplay.innerHTML = resumeContent;

    // Create a shareable link
    var shareableURL = `${window.location.origin}${window.location.pathname}?username=${encodeURIComponent(username)}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&education=${encodeURIComponent(education)}&experience=${encodeURIComponent(experience)}&skills=${encodeURIComponent(skills)}`;

    // Display the shareable link
    shareableLink.href = shareableURL;
    shareableLink.textContent = shareableURL;

    // Show the shareable link container
    shareableLinkContainer.style.display = 'block';
});

// Handle PDF download using jsPDF
downloadPdfButton.addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Collecting the resume data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;

    // Adding content to the PDF
    doc.text(`Editable Resume`, 10, 10);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Contact: ${phone}`, 10, 40);
    doc.text(`Education: ${education}`, 10, 50);
    doc.text(`Experience: ${experience}`, 10, 60);
    doc.text(`Skills: ${skills}`, 10, 70);

    // Save the PDF
    doc.save('resume.pdf');
});

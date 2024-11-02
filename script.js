document.getElementById('biodataForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const work = document.getElementById('work').value;
    const hobbie = document.getElementById('hobbie').value;
    const personal = document.getElementById('personal').value;
    


    const biodataOutput = `
        <h1>Biodata Output</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>work history:</strong> ${work}</p>
        <p><strong>Intrests and hobbies:</strong> ${hobbie}</p> 
        <p><strong>Personal information:</strong> ${personal}</p>

    `;

    const newWindow = window.open('///C:/Users/HP/Desktop/4th%20sem/assignment/new%20web/out.html');
    newWindow.document.write(biodataOutput);
    newWindow.document.close();
});

document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const jobTitle = document.getElementById('jobTitle').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const certificates = document.getElementById('certificates').value;
    const Details = document.getElementById('Details').value;
    const Education = document.getElementById('Education').value;
    const resumeOutput = `
        <h1>Resume Output</h1>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
         <p><strong>certificates:</strong> ${certificates}</p>
          <p><strong>personal details:</strong> ${Details}</p>
          <p><strong>Education qualification:</strong> ${Education}</p>
    `;
    const newWindow = window.open();
    newWindow.document.write(resumeOutput);
    newWindow.document.close();
});
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const contactMessage = document.getElementById('contactMessage').value;

    const contactOutput = `
        <h1>Contact Message Sent</h1>
        <p><strong>Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${contactEmail}</p>
        <p><strong>Message:</strong> ${contactMessage}</p>
    `;

    const newWindow = window.open();
    newWindow.document.write(contactOutput);
    newWindow.document.close();
});
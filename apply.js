document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userName = localStorage.getItem('currentUser') || "Applicant";
    localStorage.setItem('hasApplied', 'true');
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `<div style="text-align:center; padding: 60px 20px;">
            <h1 style="color: green; font-size: 3rem;">✔</h1>
            <h2>Successfully Submitted!</h2>
            <p>Thank you, <b>${userName}</b>. Your application is being reviewed.</p>
            <br>
            <button onclick="window.location.href='jobs.html'" 
                style="padding: 10px 25px; background: burlywood; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
                Go back to Main Page
            </button>
        </div>
    `;
});

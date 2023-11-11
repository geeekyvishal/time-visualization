function visualizeData() {
    // Get user input
    const instagramTime = parseInt(document.getElementById('instagram-time').value, 10);
    const sleepTime = parseInt(document.getElementById('sleep-time').value, 10);
    const studyTime = parseInt(document.getElementById('study-time').value, 10);
    const gamingTime = parseInt(document.getElementById('gaming-time').value, 10);

    // Validate input
    if (isNaN(instagramTime) || isNaN(gamingTime) || isNaN(sleepTime) || isNaN(studyTime)) {
        alert('Please enter valid numerical values for time.');
        return;
    }

    // Calculate percentages
    const totalMinutes = 24 * 60; // Total minutes in a day
    const instagramPercentage = (instagramTime / totalMinutes) * 100;
    const sleepPercentage = (sleepTime * 60 / totalMinutes) * 100;
    const studyPercentage = (studyTime * 60 / totalMinutes) * 100;
    const gamingpercentage = (gamingTime / totalMinutes) * 100;
    const remainingTime = totalMinutes - (instagramTime + gamingTime + studyTime*60 + sleepTime*60);

    // Calculate remaining time percentage
    const remainingPercentage = 100 - (instagramPercentage + sleepPercentage + studyPercentage);
    // Create a bar chart
    const chartContainer = document.getElementById('bar-chart');
    chartContainer.innerHTML = `
        <div style="height: ${instagramPercentage}%; background-color: #3498db;"></div>
        <div style="height: ${gamingpercentage}%; background-color: rgb(255, 238, 0);"></div>
        <div style="height: ${sleepPercentage}%; background-color: #e74c3c;"></div>
        <div style="height: ${studyPercentage}%; background-color: #2ecc71;"></div>
        <div class="remaining" style="height: ${remainingPercentage}%;"></div>
    `;

    // Display legend
    const legend = document.createElement('div');
    legend.innerHTML = `

        <p>Time spent on Instagram: ${instagramTime} minutes</p>
        <p>Time spent in gaming: ${gamingTime} minutes</p>
        <p>Time spent sleeping: ${sleepTime} hours</p>
        <p>Time spent studying: ${studyTime} hours</p>
        <p>Time remaining: ${remainingTime} minutes </p>

    `;

    // vishal=innerHTML =`<p>hello world</p>`;
    chartContainer.appendChild(legend);
}

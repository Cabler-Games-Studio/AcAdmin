async function fetchStats() {
    const response = await fetch("http://localhost:8080/api/stats");
    const data = await response.json();
    document.getElementById('playersOnline').innerText = data.playersOnline;
  }
  
  setInterval(fetchStats, 5000); // Update every 5 seconds
  
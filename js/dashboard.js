const cityData = {
    temperature: 24,
    aqi: 65,
    traffic: 7,
    population: 3500000,
    energy: 75,
    emergency: 23
};

function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('current-datetime').textContent = now.toLocaleString('en-US', options);
}

function updateMetrics() {
    document.getElementById('temperature').textContent = `${cityData.temperature}°C`;
    
    document.getElementById('aqi').textContent = cityData.aqi;
    const aqiStatus = cityData.aqi < 50 ? 'Good' : cityData.aqi < 100 ? 'Moderate' : 'Unhealthy';
    document.getElementById('aqi-status').textContent = aqiStatus;
    const aqiFill = document.getElementById('aqi-fill');
    aqiFill.style.width = `${cityData.aqi}%`;
    aqiFill.style.background = cityData.aqi < 50 ? '#2ecc71' : cityData.aqi < 100 ? '#f39c12' : '#e74c3c';
    
    document.getElementById('traffic').textContent = `${cityData.traffic}/10`;
    document.getElementById('traffic-status').textContent = cityData.traffic < 4 ? 'Light Traffic' : cityData.traffic < 7 ? 'Moderate Traffic' : 'Heavy Traffic';
    
    for (let i = 1; i <= 5; i++) {
        const bar = document.getElementById(`bar${i}`);
        if (i <= Math.ceil(cityData.traffic / 2)) {
            bar.style.height = `${20 * i}%`;
        } else {
            bar.style.height = '10%';
        }
    }
    
    document.getElementById('population').textContent = (cityData.population / 1000000).toFixed(2) + 'M';
    
    document.getElementById('energy').textContent = `${cityData.energy}%`;
    const energyFill = document.getElementById('energy-fill');
    energyFill.style.width = `${cityData.energy}%`;
    energyFill.style.background = `linear-gradient(90deg, #2ecc71 0%, #f39c12 50%, #e74c3c 100%)`;
    
    document.getElementById('emergency').textContent = cityData.emergency;
}

function createSimpleChart() {
    const canvas = document.getElementById('weather-chart');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = 200;
    
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const temps = [22, 24, 23, 25, 26, 24, 23];
    
    const padding = 40;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    const barWidth = chartWidth / days.length;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
    }
    
    const maxTemp = Math.max(...temps);
    const minTemp = Math.min(...temps);
    
    ctx.fillStyle = '#3498db';
    ctx.strokeStyle = '#2980b9';
    ctx.lineWidth = 2;
    
    temps.forEach((temp, index) => {
        const x = padding + index * barWidth + barWidth / 2;
        const barHeight = ((temp - minTemp) / (maxTemp - minTemp)) * chartHeight;
        const y = padding + chartHeight - barHeight;
        
        ctx.fillRect(x - barWidth / 4, y, barWidth / 2, barHeight);
        
        ctx.fillStyle = '#34495e';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(days[index], x, canvas.height - 10);
        ctx.fillText(`${temp}°`, x, y - 10);
        ctx.fillStyle = '#3498db';
    });
}

updateDateTime();
setInterval(updateDateTime, 1000);
updateMetrics();

window.addEventListener('load', createSimpleChart);
window.addEventListener('resize', createSimpleChart);
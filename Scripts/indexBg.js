console.log("Script loaded!");

let ticking = false;

function updateBackground() {
  const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  console.log("Scroll percent:", scrollPercent);
  
  const topColor = `rgba(64, 21, 82, 1)`;
  const bottomColor = `rgba(${Math.max(5, 30 - scrollPercent * 25)}, ${Math.max(3, 13 - scrollPercent * 10)}, ${Math.max(30, 66 - scrollPercent * 36)}, 1)`;
  
  console.log("Bottom color:", bottomColor);
  
  document.body.style.backgroundImage = `
    radial-gradient(#8826a0 0.85px, transparent 0.85px),
    linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)
  `;
  
  ticking = false;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded!");
  updateBackground();
});

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateBackground);
    ticking = true;
  }
});
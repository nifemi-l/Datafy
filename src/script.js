// floating particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'background-particles'; 
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // size
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // starting position 
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // duration
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// on page load
window.addEventListener('load', createParticles);

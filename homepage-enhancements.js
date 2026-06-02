document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Particle Canvas Setup (Floating Organic Leaves)
  // ==========================================================================
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: -1000, y: -1000, radius: 100 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Leaf class representing drifting particles
  class Leaf {
    constructor() {
      this.reset();
      this.y = Math.random() * height; // Start at random height initially
    }

    reset() {
      this.x = Math.random() * width;
      this.y = -20 - Math.random() * 50;
      this.size = 8 + Math.random() * 14;
      this.speedX = -0.5 + Math.random() * 1.0;
      this.speedY = 0.4 + Math.random() * 0.8;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = -0.01 + Math.random() * 0.02;
      this.color = `rgba(${70 + Math.random() * 30}, ${110 + Math.random() * 40}, ${75 + Math.random() * 30}, ${0.15 + Math.random() * 0.2})`;
      this.swayWidth = 10 + Math.random() * 20;
      this.swaySpeed = 0.005 + Math.random() * 0.01;
      this.swayAngle = Math.random() * Math.PI;
    }

    update() {
      this.y += this.speedY;
      this.swayAngle += this.swaySpeed;
      this.x += this.speedX + Math.sin(this.swayAngle) * 0.2;
      this.rotation += this.rotationSpeed;

      // Mouse repulsion physics
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x += Math.cos(angle) * force * 5;
        this.y += Math.sin(angle) * force * 5;
      }

      // Reset when off bounds
      if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.color;
      
      // Draw simple organic leaf shape using quadratic curves
      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.quadraticCurveTo(this.size * 0.6, 0, 0, this.size);
      ctx.quadraticCurveTo(-this.size * 0.6, 0, 0, -this.size);
      ctx.fill();
      ctx.restore();
    }
  }

  const particles = [];
  const particleCount = Math.min(25, Math.floor((width * height) / 60000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Leaf());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();

  // ==========================================================================
  // 2. Ambient Soundscape Control (with Waveform Synchronization)
  // ==========================================================================
  const ambientToggle = document.getElementById('ambientToggle');
  const heroWaveform = document.querySelector('.hero-waveform');
  let ambientAudio = null;

  if (ambientToggle && heroWaveform) {
    ambientToggle.addEventListener('click', () => {
      // Lazy load audio context/object to respect browser autoplay policy
      if (!ambientAudio) {
        ambientAudio = new Audio('Audio Bank/Soundscape.wav');
        ambientAudio.loop = true;
        ambientAudio.volume = 0.35;
      }

      if (ambientAudio.paused) {
        ambientAudio.play().then(() => {
          ambientToggle.classList.add('active');
          ambientToggle.querySelector('.audio-btn-text').textContent = '🔊 Mute Soundscape';
          heroWaveform.classList.add('playing');
        }).catch(err => {
          console.error("Audio playback error: ", err);
        });
      } else {
        ambientAudio.pause();
        ambientToggle.classList.remove('active');
        ambientToggle.querySelector('.audio-btn-text').textContent = 'Listen to wild India';
        heroWaveform.classList.remove('playing');
      }
    });
  }

  // ==========================================================================
  // 3. Interactive Leaflet Fieldwork Map
  // ==========================================================================
  const mapElement = document.getElementById('field-map');
  if (mapElement) {
    // Center of India, zoom level 4.5
    const map = L.map('field-map', {
      center: [21.3, 78.8],
      zoom: 4,
      zoomControl: false,
      scrollWheelZoom: false
    });

    // Add high-end CartoDB Voyager tiles (clean, light, perfect for nature site theme)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      maxZoom: 10
    }).addTo(map);

    // Custom marker icon design
    const customIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `<div style="
        width: 14px; 
        height: 14px; 
        background: #0b5d43; 
        border: 2px solid white; 
        border-radius: 50%; 
        box-shadow: 0 0 8px rgba(11,93,67,0.6);
        animation: pulse-pin 1.5s infinite alternate;
      "></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    // CSS Keyframe injected dynamically for marker animation
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @keyframes pulse-pin {
        0% { transform: scale(1); box-shadow: 0 0 6px rgba(11,93,67,0.5); }
        100% { transform: scale(1.25); box-shadow: 0 0 14px rgba(11,93,67,0.9); }
      }
    `;
    document.head.appendChild(styleSheet);

    // Field sites data matching Satyam's CV
    const sites = [
      {
        coords: [27.15, 92.40],
        title: "Eastern Himalayas",
        desc: "Thesis research focused on vocally active species and community network dynamics within mixed-species bird flocks."
      },
      {
        coords: [22.25, 80.60],
        title: "Kanha Tiger Reserve",
        desc: "Field documentation and bioacoustic monitoring inside dense central Indian dry-deciduous forests."
      },
      {
        coords: [13.52, 75.09],
        title: "Agumbe Rainforest",
        desc: "Acoustic profiling of canopy frogs and tracking territory calls of the Wayanad Torrent Frog."
      },
      {
        coords: [22.46, 69.97],
        title: "Marine National Park",
        desc: "Genetic connectivity and marine species conservation surveys for the Short-tailed Sea Snake."
      }
    ];

    // Add markers to the map
    sites.forEach(site => {
      const popupContent = `
        <div>
          <h5>📍 ${site.title}</h5>
          <p>${site.desc}</p>
        </div>
      `;
      L.marker(site.coords, { icon: customIcon })
        .addTo(map)
        .bindPopup(popupContent, {
          closeButton: false,
          minWidth: 180,
          maxWidth: 220
        });
    });
  }

  // ==========================================================================
  // 4. Scroll-Reveal Animation Trigger
  // ==========================================================================
  // Add reveal classes dynamically to avoid cluttering HTML
  const sectionsToReveal = [
    document.querySelector('.home-split-layout'),
    document.querySelector('.hero-gallery'),
    document.querySelector('.hero-panel'),
    document.querySelector('.section-title')
  ];

  sectionsToReveal.forEach(el => {
    if (el) el.classList.add('reveal-on-scroll');
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  const targets = document.querySelectorAll('.reveal-on-scroll');
  targets.forEach(t => revealObserver.observe(t));
});

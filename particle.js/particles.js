particlesJS("snowfall", {
    "particles": {
      "number": {
        "value": 130
      },
      "shape": {
        "type": "triangle"
      },
      "size": {
        "value": 5,
        "random": true
      },
      "stroke": {
        "stroke.width": 6,
        "stroke.color": "#bb3737"
      },
      "line_linked": {
        "enable": true
      },
      "move": {
        "enable": true,
        "speed": 7,
        "direction": "random",
        "straight": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      },
      "modes": {
        "push": {
          "particles_nb": 12
        },
        "repulse": {
            "distance": 120
        }
        
      }
    }
  });
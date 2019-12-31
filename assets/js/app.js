const config = {
  //begin
  bH: 23,
  bM: 59,
  bS: 50,
  // final
  fH: 0,
  fM: 0,
  fS: 0,
  wish: "Mirary taom-pahombiazana hoantsika rehetra !",
  welcome: `Bonne année <span class="year">2020</span>`
};
$(document).ready(function() {
  let showSec = true, play = false;
  const countElement = $("#count"),
    countDownAudio = $("#soundtrack").get(0),
    timeElement = $("#time");
  countDownAudio.load();
  setInterval(function() {
    // variables
    let now = new Date(),
      h = now.getHours(),
      m = now.getMinutes(),
      s = now.getSeconds();
    // activate the counter
    if (h === config.bH && m === config.bM && s >= config.bS) {
      // removing loader
      $(".loader").remove();
      // counter down
      countElement.text(`${("0" + (60 - s)).slice(-2)}`); // add 0 before number less than 10 eg. 7 => 07
      // TODO : start audio here
        if(!play){
            countDownAudio.play().then(()=> play = true).catch(err => {});
        }
    } else if (h === config.fH && m === config.fM && s === config.fS) {
        createParticle(); // create particle for fun :D
      // time to wish ;)
      showSec = false;  // don't show second
      $("#message").html(config.welcome);
      countElement.html(config.wish).css({ fontSize: "30px", color: "whitesmoke" });
      $(".indicator").remove(); // removing indicator
    }
    // changing DOM content all 1s
    showSec
      ? timeElement.text(
          `${("0" + h).slice(-2)}:${("0" + m).slice(-2)}:${("0" + s).slice(-2)}`
        )
      : timeElement.html(
          `${("0" + h).slice(-2)}<span class="blink">:</span>${("0" + m).slice(
            -2
          )}`
        );
  }, 1000);
  // here to clearInterval with an action's event
});

function createParticle() {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 10,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover"
    }
  });
}

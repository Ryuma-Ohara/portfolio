particlesJS('loadmain',{
  "particles":{

      "number":{
        "value":60,
        "density":{
          "enable":true,
          "value_area":200
        }
      },
      "shape":{
        "type":"triangle",
        "stroke":{
          "width":0,
          "color":"#ffcc00"
        },
      },
      "color":{
        "value":"#333"
      },
      "opacity":{
        "value":0.7,
        "random":false,
        "anim":{
          "enable":false,
          "speed":10,
          "opacity_min":0.1,
          "sync":false
        }
      },
      "size":{
        "value":5,
        "random":true,
        "anim":{
          "enable":false,
          "speed":40,
          "size_min":0.1,
          "sync":false
        }
      },

      "line_linked":{
        "enable":true,
        "distance":150,
        "color":"#ffffff",
        "opacity":0.4,
        "width":1
      },

      "move":{
        "speed":10,
        "straight":false,
        "direction":"none",
        "out_mode":"out"
      }

    },

    "interactivity":{
      "detect_on":"canvas",
      "events":{

        "onhover":{
          "enable":true,
          "mode":"repulse"
        },

        "onclick":{
          "enable":true,
          "mode":"push"
        },

      },

      "modes":{

        "grab":{
          "distance":400,
          "line_linked":{
            "opacity":1
          }
        },

        "repulse":{
          "distance":200
        },

        "push":{
          "particles_nb":4
        },

      }
    },
    "retina_detect":true,
    "resize":true 
  }
);

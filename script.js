
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"d4b699ce2c7b4a6a90dd620225dadaef" 
        }
      });
      
      var camera = new Camera({
        position: [
          -90.3, // lon
          37.75, // lat
          90000// elevation in meters
        ],
        tilt:50,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: {
          x: -71.162446,
          y: 42.351263,
          z: 2500
        },
        tilt: 0,
        heading: 0
      })
      
      var camera3 = new Camera({
        position: {
          x: -71.029980,
          y: 42.358529,
          z: 2500
        },
        tilt: 36,
        heading: -90
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [bos, bos2, v3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    bos.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    bos2.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
      v3.addEventListener('click', function() {
        view.goTo({
          target:camera3
        });
      });


    });

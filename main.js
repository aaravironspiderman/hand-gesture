Webcam.set({

    width: 350,
    height:300,
    image_format :'png',
    png_quality : 90
});

my_cam = document.getElementById("camera");

Webcam.attach(my_cam);

function captured(){

    Webcam.snap(function(picture){
        
        document.getElementById("result").innerHTML =  "<img id = 'snapshot' src = '" + picture + "'> ";

    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8u7qTxrGw/model.json", model_Loaded);

function model_Loaded(){

    console.log("Model is Loaded");
}

function predict(){

    img = document.getElementById("snapshot");

    classifier.classify(img, got_results);
}



function got_results(error,results){

    if (error){
        console.error(error);
      } 
    else{
          console.log(results);
          you_said = results[0].label;   
          document.getElementById("result_gesture_name1").innerHTML = you_said;
          
        if (you_said == "Amazing"){

            document.getElementById("result_gesture").innerHTML = "&#128076;";
        }
        else if (you_said == "Best"){
        
            document.getElementById("result_gesture").innerHTML = "&#128077;";
        }
        else if (you_said == "Victory"){
        
            document.getElementById("result_gesture").innerHTML = "&#9996;";
        }
        else if (you_said == "Vulcan Salute"){
        
            document.getElementById("result_gesture").innerHTML = "&#128406;";
        }
        else if (you_said == "Not good"){
        
            document.getElementById("result_gesture").innerHTML = "&#128078;";
        }
        

      }
}

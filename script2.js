var myImage=document.getElementById("mef");
var imageArray=["Media/FirstSweater.jpg", "Media/SecondDone.jpg", "Media/SecondSweater.jpg", "Media/3rdSweater.jpg"];

var imageIndex=0;

function changeImage (){
  mef.setAttribute("src", imageArray [ imageIndex]);
  imageIndex++;
  if(imageIndex>=imageArray.length){
    imageIndex=0;
  }
}

var intervalHandle = setInterval(changeImage,2000);

var myImage=document.getElementById("3rd");
var imageArray=["Media/FirstSweater.jpg", "Media/SecondDone.jpg", "Media/SecondSweater.jpg", "Media/3rdSweater.jpg"];

var imageIndex=0;

function changeImage (){
  myPhoto.setAttribute("src", imageArray [ imageIndex]);
  imageIndex++;
  if(imageIndex>=imageArray.length){
    imageIndex=0;
  }
}

var intervalHandle = setInterval(changeImage,2000);

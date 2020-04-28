var myImage=document.getElementById("3rd", "2");
var imageArray=["Media/3rdSweater.jpg", "Media/FirstSweater.jpg", "Media/SecondDone.jpg", "Media/SecondSweater.jpg"];

var imageIndex=0;

function changeImage (){
  myPhoto.setAttribute("src", imageArray [ imageIndex]);
  imageIndex++;
  if(imageIndex>=imageArray.length){
    imageIndex=0;
  }
}

var intervalHandle = setInterval(changeImage,2000);

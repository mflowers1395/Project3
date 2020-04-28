var myImage=document.getElementById("3rd", "2");
var imageArray=["3rdSweater.jpg", "FirstSweater.jpg", "SecondDone.jpg", "SecondSweater.jpg"];

var imageIndex=0;

function changeImage (){
  myPhoto.setAttribute("src", imageArray [ imageIndex]);
  imageIndex++;
  if(imageIndex>=imageArray.length){
    imageIndex=0;
  }
}

var intervalHandle = setInterval(changeImage,2000);

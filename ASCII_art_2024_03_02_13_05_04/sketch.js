const density = 'Ñ@#W$9876543210?!abc;:+=-,._          ';
let video;
let ascidiv;
//function preload() {
//  video = loadImage("pikachu1.png");
//}

function setup() {
  noCanvas(); 
  
  video = createCapture(VIDEO);
  video.size(48,48);
  ascidiv = createDiv();
} 
  //image(video,0,0,width,height);
  
function draw(){
  
  //let w = width / video.width;
  //let h = height / video.height;
  video.loadPixels();
  let asciiImage = '';
  for (let j = 0; j < video.height; j++) {
    //let row = '';
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      
      const avg = (r+g+b)/3;
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      //noStroke();
      //fill(255);
      //square(i*w, j*h, w);
      //textSize(w);
      //textAlign(CENTER,CENTER);
      //text(density.charAt(charIndex),i*w+w*0.5,j*h+h*0.5);
      const c = density.charAt(charIndex);
      if(c==' '){
        asciiImage += '&nbsp';
      }
      else{
        asciiImage +=c;
      }
    }
    //createDiv(row);
    //console.log(row);
    asciiImage += '<br/>'
  }
  ascidiv.html(asciiImage);
}
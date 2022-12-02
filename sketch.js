//버튼 플레이어
var wave;
var button;
var playing = false;
var ampValue = 0;

function setup() {  // 화면 세팅공간 (실행시 처음에 한번 실행)
  //createCanvas(displayWidth, displayHeight);  // 각 휴대폰 화면의 크기에 맞춰서 보이도록
  createCanvas(720, 256);

  wave = new p5.Oscillator();   // osc~의 역할
  wave.setType('sine');   //파형을 sine파로
  //wave.freq(440); // 주파수 (Hz) frequancy
  wave.amp(0);    // 소리의 크기 (볼륨) // 0~1
  
  button = createButton('play/pause');
  button.mousePressed(toggle);

}

function draw(){
  //wave.amp(ampValue, 0.1);
  wave.freq(ampValue);
}


function toggle(){
  if(!playing){
    wave.start();   // 소리가 남
    //wave.amp(ampValue, 1);
    wave.amp(0.3, 1);    ////
    playing = true;
  }else{
    wave.amp(0, 1);
    playing=false;
  }
}

function deviceMoved(){
  //ampValue = accelerationX/2;
  ampValue = accelerationX*1000;   /////
  background(255, 255, 255);
  text(accelerationX/2, 10, 10);
}
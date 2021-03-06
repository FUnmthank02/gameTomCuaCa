var btn = document.getElementById('btn');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img_shake = document.getElementById('shaking');
var title_Name = document.getElementById('Name');
var audio_shake = document.getElementById('audio_shake');
var audio_open = document.getElementById('audio_open');

var img = ['Shrimp', 'Crab', 'Fish', 'Chicken', 'Wine', 'Deer'];

function deleteOld() {
    img1.classList.remove('animate__animated', 'animate__fadeInLeft');
    img2.classList.remove('animate__animated', 'animate__fadeInDown');
    img3.classList.remove('animate__animated', 'animate__fadeInRight');
    title_Name.classList.remove('animate__animated', 'animate__fadeInDown');
}

function textName(a, b, c) {
    var m = img[4] + ' gourd';
    if(a == 4) 
        title_Name.innerHTML = m +' - '+ img[b] +' - '+ img[c];
    if(b == 4)
        title_Name.innerHTML = img[a] +' - '+ m +' - '+ img[c];  
    if(c == 4)
        title_Name.innerHTML = img[a] +' - '+ img[b] +' - '+ m;    
    if(a == 4 && b == 4) 
        title_Name.innerHTML = m +' - '+ m +' - '+ img[c];
    if(a == 4 && c == 4)
        title_Name.innerHTML = m +' - '+ img[b] +' - '+ m;
    if(b == 4 && c == 4)
        title_Name.innerHTML = img[b] +' - '+ m +' - '+ m;    
    if(a == 4 && b == 4 && c == 4)
        title_Name.innerHTML = m +' - '+ m +' - '+ m;
    if(a != 4 && b != 4 && c != 4)
        title_Name.innerHTML = img[a] +' - '+ img[b] +' - '+ img[c];

    title_Name.style.visibility = "visible";
    title_Name.classList.add('animate__animated', 'animate__fadeInDown');
    setTimeout(deleteOld, 1000);
}

function del_shake() {  //an di hinh anh dang xuc sac
    img_shake.style.display = "none";
}

function del_image() {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
}

function display_img() {
    img1.style.display = "block";
    img2.style.display = "block";
    img3.style.display = "block";
}

function playAudioShake() {
    audio_shake.play();
}

function playAudioOpen() {
    audio_open.play();
}

function shake() {      //hanh dong xuc sac
    del_image();
    img_shake.style.display = "block";
    title_Name.style.visibility = "hidden";
    playAudioShake()
    setTimeout(del_shake, 3000)
}

function randomImg() {      //Random ra 3 hinh nah
    display_img();
    playAudioOpen();
    var a = Math.floor(Math.random() *6);
    img1.src = `./img/${img[a]}.png`
    img1.classList.add('animate__animated', 'animate__fadeInLeft');
    setTimeout(deleteOld, 1000);

    var b = Math.floor(Math.random() *6);
    img2.src = `./img/${img[b]}.png`
    img2.classList.add('animate__animated', 'animate__fadeInDown');
    setTimeout(deleteOld, 1000);

    var c = Math.floor(Math.random() *6);
    img3.src = `./img/${img[c]}.png`
    img3.classList.add('animate__animated', 'animate__fadeInRight');
    setTimeout(deleteOld, 1000);
    textName(a, b, c);
}

function waiting() {
    shake()
    setTimeout(randomImg, 3000)
}

btn.addEventListener('click', waiting);
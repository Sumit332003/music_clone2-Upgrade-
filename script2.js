//var poster=document.querySelector(".left");
var play=document.querySelector("#play")
var forwd=document.querySelector("#forward")
var backwd=document.querySelector("#backword")
 



var arr2=[
    {songName:"Hua Main",url:"./Songs/HuaMain.mp3" , image:"./imgs/huaMain.jpg" ,duration:"4:37"},
    {songName:"Marham",url:"./Songs/Marham.mp3" , image:"./imgs/marham.jpg" ,duration:"1:53"},
    {songName:"Lovely",url:"./Songs/Lovely.mp3" , image:"./imgs/lovely.png",duration:"3:20"},
    {songName:"Aarzoo",url:"./Songs/Aarzoo1.mp3" , image:"./imgs/Aarzoo.png",duration:"3:24"},
    {songName:"Khwab",url:"./Songs/Khwab1.mp3" , image:"./imgs/khwab.png",duration:"2:38"},
    {songName:"Kaash Aisa Hota",url:"./Songs/Kaash1.mp3" , image:"./imgs/kaash.png",duration:"3:32"},
    {songName:"Haareya Meri Pyaari Bindu",url:"./Songs/HaareyaMeriPyaariBindu.mp3" , image:"./imgs/heeriye.png" ,duration:"3:34"},
    {songName:"Haaye Oye",url:"./Songs/HaayeOye.mp3" , image:"./imgs/oye.png",duration:"3:20"},
    {songName:"Kalavathi",url:"./Songs/Kalavathi.mp3" , image:"./imgs/kalavathi.png",duration:"4:14"},  
    {songName:"Apna Bna Le",url:"./Songs/Apna.mp3" , image:"./imgs/apena.png" ,duration:"3:24"},
    {songName:"Dil Diya Gallan",url:"./Songs/Dil.mp3" , image:"./imgs/diyan.png",duration:"4:20"},
    {songName:"Dil Jhoom",url:"./Songs/Jhoom.mp3" , image:"./imgs/jhoom.png",duration:"5:00"},
    {songName:"Main Raat Din Dua Karu",url:"./Songs/RaatDinDuaKaru.mp3" , image:"./imgs/raatDin.png",duration:"4:23"},
   {songName:"Malang",url:"./Songs/Malang.mp3" , image:"./imgs/malang.png",duration:"4:47"},
    {songName:"Naina Da Kya Kasoor",url:"./Songs/NainaDaKyaKasoor.mp3" , image:"./imgs/nainaDa.png",duration:"3:48"},
    {songName:"Raatan Lambiyan",url:"./Songs/RaatanLambiyan.mp3" , image:"./imgs/raatan.png",duration:"3:50"},
    {songName:"Tere Naal",url:"./Songs/TereNaal.mp3" , image:"./imgs/naal.png",duration:"3:18"},
    {songName:"Udd Jaa Kaale Kaava",url:"./Songs/UddJaaKaaleKaava.mp3" , image:"./imgs/heart1.jpg",duration:"3:24"},
    {songName:"Ok_Jaanu",url:"./Songs/okJaanu1.mp3" , image:"./imgs/okJaanu.png",duration:"3:25"},
    {songName:"Tere Pyar Mein",url:"./Songs/Tere_Pyar1.mp3" , image:"./imgs/pyarMain.png",duration:"2:57"},
  ];
    var audio = new Audio();

    var selectSong = 0;
function mainFunction(){
   var clutter ="";
   arr2.forEach(function(elm,index){

      clutter = clutter + `<div class="song-card" id=${index}> 
      <div class="part1">
           <img src="${elm.image}" alt="">
           <h2>${elm.songName}</h2>
       </div>
      <h6>${elm.duration}</h6>
   </div>`
  
   })

 
  document.querySelector(".rightSongMenu").innerHTML=clutter;
  console.log(clutter);
  audio.src=arr2[selectSong].url
  ShowOffPoster();

  // poster.style.backgroundImage = `url(${arr2[selectSong].image})`
//  poster.style.backgroundImage = `url(${arr2[selectSong].image.songName})`


}
mainFunction()

document.querySelector(".rightSongMenu")
.addEventListener("click",function(dets){
    // console.log(arr2[dets.target.id].url)
 //  audio.src=arr2[dets.target.id].url
   selectSong=dets.target.id
   play.innerHTML="play"
   mainFunction();
  audio.play();
})

// var play = document.querySelector("button")
// .addEventListener("click",function(dets){
//     selectSong=dets.target.id
//     //play.innerHTML="p"
//    //  mainFunction();
//    //ShowOffPoster();
//     audio.play();
//     console.log("hey")
// })
function ShowOffPoster(){
    var clutter = "";
    arr2.forEach(function(e ,index){
        clutter= clutter + `<div class="box" id="${index}">
        <img src="${e.image}" alt="">
        <div class="overlay">
            <div class="overlayContent">
                <h1>${e.songName}</h1>
                <h6>Feel free with flow</h6>
                <play-pausBtn>
                    <button type="button">play</button>
                </play-pausBtn>
            </div>
        </div>
    </div>`

        console.log(clutter);
         document.querySelector(".baby").innerHTML=clutter;
     })
}



var flag = 0
play.addEventListener("click",function(){
   if(flag==0){
      play.innerHTML="play"
      mainFunction()
      audio.play()
      flag=1
   }
   else{
      play.innerHTML="pause"
      mainFunction()
      audio.pause()
      flag=0;
   }
})

forwd.addEventListener("click",function(){
     if(selectSong < arr2.length-1){
      selectSong++
      mainFunction()
      audio.play()
      backwd.style.opacity=1
     }else{
      forwd.style.opacity=0.3
     }
})

backwd.addEventListener("click",function(){
   if(selectSong >0){
    selectSong--
    mainFunction()
    audio.play()
    forwd.style.opacity=1
   }else{
    backwd.style.opacity=0.3
    
   }
})

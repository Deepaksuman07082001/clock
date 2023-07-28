let hour=document.getElementById('hr');
let minute=document.getElementById('min');
let second=document.getElementById('sec');

function dispaly(){
    let date=new Date();

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();


    let hrt=30*hh+mm/2;
    let mrt=6*mm;
    let srt=6*ss;

    hour.style.transform=`rotate(${hrt}deg)`;
    minute.style.transform=`rotate(${mrt}deg)`;
    second.style.transform=`rotate(${srt}deg)`;
}
setInterval(dispaly,1000)

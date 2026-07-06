window.addEventListener("load",()=>{

const text=document.getElementById("loadingText");

const status=[
"Memuat Presentasi...",
"Menghubungkan Data...",
"Menyiapkan Dashboard...",
"Siap Ditampilkan ✓"
];

let i=0;

const change=setInterval(()=>{

i++;

if(i<status.length){

text.innerHTML=status[i];

}

},700);

setTimeout(()=>{

clearInterval(change);

document.getElementById("preloader").classList.add("hide");

document.body.style.overflow="auto";

},2800);

});

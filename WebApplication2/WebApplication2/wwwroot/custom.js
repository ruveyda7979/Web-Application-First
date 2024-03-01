var yukari = document.getElementsByClassName("yukari-cik")[0];
// console.log(yukari); ==> Kodun çalışıp çalışmadığını kontrol etmek için kullanılır.

//console.log(window);

window.addEventListener("scroll" , function() {
    const mesafe = window.scrollY; //Yukarıdan olan uazaklığı verir.
    // console.log(mesafe);
    if (mesafe > 300){
        yukari.classList.add("goster");
    }
    else
    {
       yukari.classList.remove("goster"); 
    }
});

yukari.addEventListener("click" , function() {
    window.scrollTo(0,0);
});

yukari.addEventListener("mousemove",function() {
    yukari.innerHTML = "&uArr;";
     
});

yukari.addEventListener("mouseout",function() {
    yukari.innerHTML = "TOP";
     
});
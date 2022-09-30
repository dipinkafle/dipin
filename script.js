let navbutton = document.querySelector(".navicon");
let mobilenav = document.querySelector(".navformobile");
isHidden = true;

mobilenav.style.display='none';

function navigationbar(){
    if(isHidden){
        mobilenav.style.display = "block";
        isHidden = false;
    }else{
        mobilenav.style.display = "none";
        isHidden = true;
    }
}
let starts = document.getElementById('starts');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let ElKing = document.querySelector('.ElKing');
console.log ("hello")
window.onscroll = function(){
    let value = scrollY;
    starts.style.left = value +'px';
    moon.style.top = value * 3+ 'px';
    mountains3.style.top = value * 2+ 'px';
    mountains4.style.top = value * 1.5+ 'px';
    river5.style.top = value +'px';
    boat6.style.top = value +'px';
    boat6.style.left = value*3 +'px';
    ElKing.style.fontsize = value +'px';
    if(scrollY >=67){
        ElKing.style.fontsize = 67 +'px';
        ElKing.style.position = 'fixed';
        if(this.scrollY >= 478){
            ElKing.style.display = 'none';
        }
        else {
            ElKing.style.display = 'black'
        }
}
if (this.scrollY >=127){
    this.document.querySelector('main').style.background = '#fff'
}
}

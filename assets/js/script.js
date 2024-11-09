function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

function textShow() {
    let menuMobile = document.querySelector('.text1');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.read-more-button').src = "assets/img/read-more-button.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.read-more-button').src = "assets/img/ocultar.png";
    }
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
	nextImage();
}, 4000)

function nextImage(){
	count++;
	if(count>6){
		count = 1;
	}

	document.getElementById("radio"+count).checked = true;
}

function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');
}


function unhideLightbox1() {
	unhideLightbox('gude');
}
document.getElementById('picture-1').onclick = unhideLightbox1;

function unhideLightbox2() {
	unhideLightbox('pool');
}
document.getElementById('picture-3').onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox('rabbittea');
}
document.getElementById('picture-4').onclick = unhideLightbox3;

function unhideLightbox4() {
	unhideLightbox('boba');
}
document.getElementById('picture-2').onclick = unhideLightbox4;

function unhideLightbox5() {
	unhideLightbox('food');
}
document.getElementById('picture-5').onclick = unhideLightbox5;

function unhideLightbox6() {
	unhideLightbox('calpico1');
}
document.getElementById('picture-6').onclick = unhideLightbox6;

function unhideLightbox7() {
	unhideLightbox('calpico2');
}
document.getElementById('picture-7').onclick = unhideLightbox7;

function unhideLightbox8() {
	unhideLightbox('room');
}
document.getElementById('picture-8').onclick = unhideLightbox8;

function unhideLightbox9() {
	unhideLightbox('window');
}
document.getElementById('picture-9').onclick = unhideLightbox9;




function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById(lightboxID).classList.add('hidden');
	document.getElementById('lightbox-overlay').classList.add('hidden');
}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;


//loader

function loader() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loading").style.display = "block";
}

function timing() {
	setTimeout(loader, 1000);
}














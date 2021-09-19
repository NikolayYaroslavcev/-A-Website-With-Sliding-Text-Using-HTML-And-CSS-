var slider = document.getElementById("slider");
var active = document.getElementById("active");
var liner1 = document.getElementById("liner1");
var liner2 = document.getElementById("liner2");
var liner3 = document.getElementById("liner3");
var liner4 = document.getElementById("liner4");

line1.onclick = function () {
	slider.style.transform = "translateX(0)";
	active.style.top = "0px";
};
line2.onclick = function () {
	slider.style.transform = "translateX(-25%)";
	active.style.top = "80px";
};
line3.onclick = function () {
	slider.style.transform = "translateX(-50%)";
	active.style.top = "160px";
};
line4.onclick = function () {
	slider.style.transform = "translateX(-75%)";
	active.style.top = "240px";
};

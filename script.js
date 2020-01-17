/**var images = [
	"https://i.pinimg.com/236x/f1/2b/30/f12b3053d77aa0df4b669790f92ee47b.jpg",
	"https://i.pinimg.com/originals/bc/db/a6/bcdba6c6707cd97c3d42eff5c4b0816b.jpg",
	"https://i.pinimg.com/originals/f5/4b/76/f54b7663a0e1c171ba5a56637d983788.jpg",
	"https://i.pinimg.com/originals/c7/3b/4a/c73b4a19dc981915827f4956c009d53c.jpg"
];
var img = document.getElementById("image");
img.src = images[0];

function goToNextImg(){
	var rand = Math.floor(Math.random() * images.length);
	img.src = images[rand];
}
**/
var frameDiv = document.getElementById("s2");
var i;
var idList = [];
$(function(){
	for (i = 0; i < 11; i++){
	console.log("lol");
	var button = document.createElement("button");
	button.classList.add("btn");
	button.style.width = "50px";
	button.style.height = "50px";
	frameDiv.appendChild(button);
};
}); 
$(function(){
	var btn = document.getElementsByClassName("btn");
	for (var x = 0; x<btn.length; x++){
		btn[x].id = x+1;
		btn[x].innerHTML = `Folge ${x+1}`;
	}; 
});

function openFrame(id){
	var frame = document.getElementById("frame"+id);
	frame.style.display = "flex";
}
$(function(){
	
	var btn1 = document.getElementById("1");
	var btn2 = document.getElementById("2");
	var btn3 = document.getElementById("3");
	var btn4 = document.getElementById("4");
	var btn5 = document.getElementById("5");
	var btn6 = document.getElementById("6");
	var btn7 = document.getElementById("7");
	var btn8 = document.getElementById("8");
	var btn9 = document.getElementById("9");
	var btn10 = document.getElementById("10");
	var btn11 = document.getElementById("11");
	
	btn1.onclick = function(){
		var frame = document.getElementById("frame"+btn1.id);
		frame.style.display = "flex";
		hideOtherFrames("frame1");
}
	btn2.onclick = function(){
		var frame = document.getElementById("frame"+btn2.id);
		frame.style.display = "flex";
		hideOtherFrames("frame2");
}
	btn3.onclick = function(){
		var frame = document.getElementById("frame"+btn3.id);
		frame.style.display = "flex";
		hideOtherFrames("frame3");
}
	btn4.onclick = function(){
		var frame = document.getElementById("frame"+btn4.id);
		frame.style.display = "flex";
		hideOtherFrames("frame4");
}
	btn5.onclick = function(){
		var frame = document.getElementById("frame"+btn5.id);
		frame.style.display = "flex";
		hideOtherFrames("frame5");
}
	btn6.onclick = function(){
		var frame = document.getElementById("frame"+btn6.id);
		frame.style.display = "flex";
		hideOtherFrames("frame6");
}
	btn7.onclick = function(){
		var frame = document.getElementById("frame"+btn7.id);
		frame.style.display = "flex";
		hideOtherFrames("frame7");
}
	btn8.onclick = function(){
		var frame = document.getElementById("frame"+btn8.id);
		frame.style.display = "flex";
		hideOtherFrames("frame8");
}
	btn9.onclick = function(){
		var frame = document.getElementById("frame"+btn9.id);
		frame.style.display = "flex";
		hideOtherFrames("frame9");
}
	btn10.onclick = function(){
		var frame = document.getElementById("frame"+btn10.id);
		frame.style.display = "flex";
		hideOtherFrames("frame10");
}
	btn11.onclick = function(){
		var frame = document.getElementById("frame"+btn11.id);
		frame.style.display = "flex";
		hideOtherFrames("frame11");
}
	
});

function hideOtherFrames(frameId){
	var allFrames = document.getElementsByTagName("iframe");
		Array.from(allFrames).forEach(item =>{
			if(item.id === frameId){
				return;
			}
			item.style.display = "none";
		})
}

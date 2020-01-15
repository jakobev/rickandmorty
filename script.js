var images = [
	"https://i.pinimg.com/236x/f1/2b/30/f12b3053d77aa0df4b669790f92ee47b.jpg",
	"https://i.pinimg.com/originals/bc/db/a6/bcdba6c6707cd97c3d42eff5c4b0816b.jpg",
	"https://i.pinimg.com/originals/f5/4b/76/f54b7663a0e1c171ba5a56637d983788.jpg",
	"https://i.pinimg.com/originals/c7/3b/4a/c73b4a19dc981915827f4956c009d53c.jpg"
];
var img = document.getElementById("image");
img.src = images[0]

function goToNextImg(){
	var rand = Math.floor(Math.random() * images.length);
	img.src = images[rand];
}

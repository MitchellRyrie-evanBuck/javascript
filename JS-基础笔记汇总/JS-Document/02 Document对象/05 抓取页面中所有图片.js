var images = document.images
var arr = []
for (var i = 0; i < images.length; i++) {
  var image = images[i]
  arr.push(image.src)
}
console.log(arr)
// window.alert("We are connected with js")
// var name = window.prompt("Enter Your name")

var canvas = document.getElementById("mycanvas")

// console.log(canvas)

var ctx = canvas.getContext("2d")

const grad = ctx.createLinearGradient(100,100, 200,100)
grad.addColorStop(0,"red")
grad.addColorStop(0.7,"blue")

grad.addColorStop(1,"orange")

// ctx.font = "50px Arial"
// ctx.fillStyle = grad
// ctx.fillText("Hello Class",100,100)
// ctx.fillStyle("red")


ctx.font = "50px Arial"
ctx.strokeStyle = grad
ctx.strokeText("Hello Class ",100,100)



// const radial = ctx.createRadialGradient(120,120,20,120,120,30)
// radial.addColorStop(0,"yellow")
// radial.addColorStop(0.2,"blue")
// radial.addColorStop(0.5,"green")

// radial.addColorStop(0.9,"orange")
// radial.addColorStop(1,"red")

// ctx.fillStyle = radial
// ctx.fillRect(80,50,100,90)

// ctx.moveTo(200,200)
// ctx.lineTo(600,600)

// ctx.stroke();





ctx.fillStyle = grad
ctx.fillRect(0,0,130,130)



// ctx.beginPath();
// ctx.arc(120,120,40,0,2*Math.PI) 
// ctx.fillStyle = radial
// ctx.fill()
// ctx.stroke()

function functionDownload(){
    var format = this.value
    console.log(format)
    var li = canvas.toDataURL(`image/${format}`)
    var downloadLink = document.getElementById("download")
    downloadLink.href = li
    downloadLink.download = `downloadImage.${format}`;

}
var select = document.getElementById('format')
select.addEventListener('change',functionDownload)

// link.addEventListener('click',functionDownload)












let body = document.getElementsByTagName("body")[0]
let btn = document.getElementById("create_btn")
let img_out = document.getElementsByClassName("img_output")[0]
let text_out = document.getElementsByClassName("text_output")[0]
let img_in = document.getElementById("img_input")

let data={}

btn.addEventListener('click',(e)=>{
  e.preventDefault()
  // console.log(e.target.form.elements)
  let elements = Array.from(e.target.form.elements)
  console.log(elements)
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (element.name) { // Check if the element has a name attribute
      console.log(element.name, element.value);
        data[element.name] = element.value
      if(element.name == "file" && element.files.length > 0){
        console.log(element.files)
        
        let imgeUrl = URL.createObjectURL(element.files[0])
        console.log(imgeUrl)
        let img = document.createElement('img')
        img.setAttribute('src',imgeUrl)
        // img.style.maxWidth = "300px";
        img_out.innerHTML = ""; // remove the last image
        img_out.appendChild(img)
        
      }
    }
  }
  console.log(data)
})
// function Create() {
//     if (img_in) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           img_out.style.backgroundImage = 'url(${e.target.result})';
//         };
//         reader.readAsDataURL(imageInput);
//     }
// }
var subjectObject = {
  "Architecture": {
    "Modern Minimalist": [
      {name: "Option 1",  imageUrl: "Architecture/modern_minimalist/mm_img1.jpg" },
      {name: "Option 2",  imageUrl: "Architecture/modern_minimalist/mm_img2.jpg" }] ,
    "Organic Landmark" : [
      {name: "Option 1",  imageUrl: "Architecture/organic_landmark/ol_img1.jpg" },
      {name: "Option 2",  imageUrl: "Architecture/organic_landmark/ol_img2.jpg" }]
    },

  "Interior Design": {
    "Barefoot Luxury": ["Residential", "Hospitality"],
    "Organic Dream": ["Residential", "Hospitality"],
    "Retro Chic": ["Residential", "Hospitality"],
    "Crafted interior": ["Residential", "Hospitality"],
    "Timeless elegance ": ["Residential", "Hospitality"],
    "Ultra modern minimalist": ["Residential", "Hospitality"]
  }
}

window.onload = function(){
  var first = document.getElementById('first')
  var second = document.getElementById('second')
  var checkboxesDiv = document.getElementById("checkboxes");

  // First Option 
  for(var x in subjectObject){
      first.options[first.options.length] = new Option(x)
  }

  // Second Option 
  first.onchange = function(){
      second.length = 1
      checkboxesDiv.length = 1

      second.style.display = 'block'
      checkboxesDiv.style.display = 'none'

      for(var y in subjectObject[this.value]){
          second.options[second.options.length] = new Option(y)
      }
  }

  // Third Images 
  second.onchange = function(){
    checkboxesDiv.length = 1;
    checkboxesDiv.style.display = 'block';
    
    z = subjectObject[first.value][this.value]
      console.log(z);
      for(let i=0; i<z.length; i++){
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "options";
        checkbox.value = z[i.name];

        const label = document.createElement("label");

        const img = document.createElement("img");
        img.src = z[i].imageUrl;
        label.appendChild(img);

        const text = document.createTextNode(z[i].name);
        label.appendChild(text);

        checkboxesDiv.appendChild(checkbox);
        checkboxesDiv.appendChild(label);
      }
  }
}
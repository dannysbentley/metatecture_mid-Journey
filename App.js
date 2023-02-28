var subjectObject = {
  "Architecture": {
    "Modern minimalism": ["Residential", "Commercial"],
    "Sculptural Biomimicry ": ["Residential", "Commercial"]   
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

const list = ["Option 1", "Option 2", "Option 3", "Option 4"];

window.onload = function(){
  var first = document.getElementById('first')
  var second = document.getElementById('second')
  var third = document.getElementById('third')
  var container = document.getElementById('container');

  //Test to list checkboxes.
  list.forEach((option) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "Options";
    checkbox.value = option;

    const label = document.createElement("label");
    label.appendChild(document, createTextNode(option));

    container.appendChild(checkbox);
    container.appendChild(label);
    checkboxesContainer.appendChild(document.createElement("br"));
  });

  for(var x in subjectObject){
      // console.log(x);
      first.options[first.options.length] = new Option(x)
  }

  first.onchange = function(){
      second.length = 1
      third.length = 1

      second.style.display = 'block'
      third.style.display = 'none'

      for(var y in subjectObject[this.value]){
          // console.log(y);
          second.options[second.options.length] = new Option(y)
      }
  }

  second.onchange = function(){
      third.length = 1

      third.style.display = 'block'
      z = subjectObject[first.value][this.value]
      console.log(z);
      for(let i=0; i<z.length; i++){
          third.options[third.options.length] = new Option(z[i])
      }
  }
}
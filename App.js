var subjectObject = {
  "Architecture": {
    "Modern minimalism": ["Residential", "Commercial"],
    "Sculptural Biomimicry ": ["Residential", "Commercial"],
    "Bootstrap5": ["Residential", "Commercial"],    
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
  var third = document.getElementById('third')

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
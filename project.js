// each
function each(coll, f) { 
  if (Array.isArray(coll)) { 
        for (var i = 0; i < coll.length; i++) { 
              f(coll[i], i); 
        } 
  } else { 
        for (var key in coll) { 
              f(coll[key], key); 
        } 
  } 
}


// map
function map(array, f) { 
  var acc = []; 
  each(array, function(element, i) { 
        acc.push(f(element, i)); 
  }); 
  return acc; 
}


// filter
function filter(array, predicate) {
  var acc = [];
  each(array, function(element) {
      if (predicate(element)) {
          acc.push(element);
      }
  });
  return acc;
}


//reduce
function reduce(array, f, acc) { 
     if (acc === undefined) { 
           acc = array[0]; 
           array = array.slice(1); 
     } 
     each(array, function(element, i) { 
           acc = f(acc, element, i); 
     }); 
     return acc; 
}
$('.header').fadeOut("slow") // I used these functions to make a little animation when you first open the website
$('.header').fadeIn("slow")
var list = document.getElementsByTagName("LI")  
for (var i = 0; i < list.length; i++) {
  var span = document.createElement("SPAN")
  var txt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt)
  list[i].appendChild(span)
}
var close = document.getElementsByClassName("close")
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement
    div.style.display = "none"
  }
}
var list2 = document.querySelector('ul');
list2.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked')
  }
}, false)

function newElement() { 
  var li = document.createElement("li")
  var inputValue = document.getElementById("myInput").value;
  var texto = document.createTextNode(inputValue)
  li.appendChild(texto)//This is a method provided by the DOM that allows you to add a child to the selected element
  if (inputValue === '') {
    alert("You must write something!");// if there is no input given an alert should occur
  } else {
    var currentDate = new Date().toLocaleDateString()
    var textWithDate = inputValue + " "+currentDate 
    var texto = document.createTextNode(textWithDate)//add date for each to do added
    li.appendChild(texto)
    document.getElementById("toDo").appendChild(li)
  }
  document.getElementById("myInput").value = ""

  var span = document.createElement("SPAN")
  var txt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt)//create text
  li.appendChild(span)// create span

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement
      div.style.display = "none"
    }
  }
}
//with this function we can add any to do that we want by just typing in the input 

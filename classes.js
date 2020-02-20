// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()

  two ()
    
  three ()

  makeVisible ()
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE
function two () {
  var two = document.getElementById('two')
  two.classList.add('green')
}
// CREATE FUNCTION three HERE
function three () {
  var three = document.getElementById('three')
  three.classList.add('red')
}
// CREATE FUNCTION makeVisible HERE
/*Notice that the fourth div in index.html has a class already: invisible. It's also not on the screen in the browser. There's no id attribute, so we can't find it using getElementById. To find things by class instead, we need to use getElementsByClassName (note the 's' in Elements).

getElementsByClassName returns an array, because there could be many DOM elements with the class invisible. The MDN documentation on getElementsByClassName might be useful here.

Write a new function called makeVisible. Because there's only one invisible div, we know it must be element [0] in the array that comes back from getElementsByClassName.

Add the 'visible' class to the div's classList property using the same method as the previous examples.

Call the makeVisible function from start.

Reload the browser. If all has gone well, you should see a fourth div. If not, spend a little time troubleshooting, then reach out for help on slack.*/

function makeVisible () {
  var visible = document.getElementsByClassName('invisible')
  visible[0].classList.add('visible')
}
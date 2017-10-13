// ------------------------------------
// PART 1
// ------------------------------------
// Write a function called toggleLike. It takes no parameters
// toggleLike should find the DOM element with the id 'like'
// Now, write a conditional statement. It should check to see if the classList
// on the element contains the 'active' class
// If it does, remove the 'active' class. If it doesn't add the 'active' class.

const toggleLike = () => {
  const elementId = document.getElementById('like')
  if (elementId.classList.contains('active'){
    elementId.classList.remove('active')
  } else {
    elementId.classList.add('active')
  }
}

const toggle = () => {
  const elementId = document.getElementById('like')
  elementId.classList.toggle('active')
}
// ------------------------------------
// PART 2
// ------------------------------------
// Write a function called toggle that takes no parameters
// It should find a DOM element with the id 'like'
// Without writing a conditional statement,
// use the classList to toggle the 'active class'

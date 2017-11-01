//------------------------------------------------------------------
// PART I: Using a while loop, print the message provided 100 times
//------------------------------------------------------------------




//The function definition
const appendListElement = (message) => {
  //1.  Creates an empty "list item" container
  const li = document.createElement('li')

  //2. Creates a text node in the document that contains the string stored
  // in the "message" parameter (which is a variable).
  const textNode = document.createTextNode(message)

  //3. Attaches the textNode to the list item element;
  li.appendChild(textNode)

  //4. Finds the element that has id="part1" and appends the list item.
  document.querySelector('#part1').appendChild(li)
}


// beginning out while loop syntax:
// Caroline: assign different words whe the loop hits different numbers.
let counter = 1
while (counter <= 100) {
  // Note: make sure that you call is after you define it.
  appendListElement(counter + '. Brandon, youre the best')
  ++counter
}

//------------------------------------------------------------------
// PART II: Using a for loop, write out each person’s avatar, name, and score, based on the people array
//------------------------------------------------------------------
//The data:
var people = [
    { name: 'Jane', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 300 },
    { name: 'Brenda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 10} ,
    { name: 'Wanda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 60 },
    { name: 'Maria', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 80 },
    { name: 'Jasper', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 600 },
    { name: 'Malik', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 40 }
]


// use a for loop to DRY up the printNames function
// it should loop over the people array and append
// the users avatar pic, a greeting, and their score to the HTML
const printNames = (counter) => {
  // Message 1
  const img1 = document.createElement('img')
  img1.src = people[counter].pic
  img1.classList.add('avatar')

  const paragraph1 = document.createElement('p')
  const text1 = document.createTextNode('Welcome, ' + people[counter].name + '! Your score is: ' + people[counter].score)
  paragraph1.appendChild(text1)

  document.querySelector('#part2').appendChild(img1)
  document.querySelector('#part2').appendChild(paragraph1)
}


// Arrays + loops === Best Friends
for (let i = 0; i < people.length; i++) {
  printNames(i)
}

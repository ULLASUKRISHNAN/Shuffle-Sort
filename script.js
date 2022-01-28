let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  cardContainer = document.getElementById('cube-container'), appendCubeElement;

numbersArray.forEach((item) => {
  cardContainer.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
})

// Function used to create the single card.
createCard = (index)=>{
    while (index < numbersArray.length) {
    let SingleCard = document.createElement("li");
    SingleCard.innerHTML = numbersArray[index]
    SingleCard.setAttribute('data-item', numbersArray[index])
    cardContainer.appendChild(SingleCard)
    ++index;
  }
}

// The function used to Shuffle the array 
shuffleArray = () => {
  let index = 0
  numbersArray = numbersArray.sort(() => { return .5 - Math.random() }); // Shuffle logic
  cardContainer.innerHTML = ''
  createCard(index)

}

// The function used to Sort the array 
sortArray = () => {
  let index = 0
  numbersArray = numbersArray.sort((a, b) => { return a - b });  // Sorting logic
  cardContainer.innerHTML = ''
  createCard(index)
}



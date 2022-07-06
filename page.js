const entities = [
  {
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    img: 'images/rostov-on-don,admiral.png',
  },
  {
    city: "Sochi\n Thieves",
    area: "105 m2",
    time: "4 months",
    img: 'images/sochiThieves.png'
  },
  {
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    img: 'images/rostov-on-don,patriotic.png'
  }
]


/*поиск*/

const city = document.querySelector('.projects-completed__characteristic-city')
const area = document.querySelector('.projects-completed__characteristic-area')
const time = document.querySelector('.projects-completed__characteristic-time')
const img = document.querySelector('.projects-image')


const setEntity = (index) => {
  city.innerText = entities[index].city
  area.innerText = entities[index].area
  time.innerText = entities[index].time
  img.style.backgroundImage = `url(${entities[index].img})`
}

const prev = document.querySelector('.arrow-left')
const next = document.querySelector('.arrow-right')

const pointSelector= document.querySelector(".dots-navigation_item")
const citySelector = document.querySelector(".projects-navigation__list__item")


let currentIndex = 0


/*Кнопки переключения слайдов - попытка1


prev.addEventListener('click', () => {
  setEntity(currentIndex - 1);
  currentIndex -= 1;
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
})
next.addEventListener('click', () => {
  setEntity(currentIndex + 1);
  currentIndex += 1;
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
})
*/

/*Кнопки переключения слайдов - попытка2*/

prev.addEventListener('click', () => {
  if(currentIndex <= 0){
  currentIndex = entities.length - 1;
  } else {
  currentIndex -= 1; 
  }
  setEntity(currentIndex);
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
})
next.addEventListener('click', () => {
  if(currentIndex > entities.length-2){
  currentIndex = 0;
  } else {
  currentIndex += 1; 
  }
  setEntity(currentIndex);
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
})

/*pointSelector.forEach((item, index) => {
  item.addEventListener("click", function() {
  currentIndex = index ;
  setEntity(currentIndex)
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
  })
})

citySelector.forEach((item, index) => {
  item.addEventListener("click", function() {
    currentIndex = index ;
    setEntity(currentIndex)
    setFillOpacity(currentIndex);
    setChosenCity(currentIndex);
  })
})



function setFillOpacity(currentIndex) {
  pointSelector.forEach(function(item, index, array) {
    if (currentIndex !== index ) {
      item.classList.remove('.dots-navigation_item_active')
    } else {
      item.classList.add('.dots-navigation_item_active')
    }
  });
}

function setChosenCity(currentIndex) {
  citySelector.forEach(function(item, index, array) {
    if (currentIndex !== index ) {
      item.classList.remove('.city-selector__active')
    } else {
      item.classList.add('.city-selector__active')
    }
  });
}

*/

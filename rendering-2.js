function animalImgUrl(animal) {
    animal = animal.toLowerCase();
    
    const animalUrl = {
        dog: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg',
        cat: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg',
        bird: 'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453__340.jpg',
        other: 'https://cdn.pixabay.com/photo/2014/04/05/11/20/forest-315184__340.jpg'
    };
    return animalUrl[animal] || animalUrl['other'];
}

function renderAnimal(animal, elm) {
    let animalP = document.createElement('p');
    animalP.innerHTML = `Our animal is ${animal}.`;

    let animalImg = document.createElement('img');
    animalImg.src = animalImgUrl(animal);
    animalImg.classList.add('animalImg');

    let animalDiv = document.createElement('div');
    animalDiv.classList.add('animalDiv', 'col');
    animalDiv.append(animalP, animalImg);

    elm.append(animalDiv);
}

let animalElm = document.getElementById('animal-container');

renderAnimal('dog', animalElm);
renderAnimal('cat', animalElm);
renderAnimal('bird', animalElm);
renderAnimal('other', animalElm);

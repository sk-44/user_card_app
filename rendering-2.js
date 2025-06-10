function animalImgUrl(animal) {
    animal = animal.toLowerCase();
    switch (animal) {
        case 'dog':
            return 'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg';
        case 'cat':
            return 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg';
        case 'bird':
            return 'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453__340.jpg';
        default:
            return 'https://cdn.pixabay.com/photo/2014/04/05/11/20/forest-315184__340.jpg';
    }
}

let animalP = document.createElement('p');
animalP.innerHTML = 'Our animal is dog.';

let animalImg = document.createElement('img');
animalImg.src = animalImgUrl('dog');
animalImg.classList.add('animalImg');

let animalDiv = document.createElement('div');
animalDiv.classList.add('animalDiv', 'col');
animalDiv.append(animalP, animalImg);

document.getElementById('animal-container').append(animalDiv);

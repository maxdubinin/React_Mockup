fetch('http://www.omdbapi.com/?apikey=8b47da7b&s=People')
    .then(res => res.json())
.then(json => {
  let arrOfFilms = json.Search;
let moviesBoxRow = document.querySelector('.movies-box__row');


let ul = document.querySelector('.pagination');
let pagination = document.querySelectorAll('.pagination__item');
let output = document.querySelector('.pagination__page');
let countBlocksOnPage = document.querySelector('.pagination__allpages');
let startCountPage;
let endCountPage;


let notesOnPage = 9;

let countOfPages = Math.ceil(arrOfFilms.length/notesOnPage);

let items = [];
// for(let i = 1; i<=countOfPages; i++) {
//   let li = document.createElement('li');
//   li.classList.add('pagination__item');
//   li.innerHTML = i;
//   ul.appendChild(li);
//   items.push(li);
// }

for(let i = 1; i <= countOfPages; i++) {
  pagination[i-1].setAttribute('list',i);
  items.push(pagination[i-1]);
}



showMovieBox(items[0]);

for(let item of items) {
  item.addEventListener('click', function() {
    showMovieBox(this);
  });
}


function showMovieBox(item) {
  // let pageNum = +item.innerHTML;
  let pageNum = +item.getAttribute('list');

  let start = (pageNum - 1) * notesOnPage;
  let end = start + notesOnPage;

  let notes = arrOfFilms.slice(start,end);

  moviesBoxRow.innerHTML = '';

  for(let item of notes) {
    let moviesBoxColumn = document.createElement('div');
    let moviesBoxItem = document.createElement('a');
    let moviesBoxTitle = document.createElement('h3');
    let moviesBoxDesc = document.createElement('div');
    let moviesBoxType = document.createElement('p');
    let moviesBoxYear = document.createElement('p');

    moviesBoxColumn.classList.add('movies-box__column');
    moviesBoxItem.classList.add('movies-box__item');
    moviesBoxTitle.classList.add('movies-box__title');
    moviesBoxDesc.classList.add('movies-box__desc');
    moviesBoxType.classList.add('movies-box__type');
    moviesBoxYear.classList.add('movies-box__year');

    moviesBoxRow.appendChild(moviesBoxColumn);
    moviesBoxColumn.appendChild(moviesBoxItem);
    moviesBoxItem.appendChild(moviesBoxTitle);
    moviesBoxItem.appendChild(moviesBoxDesc);
    moviesBoxDesc.appendChild(moviesBoxType);
    moviesBoxDesc.appendChild(moviesBoxYear);

    moviesBoxTitle.innerText = item.Title;
    moviesBoxItem.style.background = `url('${item.Poster}') 0 0/cover no-repeat`;
    moviesBoxType.innerText = item.Type;
    moviesBoxYear.innerText = item.Year;
  }

  output.innerText = `Items per page: ${moviesBoxRow.children.length}`;

  if(pageNum == 1) {
    startCountPage = 1;
  }
  endCountPage = startCountPage + (notesOnPage - 1);

  if(pageNum == 2) {
    startCountPage += endCountPage;
    if(startCountPage >= endCountPage) {
      endCountPage = '';
    }
    endCountPage+=endCountPage;
  }

  if(endCountPage == '') {
    countBlocksOnPage.innerText = `${startCountPage} of ${arrOfFilms.length}`;
  } else {
    countBlocksOnPage.innerText = `${startCountPage} - ${endCountPage} of ${arrOfFilms.length}`;
  }
}
})

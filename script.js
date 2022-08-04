const addBtn = document.getElementById('add');
addBtn.addEventListener('click', addUser);


function addUser() {
  axios
    .get('https://randomuser.me/api')
    .then(function (response) {
      
        createUser(response.data.results[0])
      
    })
    .catch(function (error) {
      
      console.log(error);
    });
}
// aggiunge alla gallery una img con la src passata come parametro
function createUser(data) {
  const image = document.createElement('img');
  image.src = data.picture.large;
  image.className = 'img-fluid';
  const div = document.createElement('div');
  div.classList.add("card","col-2","mx-3","shadow-lg")
  const title = document.createElement('h3');
  title.innerHTML = data.name.title + " " + data.name.first + " " + data.name.last;
  title.className = "card-title"
  const cardBody = document.createElement('div');
  cardBody.className = "card-body"
  div.appendChild(image);
  div.appendChild(cardBody);
  cardBody.appendChild(title);
  
  document.getElementById('gallery').appendChild(div);
}
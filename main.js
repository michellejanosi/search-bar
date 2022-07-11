const searchInput = document.getElementById('searchInput');
let allNamesDOMCollection = document.getElementsByClassName('name');

searchInput.addEventListener('keyup', function (e) {
  e.preventDefault;
  let searchQuery = e.target.value.toLowerCase();

  for (let i = 0; i < allNamesDOMCollection.length; i++) {
    const currentName = allNamesDOMCollection[i].textContent.toLowerCase();

    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[i].style.display = 'block';
    } else {
      allNamesDOMCollection[i].style.display = 'none';
    }
  }
});
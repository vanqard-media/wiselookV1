// Header compartido
const headerFile = 'header.html';

fetch(headerFile)
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => console.error('Error al cargar el header:', error));

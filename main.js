const frasesAcumuladas = [];

document.getElementById('obtenerFrase').addEventListener('click', () => {
  if (frasesAcumuladas.length >= 10) {
    
    let html = '';
    frasesAcumuladas.forEach(f => {
      html += `<div>${f}</div>`;
    });
    html += `<div style="color:red;">Solo se pueden generar 10 frases.</div>`;
    document.getElementById('frase').innerHTML = html;
    return;
  }

  fetch('https://thequoteshub.com/api/random-quote')
    .then(response => response.json())
    .then(data => {
      const quote = data.quote || data.text || 'Frase no disponible';
      const author = data.author || 'Autor desconocido';
      const fraseCompleta = `"${quote}" - ${author}`;
      frasesAcumuladas.push(fraseCompleta);

      let html = '';
      frasesAcumuladas.forEach(f => {
        html += `<div>${f}</div>`;
      });
      document.getElementById('frase').innerHTML = html;

      console.log(frasesAcumuladas);
    })
    .catch(error => {
      document.getElementById('frase').innerText = 'Error al obtener la frase.';
      console.error('Error al obtener la frase:', error);
    });
});
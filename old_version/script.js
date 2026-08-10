const shareButtons = document.querySelectorAll(".share-icon");

shareButtons.forEach(button => {
  button.addEventListener("click", function (e) {
    // Evitar que el clic en el icono de compartir abra el enlace
    e.preventDefault();
    e.stopPropagation();

    // Obtener el enlace del contenedor padre (la tarjeta 'a')
    const linkElement = e.target.closest("a");
    if (linkElement) {
      const getLink = linkElement.getAttribute("href");
      navigator.clipboard.writeText(getLink).then(() => {
        alert("Enlace copiado al portapapeles / Link copied to clipboard");
      }).catch(err => {
        console.error('Error al copiar: ', err);
      });
    }
  });
});

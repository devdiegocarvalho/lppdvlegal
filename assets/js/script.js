// Iframe YouTube
const videoYbLazy = document.querySelectorAll("#videoYbLazy");

function snippetYtLazyPlay(event) {
  event.currentTarget.removeEventListener("click", snippetYtLazyPlay);

  event.currentTarget.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${event.currentTarget.dataset.id}?autoplay=1"
      title="Demonstração SwapX1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
  ></iframe>
`;
}

videoYbLazy.forEach((video) => {
  video.addEventListener("click", snippetYtLazyPlay);
});

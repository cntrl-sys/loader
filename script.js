const API_URL = "https://loader-3vpg.onrender.com";

function loadPosts() {
  const username = document.getElementById("username").value;
  const gallery = document.getElementById("gallery");

  gallery.innerHTML = "Lade...";

  fetch(`${API_URL}/download/${username}`)
    .then(res => res.json())
    .then(data => {
      gallery.innerHTML = "";

      if (data.error) {
        gallery.innerHTML = "Fehler: " + data.error;
        return;
      }

      data.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        gallery.appendChild(img);
      });
    })
    .catch(() => {
      gallery.innerHTML = "Server nicht erreichbar";
    });
}
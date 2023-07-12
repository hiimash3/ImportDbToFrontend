const baseUrl = "http://localhost:8081";

function loadPage() {
  const adresa = `${baseUrl}/api/film`;
  const zahtjev = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const promise = fetch(adresa, zahtjev);
  promise
    .then((response) => response.json())
    .catch((error) => alert(error))
    .then(handlePage)
    .catch((error) => alert(error));
}

function handlePage(pageData) {
  addFilmsToTableBody(pageData.items);
}

function addFilmsToTableBody(films) {
  const mainDiv = document.getElementById("mainDiv");
  mainDiv.innerHTML = "";
  for (let film of films) {
    const productDiv = document.createElement("div");
    productDiv.style = "width: 200px; height: 400px; display: flex; flex-direction: column; border: 1px solid black; padding: 10px;";
    const description = document.createElement("div");
    description.style = "width: 100%; height: 400px; margin-t";
    description.innerHTML = `
              <p>${film.description}</p>
          `;
    const img = document.createElement("img");
    img.src = "img.jpg";
    img.style = "width: 100%; height: 200px";
    productDiv.appendChild(img);
    productDiv.appendChild(description);
    mainDiv.appendChild(productDiv);
  }
}


loadPage();

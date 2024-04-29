function fetchData(divId, requestId, type) {
  if (type === "products") {
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open(
      "GET",
      `https://api.allorigins.win/raw?url=https://dev-tester-new-watchify.pantheonsite.io/api/api.php?id=${requestId}`
    );
    xhr.responseType = "json";

    xhr.onload = function () {
      if (xhr.status === 200) {
        document.getElementById(divId).innerHTML = "";
        var aList = ["movie.html", "serie.html"];
        var aHref = aList[Math.floor(Math.random() * aList.length)];
        var jsonData = xhr.response;
        for (var i = 0; i < jsonData.length; i++) {
          var movieBlock = document.createElement("div");
          movieBlock.classList.add("MovieBlock");
          var anchor = document.createElement("a");
          anchor.href = aHref;
          var posterDiv = document.createElement("div");
          posterDiv.classList.add("Poster");
          var img = document.createElement("img");
          imgSrc = jsonData[i].item.image.posterImage;
          img.src = imgSrc
            .replace("{height}", "550")
            .replace("{width}", "366")
            .replace("{croppingPoint}", "10");
          img.width = 450;
          img.height = 550;
          img.alt = jsonData[i].item.title;
          posterDiv.appendChild(img);
          anchor.appendChild(posterDiv);
          movieBlock.appendChild(anchor);
          document.getElementById(divId).appendChild(movieBlock);
        }
      } else {
        console.error("Failed to fetch data. Status code: " + xhr.status);
      }
    };

    xhr.onerror = function () {
      console.error("Network error occurred");
    };

    xhr.send();
  } else if (type === "Continue-Watching") {
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open(
      "GET",
      `https://api.allorigins.win/raw?url=https://dev-tester-new-watchify.pantheonsite.io/api/api.php?id=${requestId}`
    );
    xhr.responseType = "json";

    xhr.onload = function () {
      if (xhr.status === 200) {
        var jsonData = xhr.response;
        document.getElementById(divId).innerHTML = "";
        for (var i = 0; i < jsonData.length; i++) {
          var movieBlock = document.createElement("div");
          movieBlock.classList.add("MovieBlock", "cw-block");
          var anchor = document.createElement("a");
          anchor.href = "tvshow.html";
          var posterDiv = document.createElement("div");
          posterDiv.classList.add("Poster", "cw-Poster");
          var img = document.createElement("img");
          imgSrc = jsonData[i].item.image.thumbnailImage;
          img.src = imgSrc
            .replace("{height}", "2160")
            .replace("{width}", "3840")
            .replace("{croppingPoint}", "10");
          img.width = 450;
          img.height = 550;
          img.alt = jsonData[i].item.title;
          posterDiv.appendChild(img);
          var hr = document.createElement("hr");
          var doneList = ["10%", "25%", "30%", "35%", "50%", "75%", "90%"];
          var done = doneList[Math.floor(Math.random() * doneList.length)];
          hr.classList.add("line");
          hr.style.width = done;
          anchor.appendChild(posterDiv);
          anchor.appendChild(hr);
          movieBlock.appendChild(anchor);
          document.getElementById(divId).appendChild(movieBlock);
        }
      } else {
        console.error("Failed to fetch data. Status code: " + xhr.status);
      }
    };

    xhr.onerror = function () {
      console.error("Network error occurred");
    };

    xhr.send();
  }
}

fetchData(
  "movies-1",
  "Main/EGYPT/home/EGY-Home-Movies-Comedy-Egyptian",
  "products"
);
fetchData(
  "movies-2",
  "Main/EGYPT/home/EGY-Home-Resident-Evil-Bundle-SVOD",
  "products"
);
fetchData(
  "movies-3",
  "Main/EGYPT/home/EGY-Home-Escape-the-Nightmare",
  "products"
);
fetchData(
  "Continue-Watching",
  "Main/EGYPT/home/EGY-Home-Coming-Soon",
  "Continue-Watching"
);
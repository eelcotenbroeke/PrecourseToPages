const GITHUB_URL = "https://api.github.com/users/eelcotenbroeke";

async function fetchDataSet(url) {
  let response = await fetch(url);
  if (response.status != 200) {
    console.log("error");
  }
  let dataSet = await response.json();
  createProfile(dataSet);
}

function createProfile(data) {
  const profileImage = document.getElementById("profile-image");
  const name = document.getElementById("my-name");
  profileImage.src = data.avatar_url;
  name.innerHTML = data.name;
}

fetchDataSet(GITHUB_URL);

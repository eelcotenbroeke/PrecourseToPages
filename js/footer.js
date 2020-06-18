footerDataDisplay = (languagesList, elementToAppend) => {
  const footerDiv = document.createElement("div");
  footerDiv.className = "footer";
  footerDiv.innerText = `This page was built using:`;
  for (let i = 0; i < languagesList.length; i++) {
    if (i === languagesList.length - 1) {
      footerDiv.innerText += ` ${languagesList[i]}.`;
    } else {
      footerDiv.innerText += ` ${languagesList[i]},`;
    }
  }
  document.getElementById(`${elementToAppend}`).appendChild(footerDiv);
};

footerDataDisplay(["HTML", "CSS", "Javascript"], "footer");

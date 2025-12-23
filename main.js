// Enable/disable form submit button based on TOS agreement checkbox value 
let formSubmitBtn = document.getElementById("submit");

document.querySelector("input[id=tosAgreement]").addEventListener("change", function () {
  if (document.querySelector("input[id=tosAgreement]").checked) {
    formSubmitBtn.disabled = false;
  } else {
    formSubmitBtn.disabled = true;
  }
});

function hideElement(elementId) {
    let element = document.getElementById(elementId)
    element.style.display = 'none';
}

function showElement(elementId) {
    let element = document.getElementById(elementId)
    element.style.display = '';
}

/* Displays chosen file name */
function displayFileName(input) {
  var fileName = input.files[0].name;
  var span = document.getElementById("cvText");
  span.textContent = fileName;
}

/* Displays selected image */
function changeImage(image) {
    const className = "selectedImage";
    const setInfoImageHigh = document.getElementById('setInfoImageHigh');
    setInfoImageHigh.src = image.src;
    var children = image.parentElement.children;

    for (var i = 0; i < children.length; i++) {
      children[i].classList.remove(className);
    }

    image.classList.add(className);
}
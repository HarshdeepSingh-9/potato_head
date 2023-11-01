function switch_toggle() {
    const $toggleSwitch = $("#toggleSwitch");
    const $toggleStatus = $("#toggleStatus");

    // Update the status display based on the toggle switch state
    $toggleSwitch.on("change", function () {
        if (this.checked) {
            $("body").css("background-color", "#333");
            $(".slider").css("background-color", "#0b406a");
            $('h1').css("color", "white");
            $('.dropable-items').css("border-color", "white");
        } else {
            $("body").css("background-color", "#fff");
            $(".slider").css("background-color", "#d77b1f");
            $('h1').css("color", "black");
            $('.dropable-items').css("border-color", "black");
        }
    });
}

const dragObj = document.querySelectorAll('.dropable-items');
const dropObj = document.querySelector('.potato-content');

function dragstart(event) {
    event.dataTransfer.setData("text/plain", event.target.getElementById);
}
function drop(event) {
    const dragitem = event.dataTransfer.getData("text");

}
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    var elementId = event.target.id;
    event.dataTransfer.setData("text", elementId);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    var tagz = document.getElementById(data);
    var newImage = document.createElement("img");
    newImage.src = tagz.src;
    if (data === 'dragImage-e1' || data === 'dragImage-e2') {
        var myElement = document.getElementById("image-ct_eyes1");
        myElement.innerHTML = "";
        var imageContainer = document.getElementById("image-ct_eyes1");
    }
    else if (data === 'dragImage-h1' || data === 'dragImage-h2') {
        var myElement = document.getElementById("image-ct_hat");
        myElement.innerHTML = "";
        var imageContainer = document.getElementById("image-ct_hat");
    }
    else if (data === 'dragImage-n1' || data === 'dragImage-n2' || data === 'dragImage-n3') {
        var myElement = document.getElementById("image-ct_nose");
        myElement.innerHTML = "";
        var imageContainer = document.getElementById("image-ct_nose");
    }
    else if (data === 'dragImage-ear1') {
        var myElement = document.getElementById("image-ct_ears1");
        myElement.innerHTML = "";
        var imageContainer = document.getElementById("image-ct_ears1");
    }
    else if (data === 'dragImage-ear2') {
        var myElement = document.getElementById("image-ct_ears2");
        myElement.innerHTML = "";
        var imageContainer = document.getElementById("image-ct_ears2");
    }
    else if (data === 'dragImage-lip1' || data === 'dragImage-lip2' || data === 'dragImage-lip3') {
        var myElement = document.getElementById("image-ct_lips");
        myElement.innerHTML = "";
        var imageContainer = document.getElementById("image-ct_lips");
    }
    newImage.style.width = "180px";
    imageContainer.append(newImage);
}

function saveImg() {
    // Add a delay to allow elements to load
    setTimeout(() => {
        var container = document.getElementById('content');
        html2canvas(container).then(canvas => {
            // As Base64 string
            var dataURL = canvas.toDataURL();

            // Create a link element and trigger the download
            var a = document.createElement('a');
            a.href = dataURL;
            a.download = 'captured_image.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }, 1000); // 1000 milliseconds (1 second) delay
}
function resetImage() {
    location.reload(); // Reload the page
  }

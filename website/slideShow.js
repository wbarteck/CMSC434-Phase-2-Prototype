
function addPictures() {
    let pictureArray = document.getElementById('pictures').files;

    let pictureList = document.getElementById('pictureList');

    for(let i = 0; i <pictureArray.length; i++){
        let pic = pictureArray[i];
        let picURL = URL.createObjectURL(pic);

        pictureList.innerHTML += " <div class=\"item\">\n" +
            "                        <!-- New slide -->\n" +
            "                        <img src=\"" + picURL + "\" alt=\"sample\"\n" +
            "                           height='300' width='550'  style=\"display: block; margin: auto;\">\n" +
            "                        <div class=\"carousel-caption\"><h4>" + "</h4></div>\n" +
            "\n" +
            "                    </div>";

    }
    $('.carousel').carousel();
}

function addPicWithCaption() {
    let pictureArray = document.getElementById('captionPicture').files;
    let caption = document.getElementById('captionContent').value;

    let pictureList = document.getElementById('pictureList');

    for(let i = 0; i <pictureArray.length; i++){
        let pic = pictureArray[i];
        let picURL = URL.createObjectURL(pic);

        pictureList.innerHTML += " <div class=\"item\">\n" +
            "                        <!-- New slide -->\n" +
            "                        <img src=\"" + picURL + "\" alt=\"sample\"\n" +
            "                           height='300' width='550'  style=\"display: block; margin: auto;\">\n" +
            "                        <div class=\"carousel-caption\"><h4>" + caption + "</h4></div>\n" +
            "\n" +
            "                    </div>";

    }
    $('.carousel').carousel();
}

function clearAddPicModal() {
    document.getElementById("modalBodyAddPics").innerHTML = "";
    document.getElementById("modalBodyAddPics").innerHTML ="<div class=\"row\">\n" +
        "                    <div class=\"form-group col-sm-2 col-lg-1\">\n" +
        "                        <label>Captions? </label>\n" +
        "                        <input id=\"captions\" name=\"captions\" type=\"checkbox\" class=\"form-control\"\n" +
        "                               onclick=\"\n" +
        "\n" +
        "                        let checkBox = document.getElementById('captions');\n" +
        "                        var noCapDiv = document.getElementById('noCaptionsDiv');\n" +
        "                        var capDiv = document.getElementById('captionsDiv');\n" +
        "                        if(checkBox.checked){\n" +
        "                            noCapDiv.style.display = 'none';\n" +
        "                            capDiv.style.display = 'block';\n" +
        "                        }\n" +
        "                        else{\n" +
        "                            noCapDiv.style.display = 'block';\n" +
        "                            capDiv.style.display = 'none';\n" +
        "                        }\n" +
        "                        \">\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "\n" +
        "                <div class=\"row\" id=\"noCaptionsDiv\">\n" +
        "                    <div class=\"form-group col-sm-7 col-lg-7 \">\n" +
        "\n" +
        "                        <label for=\"pictures\">Pictures: </label>\n" +
        "                        <label class=\"btn btn-default btn-file\">\n" +
        "                            <input id=\"pictures\" name=\"pictures\" type=\"file\" multiple\n" +
        "                                   accept=\"image/x-png,image/gif,image/jpeg\">\n" +
        "                        </label>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "                <div class=\"row\" id=\"captionsDiv\" hidden>\n" +
        "\n" +
        "                    <div class=\"form-group col-sm-6 col-lg-6 \">\n" +
        "\n" +
        "                        <label for=\"captionPicture\">Picture: </label>\n" +
        "                        <label class=\"btn btn-default btn-file\">\n" +
        "                            <input id=\"captionPicture\" name=\"captionPicture\" type=\"file\" multiple\n" +
        "                                   accept=\"image/x-png,image/gif,image/jpeg\">\n" +
        "                        </label>\n" +
        "                    </div>\n" +
        "\n" +
        "\n" +
        "                    <div class=\"form-group col-sm-6 col-lg-6\">\n" +
        "                        <label for=\"captionContent\">Caption: </label>\n" +
        "                        <input class=\"form-control\" type=\"text\" id=\"captionContent\">\n" +
        "                        </label>\n" +
        "                    </div>\n" +
        "\n" +
        "                </div>";
}

function clearDeleteModal() {

}
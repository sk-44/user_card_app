function motivationalSpeechWallpaper(text, colorCode, imageUrl, verticalAlign, horizontalAlign, domObj) {
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("container", "d-flex", "justify-content-center");

    let bgDiv = document.createElement("div");
    bgDiv.classList.add("d-flex", "vh-75", "p-md-5", "p-3", "my-5", "col-md-8", "col-12", "imgBackground");
    containerDiv.append(bgDiv);

    bgDiv.style.backgroundImage = `url('${imageUrl}')`;
    switch (verticalAlign) {
        case "top":
            bgDiv.classList.add("align-items-start");
            break;
        case "center":
            bgDiv.classList.add("align-items-center");
            break;
        case "bottom":
            bgDiv.classList.add("align-items-end");
            break;
        default:
            bgDiv.classList.add("align-items-center");
            break;
    }
    switch (horizontalAlign) {
        case "left":
            bgDiv.classList.add("justify-content-start");
            break;
        case "center":
            bgDiv.classList.add("justify-content-center");
            break;
        case "right":
            bgDiv.classList.add("justify-content-end");
            break;
        default:
            bgDiv.classList.add("justify-content-center");
            break;
    }

    let textDiv = document.createElement("div");
    textDiv.classList.add("col-8");
    bgDiv.append(textDiv);

    let textHeading = document.createElement("h3");
    textHeading.classList.add("paperText");
    textHeading.innerHTML = text;
    textHeading.style.color = `#${colorCode}`;
    textDiv.append(textHeading);

    domObj.append(containerDiv);
}


let domObj = document.getElementById("target");

motivationalSpeechWallpaper(
    "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint",
    "1B4F72",
    "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg",
    "top",
    "right",
    domObj
);
motivationalSpeechWallpaper(
    "The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg",
    "007bff","https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg",
    "center",
    "left",
    domObj
);
motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman",
    "ecf0f1","https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
    "center",
    "center",
    domObj
);
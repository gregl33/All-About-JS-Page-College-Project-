
// this is an extrenal javascript file that is used in FAQ page to open and close the anwser when the
// user clicks on the link and clicks on the close lable to clsoe it


function show(num) {
    var div = document.getElementById("answer" + num);
    div.style.display = "inline-block";
}

function hide(num) {
    var div = document.getElementById("answer" + num);
    div.style.display = "none";
}



// this is a external javascript file that contains the function for the quiz to mark the quiz

function scoreQuiz() {
    var score1 = 0

    var Q1c = document.getElementById("Q1c");
    var Q1Wrong = document.getElementById("Q1Wrong");
    var Q1Correct = document.getElementById("Q1Correct")
    if (Q1c.checked) {
        score1++;
        Q1Correct.style.display = "inline";
    } else {
        Q1Wrong.style.display = "inline";
    }

    var Q2b = document.getElementById("Q2b");
    var Q2Wrong = document.getElementById("Q2Wrong");
    var Q2Correct = document.getElementById("Q2Correct")
    if (Q2b.checked) {
        score1++;
        Q2Correct.style.display = "inline";
    } else {
        Q2Wrong.style.display = "inline";
    }

    var Q3d = document.getElementById("Q3d");
    var Q3Wrong = document.getElementById("Q3Wrong");
    var Q3Correct = document.getElementById("Q3Correct")
    if (Q3d.checked) {
        score1++;
        Q3Correct.style.display = "inline";
    } else {
        Q3Wrong.style.display = "inline";
    }

    var Q4c = document.getElementById("Q4c");
    var Q4Wrong = document.getElementById("Q4Wrong");
    var Q4Correct = document.getElementById("Q4Correct")
    if (Q4c.checked) {
        score1++;
        Q4Correct.style.display = "inline";
    } else {
        Q4Wrong.style.display = "inline";
    }

    var Q5a = document.getElementById("Q5a");
    var Q5Wrong = document.getElementById("Q5Wrong");
    var Q5Correct = document.getElementById("Q5Correct")
    if (Q5a.checked) {
        score1++;
        Q5Correct.style.display = "inline";
    } else {
        Q5Wrong.style.display = "inline";
    }

    var Q6c = document.getElementById("Q6c");
    var Q6Wrong = document.getElementById("Q6Wrong");
    var Q6Correct = document.getElementById("Q6Correct")
    if (Q6c.checked) {
        score1++;
        Q6Correct.style.display = "inline";
    } else {
        Q6Wrong.style.display = "inline";
    }

    var Q7a = document.getElementById("Q7a");
    var Q7Wrong = document.getElementById("Q7Wrong");
    var Q7Correct = document.getElementById("Q7Correct")
    if (Q7a.checked) {
        score1++;
        Q7Correct.style.display = "inline";
    } else {
        Q7Wrong.style.display = "inline";
    }

    var Q8b = document.getElementById("Q8b");
    var Q8Wrong = document.getElementById("Q8Wrong");
    var Q8Correct = document.getElementById("Q8Correct")
    if (Q8b.checked) {
        score1++;
        Q8Correct.style.display = "inline";
    } else {
        Q8Wrong.style.display = "inline";
    }

    var Q9b = document.getElementById("Q9b");
    var Q9Wrong = document.getElementById("Q9Wrong");
    var Q9Correct = document.getElementById("Q9Correct")
    if (Q9b.checked) {
        score1++;
        Q9Correct.style.display = "inline";
    } else {
        Q9Wrong.style.display = "inline";
    }




    var Q10 = document.getElementById("Q10");
    var dropzone = document.getElementById("dropzone");
    var children = dropzone.childNodes;
    var Q10Wrong = document.getElementById("Q10Wrong");
    var Q10Correct = document.getElementById("Q10Correct")
    if (children.length == 1 && children[0].id == "Q10Var") {
        score1++;
        Q10Correct.style.display = "inline";
    } else {
        Q10Wrong.style.display = "inline";
    }

    var scoreDis = document.getElementById("scoreDis")


    scoreDis.innerHTML = "Your score is " + score1 + "/10";
}

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
        
    
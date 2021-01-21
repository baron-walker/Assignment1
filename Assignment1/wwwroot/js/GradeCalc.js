var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    grade = (((document.getElementById("ass").value * .5) +
        (document.getElementById("group").value * .1) +
        (document.getElementById("quiz").value * .1) +
        (document.getElementById("exam").value * .2) +
        (document.getElementById("int").value * .1)).toFixed(3) * 100);

    letter = "A";
    if (grade >= 94) {
        letter = "A";
    } else if (grade >= 90) {
        letter = "A-";
    } else if (grade >= 87) {
        letter = "B+";
    } else if (grade >= 84) {
        letter = "B";
    } else if (grade >= 80) {
        letter = "B-";
    } else if (grade >= 77) {
        letter = "C+";
    } else if (grade >= 74) {
        letter = "C";
    } else if (grade >= 70) {
        letter = "C-";
    } else if (grade >= 67) {
        letter = "D+";
    } else if (grade >= 64) {
        letter = "D";
    } else if (grade >= 60) {
        letter = "D-";
    } else {
        letter = "E";
    }

    alert("Your total grade would be: " + grade + "%" + "\nYour letter grade would be a(n): " + letter);
});
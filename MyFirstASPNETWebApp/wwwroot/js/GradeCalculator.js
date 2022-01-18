$("#calculate").click(function () {
    let sGrade
    let fFinalGrade
    fFinalGrade = (parseInt($("#assignment").val()) * .55 + parseInt($("#group").val()) * .05 + parseInt($("#quiz").val()) * .1 + parseInt($("#exam").val()) * .2 + parseInt($("#intex").val()) * .1)
    if (fFinalGrade >= 94) {
        sGrade = 'A'
    }
    else if (fFinalGrade >= 90) {
        sGrade = 'A-'
    }
    else if (fFinalGrade >= 87) {
        sGrade = 'B+'
    }
    else if (fFinalGrade >= 84) {
        sGrade = 'B'
    }
    else if (fFinalGrade >= 80) {
        sGrade = 'B-'
    }
    else if (fFinalGrade >= 77) {
        sGrade = 'C+'
    }
    else if (fFinalGrade >= 74) {
        sGrade = 'C'
    }
    else if (fFinalGrade >= 70) {
        sGrade = 'C-'
    }
    else if (fFinalGrade >= 67) {
        sGrade = 'D+'
    }
    else if (fFinalGrade >= 64) {
        sGrade = 'D'
    }
    else if (fFinalGrade >= 60) {
        sGrade = 'D-'
    }
    else {
        sGrade = 'E'
    }
    alert('Final Grade: ' + fFinalGrade + '\n' + 'Which is a(n) ' + sGrade)
})


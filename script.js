let students = [];

fetch("students.json")
.then(response => response.json())
.then(data => {
    students = data;
});


function showResult() {
    let seatNumber = document.getElementById("seat").value;

    let student = students.find(function(s) {
        return s.seat === seatNumber;
    });

    if (student) {

        document.getElementById("result").innerHTML =
        `
        الاسم: ${student.name}<br>
        المدرسة: ${student.school}<br>
        المجموع: ${student.total} من 500<br>
        النسبة المئوية: ${student.percent}%<br>
        `;
    }
    else {
        document.getElementById("result").innerHTML =
        "رقم الجلوس غير موجود";
    }
}
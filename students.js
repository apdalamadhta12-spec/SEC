const students = [];

const names = [
    "أحمد محمد",
    "محمد علي",
    "علي حسن",
    "يوسف خالد",
    "عمر محمود",
    "محمود أحمد",
    "خالد سمير"
];

for (let i = 1; i <= 1000; i++) {

    let student = {
        seat: String(100000 + i),
        name: names[i % names.length],
        school: "مدرسة الثانوية العامة",
        arabic: Math.floor(Math.random() * 31) + 70,
        english: Math.floor(Math.random() * 31) + 70,
        math: Math.floor(Math.random() * 31) + 70,
        physics: Math.floor(Math.random() * 31) + 70,
        chemistry: Math.floor(Math.random() * 31) + 70
    };

    students.push(student);
}
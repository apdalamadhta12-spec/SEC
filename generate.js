const names = [
  "أحمد محمد",
  "محمد علي",
  "يوسف خالد",
  "عمر حسن",
  "محمود إبراهيم",
  "عبدالله أحمد",
  "خالد محمود",
  "علي حسن",
  "مصطفى أحمد",
  "عمر محمد"
];

const schools = [
  "مدرسة النور الثانوية",
  "مدرسة المستقبل الثانوية",
  "مدرسة السلام الثانوية",
  "مدرسة الأمل الثانوية",
  "مدرسة النجاح الثانوية"
];

let students = [];

for (let i = 1; i <= 20000; i++) {

  let total = Math.floor(Math.random() * 251) + 250;

  students.push({
    seat: "2026" + String(i).padStart(5, "0"),
    name: names[Math.floor(Math.random() * names.length)],
    school: schools[Math.floor(Math.random() * schools.length)],
    total: total,
    percent: ((total / 500) * 100).toFixed(1)
  });

}

const fs = require("fs");

fs.writeFileSync(
  "students.json",
  JSON.stringify(students, null, 2),
  "utf8"
);

console.log("تم إنشاء ملف الطلاب:", students.length);
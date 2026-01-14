function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

console.log("เว็บไซด์นี้สร้างขึ้นเพื่อส่งอาจารย์ในวิชา Web Application Development เท่านั้น");
console.log("ขออนญาติใช้ภาพจาก Google เพื่อการศึกษา ไม่ได้มีเจตนาในเชิงพาณิชย์ใดๆ");
console.log("จัดทำโดย")
console.log("นาย นันทกร  พุฒพรหม")
console.log("นาย สินธร  ยืนยิ่ง")
console.log("นาย ณัฐวัฒน์  คนขำ")
console.log("นาย อุดมศักดิ์  การะภักดี")

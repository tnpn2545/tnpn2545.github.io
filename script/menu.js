function toggleMenu() {
    var menuContent = document.getElementById("menuContent");
    if (menuContent.style.display === "none") {
        menuContent.style.display = "block";
        // เพิ่ม event listener เมื่อคลิกที่ส่วนอื่นของหน้าเว็บ
        document.addEventListener('click', closeMenu);
    } else {
        menuContent.style.display = "none";
    }
}

// ฟังก์ชั่นเมื่อคลิกที่ส่วนอื่นของหน้าเว็บ
function closeMenu(event) {
    var menuContent = document.getElementById("menuContent");
    var menuIcon = document.querySelector('.menu-icon');

    // ตรวจสอบว่าคลิกไม่ได้อยู่ภายในเมนูหรือไอคอนเมนู
    if (!menuContent.contains(event.target) && !menuIcon.contains(event.target)) {
        menuContent.style.display = "none";
        // ลบ event listener เมื่อปิดเมนู
        document.removeEventListener('click', closeMenu);
    }
}

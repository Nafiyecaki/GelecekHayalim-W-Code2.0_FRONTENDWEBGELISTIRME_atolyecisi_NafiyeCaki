
//!ok butonu
// Sayfa scroll edildiğinde çalışır
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollTopBtn.classList.add("show"); // Butonu göster
  } else {
    scrollTopBtn.classList.remove("show"); // Butonu gizle
  }
};

// Butona tıklandığında
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Yumuşak kaydırma
  });
});

//!menü btn
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector(".navbar");

// Menü butonuna tıklayınca navbar aç/kapa
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Tıklamanın document listener'a yayılmasını engelle
  navbar.classList.toggle('active');
});

// Sayfaya herhangi bir yere tıklanınca
document.addEventListener('click', (e) => {
  // Eğer tıklama menü butonu veya navbar içinde değilse menüyü kapat
  if (
    !e.composedPath().includes(menuBtn) &&
    !e.composedPath().includes(navbar)
  ) {
    navbar.classList.remove('active');
  }
});






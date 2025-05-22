// 轮播图代码
let slideIndex = 0;
const totalGroups = document.querySelectorAll('.carousel-group').length;

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const carousel = document.querySelector('.carousel');
  
  // 循环轮播，当超出范围时返回第一组或最后一组
  if (n >= totalGroups) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = totalGroups - 1;
  }
  
  const offset = -slideIndex * 100; // 每次移动100%
  carousel.style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-button').forEach(button => {
      button.addEventListener('click', function() {
          // 移除所有其他按钮的 "active" 类
          document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));

          // 为当前点击的按钮添加 "active" 类
          this.classList.add('active');
      });
  });
});


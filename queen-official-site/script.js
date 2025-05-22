

document.addEventListener('DOMContentLoaded', function() {
  // 在页面加载时检查 URL，并为对应的按钮添加 active 类
  const currentPath = window.location.pathname;
  
  document.querySelectorAll('.nav-button').forEach(button => {
      // 获取按钮的 href 属性值
      const buttonPath = new URL(button.href).pathname;

      // 如果按钮的链接和当前 URL 相匹配，添加 active 类
      if (buttonPath === currentPath) {
          button.classList.add('active');
      }

      // 添加点击事件处理
      button.addEventListener('click', function(event) {
          // 移除所有其他按钮的 "active" 类
          document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));

          // 为当前点击的按钮添加 "active" 类
          this.classList.add('active');
      });
  });
});




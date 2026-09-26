// 深浅色主题：初始化（脚本位于 body 末尾，立即执行以避免主题闪烁）
const THEME_KEY = 'theme';
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', theme === 'dark' ? '切换到浅色主题' : '切换到深色主题');
  }
}
applyTheme(localStorage.getItem(THEME_KEY) || 'light');

document.addEventListener('DOMContentLoaded', () => {
  // 深浅色主题切换：更新主题并写入 localStorage 记住选择
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  // 移动端菜单开合
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');
  menuToggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
  });

  // 点击导航后自动收起移动端菜单
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // 滚动淡入
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // 导航高亮：滚动到对应区域时高亮左侧导航
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const sectionMap = new Map();
  links.forEach((link) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) sectionMap.set(target, link);
  });
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove('is-active'));
        const active = sectionMap.get(entry.target);
        if (active) active.classList.add('is-active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sectionMap.forEach((_, section) => spy.observe(section));

  // 页脚年份
  document.getElementById('year').textContent = new Date().getFullYear();
});

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

if(btn) {
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
  });
};


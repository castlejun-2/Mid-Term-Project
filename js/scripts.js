document.getElementById('project').onclick = function () {
  document.getElementsByClassName('container px-4 px-lg-5 main')[0].style.visibility = 'hidden';
  document.getElementById('home').classList.remove('active');
  document.getElementById('project').classList.add('active');
};

document.getElementById('home').onclick = function () {
  document.getElementsByClassName('container px-4 px-lg-5 main')[0].style.visibility = 'visible';
  document.getElementById('project').classList.remove('active');
  document.getElementById('home').classList.add('active');
};

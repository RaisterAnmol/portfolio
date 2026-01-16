document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 400,
    once: true,
    offset: 120,
    easing: 'ease-in-out',
  });

  var path = window.location.href;
  $('.inner_menu a').each(function () {
    if ($(this).attr('href') === path) {
      $(this).closest('li').addClass('active');
    }
  });
});

document.querySelectorAll('[data-level-id]').forEach(attr => {
  attr.addEventListener('click', function (e) {
    let levelId = e.currentTarget.dataset.levelId;
    let target = document.querySelector(levelId);
    if (target) target.classList.toggle('active');
  });
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('global_search')) {
    event.preventDefault();
    document.getElementById('globalsearch').submit();
  }
});

$('.global_search').click(function () {
  $('#globalsearch').submit();
});
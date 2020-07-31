var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
var catBefore = document.querySelector('.example__image--before');
var catAfter = document.querySelector('.example__image--after');
var btnWas = document.querySelector('.example__button--was');
var btnHasBecome = document.querySelector('.example__button--has-become');
var control = document.querySelector('.example__control');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('page-header__toggle--active');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--active');
  }
});

btnHasBecome.addEventListener('click', function () {
  catBefore.classList.remove('example__image--visible');
  catBefore.classList.add('example__image--not-visible');
  catAfter.classList.remove('example__image--not-visible');
  catAfter.classList.add('example__image--visible');
  control.classList.add('example__control--right');
  control.classList.remove('example__control--left');
});

btnWas.addEventListener('click', function () {
  catAfter.classList.remove('example__image--visible');
  catAfter.classList.add('example__image--not-visible');
  catBefore.classList.remove('example__image--not-visible');
  catBefore.classList.add('example__image--visible');
  control.classList.add('example__control--left');
  control.classList.remove('example__control--right');
});

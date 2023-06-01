const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon');

const copyText = e => {
  e.preventDefault();
  coupon.select();
  document.execCommand('copy');
};

btn.addEventListener('click', copyText);

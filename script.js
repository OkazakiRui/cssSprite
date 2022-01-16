const cover = document.querySelector('.cover');
const img = document.querySelector('img');

let num = 1;
let intervalId;

/**
 * spriteを実行します。
 * @param {number} 横の枚数
 * @param {number} 合計枚数
 * @returns {void}
 */
const sprite = (col, length) => {
  if (num >= length) {
    clearInterval(intervalId);
    return;
  }
  cover.style.width = img.clientWidth / col + 'px';
  cover.style.height = img.clientHeight / Math.ceil(length / col) + 'px';
  img.style.top = Math.floor(num / col) * cover.clientHeight * -1 + 'px';
  img.style.left = Math.floor(num % col) * cover.clientWidth * -1 + 'px';
  num++;
};

intervalId = setInterval(() => {
  sprite(10, 29);
}, 50);

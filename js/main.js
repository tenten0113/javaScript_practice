'use strict';
//確率を操作する

{
  const btn = document.getElementById('btn');
  const btnFirst = document.getElementById('btn1');
  const btnSecond = document.getElementById('btn2');
  const btnThird = document.getElementById('btn3');
  const btnFour = document.getElementById('btn4');
  const message = document.getElementById('message');

  const omikuji = ['大吉','中吉','吉','小吉','凶','大凶'];


  btn.addEventListener('click',() =>{
    // btn.textContent = omikuji[Math.floor(Math.random()* omikuji.length)];
    const n = Math.random();
    if(n < 0.05){
      btn.textContent = omikuji[0];
      message.textContent = '今日の運勢は大吉！棚からぼたもち？！';
    }else if(n < 0.2){
      btn.textContent = omikuji[1];
      message.textContent = '今日の運勢は中吉。いいことあるよ！';
    }else {
      btn.textContent = omikuji[4];
      message.textContent = '今日の運勢は凶。気をつけて過ごそう！';
    }
  });

const n = omikuji[Math.floor(Math.random()* omikuji.length)];
const m = Math.floor(Math.random()* omikuji.length);
  btnFirst.addEventListener('click',() =>{
    btnFirst.textContent = n;
    if(n < 0.05){
      btnFirst.textContent = omikuji[0];
      message.textContent = '今日の運勢は大吉！棚からぼたもち？！';
    }else if(n < 0.2){
      btnFirst.textContent = omikuji[1];
      message.textContent = '今日の運勢は中吉。いいことあるよ！';
    }else {
      btnFirst.textContent = omikuji[4];
      message.textContent = '今日の運勢は凶。気をつけて過ごそう！';
    }
  });

  btnSecond.addEventListener('click',() =>{
    btnSecond.textContent = n;
  });
  btnThird.addEventListener('click',() =>{
    btnThird.textContent = n;
  });
  btnFour.addEventListener('click',() =>{
    btnFour.textContent = n;
  });
}

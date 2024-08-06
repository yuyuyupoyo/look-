function createImage(imgPath) {
  return new Promise((resolve) => {
    try {
      let createImagElement = document.createElement("img");
      createImagElement.src = imgPath;
      document.body.appendChild(createImagElement);
      createImagElement.classList.add("images");
      console.log(createImagElement);
      resolve(createImagElement);
    } catch (error) {
      console.log(error);
      //要修正
    }
  });
}
//createImageは画像を生成する関数

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("切り替え中");
      resolve();
    }, ms * 1000);
  });
}
//waitはms秒待機する関数。

function erase() {
  let imgElement = document.querySelector(".images"); //最初のimagesを含む要素を定数に
  if (imgElement) {
    imgElement.style.display = "none";
    imgElement.remove();
    //非表示にして消す
  }
}

//querySelectorAll for文imgelementの数だけ回してdisplay = "none";をつける

createImage("pic1.jpeg")
  .then(() => {
    return wait(2);
  })
  .then(() => {
    erase();
  })
  .then(() => {
    return createImage("pic2.jpeg");
  })
  .then(() => {
    console.log("pppp");
    return wait(2);
  })
  .then(() => {
    erase();
  });

//  dom操作のみで画像を表示させるコード
//  let imgElement = document.createElement("img");
// imgElement.src = "pic1.jpeg";srcに画像パスを埋め込むとは多分こういうこと
// document.body.appendChild(imgElement);

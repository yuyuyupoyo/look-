class ImageManager {
  constructor() {
    this.currentImage = null;
  }
  //currentImageという空箱をImageManagerに用意する

  //インスタンスメソッドとはインスタンス内のメソッドである
  createImage(imgPath) {
    return new Promise((resolve, reject) => {
      try {
        let imageElement = document.createElement("img");
        imageElement.src = imgPath;
        document.body.appendChild(imageElement);
        imageElement.classList.add("images");
        this.currentImage = imageElement;
        console.log(imageElement);
        resolve(imageElement);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
  //createImageは画像を生成する関数。生成した画像をcurrentImageにぶち込んでる

  wait(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("切り替え中");
        resolve();
      }, ms * 1000);
    });
  }
  //waitはms秒待機する関数。

  erase() {
    if (this.currentImage) {
      this.currentImage.remove();
    }
  }
  //今、画像が表示されている場合、noneで非表示に、removeで画像要素を消す、nullで参照をクリア
}

const imageManager = new ImageManager();
//imageManagerというImageManagerのインスタンスを生成。これに対してあれこれ実行していく
imageManager
  .createImage("pic1.jpeg")
  .then(() => imageManager.wait(2))
  .then(() => {
    imageManager.erase();
    return imageManager.createImage("pic2.jpeg");
  })
  .then(() => {
    console.log("pppp");
    return imageManager.wait(2);
  })
  .then(() => {
    imageManager.erase();
  })
  .catch((error) => {
    console.error("エラーが発生しました:", error);
  });

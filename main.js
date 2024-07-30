let imgOne = document.getElementsByClassName("imgOne")[0];
let imgTwo = document.getElementsByClassName("imgOne")[1];
imgTwo.style.display = "none";

// function createImage(imgOne, imgTwo) {
//   return new Promise((resolve, reject) => {
//     if
//       picOne.style.display = "none";
//       picTwo.style.display = "block";
//       resolve();
//     }, 2000);
//   });
// }

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      imgOne.style.display = "none";
      console.log("trhetgesfae");
      resolve();
    }, ms * 1000);
  });
}

wait(2)
  .then(() => {
    imgTwo.style.display = "block";
    console.log("uuu");
  })
  .then(() => {
    setTimeout(() => {
      imgTwo.style.display = "none";
      console.log("ppppp");
    }, 2000);
  });

// function wait(ms) {
//   return new Promise((resolve, reject) => {
//     if (imgOne.style.display === "block") {
//       setTimeout(() => {
//         imgOne.style.display = "none";
//         imgTwo.style.display = "block";
//         console.log("trhetgesfae");
//         resolve();
//       }, ms * 1000);
//     } else {
//       reject();
//     }
//   });
// }

// wait(2)
//   .then(() => {
//     console.log("待機が終了しました");
//   })
//   .catch((error) => {
//     console.error("エラーが発生しました:", error);
//   });

// let imgOne = document.getElementsByClassName("imgOne")[0];
// let imgTwo = document.getElementsByClassName("imgOne")[1];
// imgTwo.style.display = "none";

// function createImage(picOne, picTwo) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       picOne.style.display = "none";
//       picTwo.style.display = "block";
//       resolve();
//     }, 2000);
//   });
// }

// async function processImages(imgOne, imgTwo) {
//   try {
//     await createImage(imgOne, imgTwo);

//     await new Promise((resolve) => {
//       setTimeout(() => {
//         imgTwo.style.display = "none";
//         resolve();
//       }, 2000);
//     });
//   } catch (error) {
//     console.log("出直しな");
//   } finally {
//     console.log("おつかれさま");
//   }
// }

// processImages(imgOne, imgTwo);

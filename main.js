let imgOne = document.getElementsByClassName("imgOne")[0];
let imgTwo = document.getElementsByClassName("imgOne")[1];
imgTwo.style.display = "none";

function createImage(picOne, picTwo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      picOne.style.display = "none";
      picTwo.style.display = "block";
      resolve();
    }, 2000);
  });
}

async function processImages(imgOne, imgTwo) {
  try {
    await createImage(imgOne, imgTwo);

    await new Promise((resolve) => {
      setTimeout(() => {
        imgTwo.style.display = "none";
        resolve();
      }, 2000);
    });
  } catch (error) {
    console.log("出直しな");
  } finally {
    console.log("おつかれさま");
  }
}

processImages(imgOne, imgTwo);

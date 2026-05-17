const ImageKit = require("imagekit");

const StorageInstance = new ImageKit({
  publicKey: process.env.IK_PUB_KEY,
  privateKey: process.env.IK_PRI_KEY,
  urlEndpoint: process.env.IK_URL,
});

const sendToKit = async (file, fileName) => {
  try {
    let options = {
      file,
      fileName,
      folder: "studentLearning",
    };
    return await StorageInstance.upload(options);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = sendToKit;

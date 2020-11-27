import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: 'washopilot',
  api_key: '379837555784473',
  api_secret: 'ADFBNuuUmE_jMOvOhyXCxvvpcBM',
});

module.exports = async (file) => {
  try {
    const res = await cloudinary.v2.uploader.upload(file);
    return res;
  } catch (error) {
    return error;
  }
};

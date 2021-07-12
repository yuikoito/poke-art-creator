import axios from "axios";
const apiUrl = process.env.API_BASE_URL;

export default async function getArtImage(file) {
  let imageBase64 = file;
  imageBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, "");
  try {
    const response = await axios.post(
      apiUrl,
      { img: imageBase64 },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    return null;
  }
}

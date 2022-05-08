import _api from "../utils/_api";

export const shortenLink = async (formData) => {
  try {
    const res = await _api.post("url", formData);
    return res?.data;
  } catch (error) {
    console.log("Sorry! something went wrong.", error);
    return null;
  }
};

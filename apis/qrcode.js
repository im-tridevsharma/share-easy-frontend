import _api from "../utils/_api";

export const shareNote = async (formData) => {
  try {
    const res = await _api.post("paste", formData);
    return res?.data;
  } catch (error) {
    console.log("Sorry! something went wrong.", error);
    return null;
  }
};

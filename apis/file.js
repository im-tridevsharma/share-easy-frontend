import _api from "../utils/_api";

export const shareFile = async (formData) => {
  try {
    const res = await _api.post("file", formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });

    return res?.data;
  } catch (error) {
    console.log("unable to create paste", error);
    return null;
  }
};

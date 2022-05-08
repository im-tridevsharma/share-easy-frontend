import _api from "../utils/_api";

export const getFile = async (url) => {
  try {
    const res = await _api.get(url);
    return res?.data;
  } catch (error) {
    console.log("unable to create paste", error);
    return null;
  }
};

export const downloadFile = async (token) => {
  try {
    const res = await _api.get("getFile", {
      headers: {
        Authorization: token,
        "Content-Disposition": "attachment",
        "Content-Type": "application/json",
        Accept: "application/octet-stream",
      },
      responseType: "arraybuffer",
    });

    return res?.data;
  } catch (error) {
    console.log("Something went wrong!", error);
    return null;
  }
};

export const getNotes = async (data) => {
  try {
    const res = await _api.post("getpaste", data);
    return res?.data;
  } catch (error) {
    console.log("Something went wrong!", error);
    return null;
  }
};

export const checkPassword = async (data) => {
  try {
    const res = await _api.post("checkPassword", data);
    return res?.data;
  } catch (error) {
    console.log("Something went wrong!", error);
    return null;
  }
};

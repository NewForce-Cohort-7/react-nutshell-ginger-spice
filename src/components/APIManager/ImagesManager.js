const API_ROOT = "http://localhost:8088";

export const getImages = async () => {
  try {
    const response = await fetch(`${API_ROOT}/images`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const saveImage = async (imageData) => {
  try {
    const response = await fetch(`${API_ROOT}/images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imageData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateImage = async (imageId, imageData) => {
  try {
    const response = await fetch(`${API_ROOT}/images/${imageId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imageData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteImage = async (imageId) => {
  try {
    const response = await fetch(`${API_ROOT}/images/${imageId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

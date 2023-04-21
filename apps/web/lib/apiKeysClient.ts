export const persistApiKey = async (apiKey) => {
  try {
    await fetch(`/api/users/me/api-keys/${apiKey.id}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(apiKey),
    });
  } catch (error) {
    console.error(error);
  }
};

export const createApiKey = async (apiKey = {}) => {
  try {
    const res = await fetch(`/api/users/me/api-keys`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(apiKey),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw Error(`createApiKey: unable to create api-key: ${error.message}`);
  }
};

export const deleteApiKey = async (apiKey) => {
  try {
    const res = await fetch(`/api/users/me/api-keys/${apiKey.id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    throw Error(`deleteApiKey: unable to delete api-key: ${error.message}`);
  }
};

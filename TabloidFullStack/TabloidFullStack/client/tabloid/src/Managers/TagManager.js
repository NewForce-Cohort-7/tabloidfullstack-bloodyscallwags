const baseUrl = "/api/tag";

export const GetAllTags = () => {
  return fetch(baseUrl)
  .then((res) => res.json());
};

export const addTag = (tag) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tag),
  });
};

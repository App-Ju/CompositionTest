import axios from "axios";

const APIkey = "ab7vrK_3qh2eHXZSqVvlwdxXDfkKLFvPipajRXfKJ7g";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Content-Type": "application/json",
    "Accept-Version": "v1",
  },
});

export const getPhoto = (query: string) =>
  instance.get(`/search/photos?page=1&per_page=1`, {
    params: { client_id: APIkey, query: query },
  });

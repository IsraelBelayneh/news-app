import { create } from "apisauce";

const api = create({
  baseURL: "https://newsapi.org/v2",
});

const apiKey = "?country=us&apiKey=a9cb7cdc9ada48c0ab63d7f146702f19";

const getTopHeadline = api.get("/top-headlines" + apiKey);

export default {
  getTopHeadline,
};

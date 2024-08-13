import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9a13495c54e24bcd885b467a24bc30f6",
  },
});

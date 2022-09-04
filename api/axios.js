import axios from "axios";
import { getCookie } from "cookies-next";
import qs from "qs";

class Axios {
  // Post
  static async fetch({ method = "GET", url = "", data = {}, params = {} }) {
    var postData = qs.stringify(data);
    var config = {
      method: method,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      data: postData,
    };
    if (method == "GET") {
      config["params"] = params;
    }

    const result = await axios(config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        //   console.log(error);
        return error;
      });

    return result;
  }
}

export default Axios;

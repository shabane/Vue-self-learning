import axios from "axios";

export function AddingToCard(id) {
  axios({
    method: "POST",
    url: "http://127.0.0.1:8000/api/demand/",
    data: {
      replica: 1,
      product: id,
      producer: 1,
      consumer: 1,
    },
  });
  window.alert("the item added to your card");
}

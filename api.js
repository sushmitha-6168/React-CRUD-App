import axios from "axios";

const url = "http://localhost:3000/products"; // ✅ correct

export async function getData() {
  let res = await axios.get(url);
  return res.data;
}

export async function addData(product) {
  return await axios.post(url, product);
}

export async function deleteData(id) {
    return await axios.delete(`${url}/${id}`);
}

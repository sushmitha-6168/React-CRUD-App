import { useState } from "react";

function Form({ onAdd }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(product);
    setProduct({ name: "", price: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={product.name}
        onChange={handleChange}
        className="form-control m-1"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        className="form-control m-1"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
        className="form-control m-1"
      />

      <button className="btn btn-success m-1">Add Product</button>
    </form>
  );
}

export default Form;

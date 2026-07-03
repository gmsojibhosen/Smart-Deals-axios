import UseAuth from "../ProductDetails/hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosInstance from "../ProductDetails/hooks/UseAxiosInstance";
import useAxiosSecure from "../ProductDetails/hooks/useAxiosSecure";

const CreateAProduct = () => {
  const { user } = UseAuth();
const axiosSecure = useAxiosSecure()
  const handleCreateAProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const min_price = e.target.min_price.value;
    const max_price = e.target.max_price.value;

    console.log(user);
    const newUser = { title, image, min_price, max_price };

      axiosSecure.post(`/products`, newUser)
          .then(data => {
              
         if(data.data.insertedId) {
              Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: "Your bid has been placed.",
                         showConfirmButton: false,
                         timer: 1500,
                       });
}
      })
  };

  return (
    <div>
      <h1>Create a Product</h1>

      <form onSubmit={handleCreateAProduct}>
        <fieldset className="fieldset">
          {/* Title */}
          <label className="label">Title</label>
          <input type="text" className="input" name="title" />
          {/* image_URL */}
          <label className="label">Image URL</label>
          <input
            type="text"
            name="image"
            className="input"
            placeholder="image URL"
          />
          {/* price */}
          <label className="label">Min Price</label>
          <input
            type="text"
            name="min_price"
            className="input"
            placeholder="min price"
          />
          <label className="label">Max Price</label>
          <input
            type="text"
            name="max_price"
            className="input"
            placeholder="max price"
          />
          <button className="btn btn-neutral mt-4">Please your bid</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAProduct;

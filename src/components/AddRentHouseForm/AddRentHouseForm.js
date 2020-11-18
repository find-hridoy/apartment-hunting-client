import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/AddRentHouseForm.scss";
import upload from "../../images/logos/upload.png";

const AddRentHouseForm = () => {
  const { handleSubmit, register, errors } = useForm({
    mode: onchange,
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-group">
        <div className="card common_card">
          <div className="row">
            <div className="col-md-6">
              {/* Service  Title*/}
              <label>Service Title</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Title"
                name="title"
                ref={register({
                  required: "title is required",
                  pattern: {
                    value: /[a-zA-Z]+\s[a-zA-Z-]/,
                    message: "invalid title",
                  },
                })}
              />
              <p className="error_text">
                {errors.title && errors.title.message}
              </p>
            </div>
            <div className="col-md-6">
              {/* Price*/}
              <label>Price</label>
              <input
                className="form-control"
                type="text"
                placeholder="Price"
                name="price"
                ref={register({
                  required: "price is required",
                  pattern: {
                    value: /^\d+(,\d{1,2})?$/,
                    message: "invalid price",
                  },
                })}
              />
              <p className="error_text">
                {errors.price && errors.price.message}
              </p>
            </div>
            <div className="col-md-6">
              {/* Location*/}
              <label>Location</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Location"
                name="location"
                ref={register({
                  required: "location is required",
                  pattern: {
                    value: /(?:[A-Z][a-z.-]+[ ]?)+/,
                    message: "invalid location",
                  },
                })}
              />
              <p className="error_text">
                {errors.location && errors.location.message}
              </p>
            </div>
            <div className="col-md-6">
              {/* No. of Bedroom*/}
              <label>No. of Bedroom</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Bedroom No."
                name="bedroom"
                ref={register({
                  required: "bedroom no. is required",
                  pattern: {
                    value: /^\d+(,\d{1,2})?$/,
                    message: "invalid bedroom no.",
                  },
                })}
              />
              <p className="error_text">
                {errors.bedroom && errors.bedroom.message}
              </p>
            </div>
            <div className="col-md-6">
              {/* No. of Bathroom*/}
              <label>No. of Bathroom</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Bathroom No."
                name="bathroom"
                ref={register({
                  required: "bathroom no. is required",
                  pattern: {
                    value: /^\d+(,\d{1,2})?$/,
                    message: "invalid bathroom no.",
                  },
                })}
              />
              <p className="error_text">
                {errors.bathroom && errors.bathroom.message}
              </p>
            </div>
            <div className="col-md-6">
              {/* Thumbnail*/}
              <label>Thumbnail</label> <br />
              <input
                className="add_thumbnail"
                name="thumbnail"
                type="file"
                id="upload"
                hidden
                ref={register({ required: "thumbnail is required" })}
              />
              <label className="label" htmlFor="upload">
                <img className="upload_icon" src={upload} alt="icon" />
                Upload Image
              </label>
              <p className="error_text">
                {errors.thumbnail && errors.thumbnail.message}
              </p>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="text-right mt-4">
          <button className="btn btn-primary px-4" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddRentHouseForm;

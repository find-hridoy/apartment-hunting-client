import React from "react";

const MyRentTable = () => {
  return (
    <>
      <div className="card border-0 p-4" style={{ borderRadius: "20px" }}>
        <table class="table table-borderless text-center">
          <thead className="bg-light">
            <tr>
              <th scope="col">House Name</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button className="btn btn-primary">View Details</button>
              </td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <button className="btn btn-primary">View Details</button>
              </td>
            </tr>
            <tr>
              <td>Luxury villa</td>
              <td>the Bird</td>
              <td>
                <button className="btn btn-primary">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyRentTable;

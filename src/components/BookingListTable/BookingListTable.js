import React from "react";

const BookingListTable = () => {
  return (
    <>
      <div className="card border-0 p-4" style={{ borderRadius: "20px" }}>
        <table class="table table-borderless">
          <thead className="bg-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th scope="col">Massege</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option className="text-danger" selected>
                    Pending
                  </option>
                  <option className="text-success" value="1">
                    Done
                  </option>
                  <option className="text-warning" value="2">
                    On Going
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option className="text-danger" selected>
                    Pending
                  </option>
                  <option className="text-success" value="1">
                    Done
                  </option>
                  <option className="text-warning" value="2">
                    On Going
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option className="text-danger" selected>
                    Pending
                  </option>
                  <option className="text-success" value="1">
                    Done
                  </option>
                  <option className="text-warning" value="2">
                    On Going
                  </option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookingListTable;

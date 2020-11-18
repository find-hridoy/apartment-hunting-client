import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../../styles/Common.scss";
import BookingListTable from "../BookingListTable/BookingListTable";

const BookingList = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-9 offset-md-1 p-0">
            <div className="common_header">
              <div className="d-flex justify-content-between">
                <h3 className="common_title">Booking List</h3>
                <h3 className="common_name">Name</h3>
              </div>
            </div>
            <div className="common_section">
              <BookingListTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingList;

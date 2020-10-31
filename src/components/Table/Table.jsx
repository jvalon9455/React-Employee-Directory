import React from "react";

const Table = (props) => {
  return (
    <div>
      <div>
        <div className="table">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              {props.searchData.map((search) => (
                <tr>
                  <td>
                    <img src={search.picture.medium} alt="" />
                  </td>
                  <td>
                    {search.name.first}
                    {search.name.last}
                  </td>
                  <td>{search.phone}</td>
                  <td>{search.email}</td>
                  <td>{search.dob.date}</td>
                </tr>
              ))}
              ;
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;

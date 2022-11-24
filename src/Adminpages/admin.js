import React from "react";
import Adminlist from "../Component/adminlist";
import Adminform from "../Component/adminform";




function Admin() {
  const [search, setSearch] = React.useState("");
  const [data, setdata] = React.useState({});
  const editdata = (data) => setdata(data);



  return (

    <>

      {/* <input
        type="text"
        classname="form-control"
        placeholder="Search user by name"
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      /> */}
      <div className="container-fluid m-2">
        <div className="row">
          <h4>User</h4>
        </div>
      </div>

      <div class="row ">
        <div class="col">
          <Adminlist editdata={editdata} search={search} />
        </div>
        <div class="col">
          <Adminform data={data} />
        </div>

      </div>








    </>
  )
}
export default Admin

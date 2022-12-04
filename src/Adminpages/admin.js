import React from "react";
import Adminlist from "../Component/adminlist";
import Adminform from "../Component/adminform";




function Admin() {
 
  const [data, setdata] = React.useState({});
  const editdata = (data) => setdata(data);



  return (

    <>

     
      <div className="container-fluid m-2">
        <div className="row">
          <h4>User</h4>
        </div>
      </div>

      <div class="row ">
        <div class="col">
          <Adminlist editdata={editdata} />
        </div>
        <div class="col">
          <Adminform data={data} />
        </div>

      </div>








    </>
  )
}
export default Admin

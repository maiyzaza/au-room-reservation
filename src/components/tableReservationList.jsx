import React, { useEffect, useState } from "react";
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import MoreInfo from "../pages/history/moreInfo";
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';





const TableReservationList = (props) =>  {



  const [dataRow,setDataRow] = useState([])
  const [itemRow,setItemRow] = useState([])
  
  const access_token = sessionStorage.getItem("token")


  const postdata = async () => {
      try {
       const res = await axios({
          url: "https://arr-dev.azurewebsites.net/api/v1/webs/reserved-list",
          headers: {
              'Authorization': 'Bearer ' + access_token
              },
          method: "POST",
          data: {
              BookingId : null,
              RoomName : null,
              Status : null,
              Date : null,
              Page : 1
          }
      })
      .then((res) => {

          let itemData = res.data.data
          setDataRow(itemData)
          

       });
      } catch (err) {
          console.log(err);
      }
   };

  useEffect(() => {
    postdata();
  },[]);

  useEffect(() => {
    let dataArray = JSON.parse(JSON.stringify(dataRow))
 
    var reservationData = []
    dataArray.map((item,index)=>{
      item.date = (
         <div>
          {new Date(item.startTime).toLocaleDateString("en-GB")}
        </div>
      );

      item.startTime = (
        <div>
          {new Date(item.startTime).toLocaleTimeString(undefined, {
              hour:   '2-digit',
              minute: '2-digit',
          })}
        </div>
      );

      item.endTime = (
        <div>
          {new Date(item.endTime).toLocaleTimeString(undefined, {
              hour:   '2-digit',
              minute: '2-digit',
          })}
        </div>
      );

      item.status = (
        <div>
          { 
           item.status.split(" ")[0]
          }
        </div>
       )

       const booking_id = item.bookingId;
       const room_id = item.roomId;


      item.info = (
    
        <Link to={{pathname:`/moreinfo/${booking_id}`,  state:{ booking_id,room_id } } } > 
        <div class="iconReservationList" style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            className="bx bx-info-circle"
            style={{
              cursor: "pointer",
              color: "black",
              fontSize: "1.1rem",
            }}
            reservationId = {item.bookingId}
          > 
          </div>
        </div>
       </Link>
      );
        
     reservationData.push(item)
    })

      setItemRow(reservationData)
      
    },[dataRow]);

  const data = {
    columns: [
      {
        label: 'ID',
        field: 'bookingId',
        sort: 'asc',
        width: 30
        
      },
      {
        label: 'DATE',
        field: 'date',
        sort: 'asc',
        width: 70
      },
      {
        label: 'START TIME',
        field: 'startTime',
        sort: 'acs',
        width: 60
      },
      {
        label: 'END TIME',
        field: 'endTime',
        sort: 'asc',
        width: 60
      },
      {
        label: 'ROOM',
        field: 'room',
        sort: 'asc',
        width: 80
      },
      {
        label: 'STATUS',
        field: 'status',
        sort: 'asc',
        width: 60
      },
      {
        label: 'RESERVED BY',
        field: 'reservedBy',
        sort: 'asc',
        width: 160
      },
      {
        label: 'INFO',
        field: 'info',
        sort: 'asc',
        width: 30
      },
  ],
  rows: itemRow
  } 
      if (!sessionStorage.getItem("token")) {

        return <Redirect to="/" />
      } 

  return (
    <div 
    className="myTableReservationList"
    >
      {/* <MDBDataTable scrollY
        striped
        bordered
        small
        
        searching={false}
        sortable={false}
        // order={["bookingId", "decs"]}
        displayEntries={false}
        data={data}
      /> */}

      <MDBDataTable
      scrollY
      maxHeight="20rem"
      striped

      small
      
      sortable={false}
      paging={false}
      searching={false}
      data={data}
      />
    </div>

  );
}


export default TableReservationList;
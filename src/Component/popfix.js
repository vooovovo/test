import React, { Component } from "react";
import { MdImageSearch } from "react-icons/md";
class HomeUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalChangePass: false,
        };
    }

    render(){
    return (
      <div>
        <div
          style={{
            display: "flex",
            width: 496,

            height: 100,
            backgroundColor: "#581414",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <div style={{ fontSize: 20, color: "white",textAlign: "left", }}>แก้ไข</div>
        </div>
        
          <div
            style={{
              display: "flex",
              width: 496,

              height: 50,
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              color: "black",
            }}
          >
            รายละเอียดทุน{" "}
          </div>
          <div
            style={{
              display: "flex",
              width: 496,

              height: 176,
              backgroundColor: "#EAE7E7",
              alignItems: "center",
              fontSize: 20,
              color: "#575454",
              flexDirection: "column",
            }}
          >
            เพิ่มข้อความที่นี้...
          </div>
          <div
            style={{
              display: "flex",
              width: 496,

              height: 50,
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              color: "black",
            }}
          >
          
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginLeft:"-100px"
              }}
            >
              <button type="button" class="btn btn-success">
                ยืนยัน
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"20px"
              }}
            >
              <button type="button" class="btn btn-danger">
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      
    );
  }
}

export default (HomeUser);


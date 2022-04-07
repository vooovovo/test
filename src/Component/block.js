import React, { Component } from 'react'

import styled, { css } from 'styled-components'


import './forb.css';
import { connect } from 'react-redux';



class HomeUser extends Component {
  constructor(props) {
      super(props);
      this.state = {
          modalChangePass: false,
      };
  }

    //////////////////////////////////////////////
   
    


    render() {
        
        return (
            <div><h1 class="topja"> TEST</h1>
                <div>
                    <div style={{marginLeft:'10%',marginTop:'-5%'}}>
                        <p>TEST</p>  
                    </div>
                </div>    
                    <h4 style={{fontSize:'16px',marginLeft:'93%',color:'white',marginTop:'-1.5%' }}>Admin</h4>
                <div>
                    <p class="col position">รายชื่อทุน </p>
                </div>
                <div class="line"></div>
                  
                <div>
                    <p class="rcorners1 sizetext"></p>
                    <p class="position1">ทุนการศึกษาสำหรับนิสิตเรียนดี</p>
                    <p class="position2">สมัครได้ตั้งแต่ xx/xx/xx - xx/xx/xx</p>
                </div>
                <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginLeft:"-7100px",
                marginTop:"-490px"
                

              }}
            >
              <button type="button" class="btn btn-outline-danger">
                อัพโหลดรูปภาพ
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"650px",
                marginTop:"-60px"
                
              }}
            >
              <button type="button" class="btn btn-danger">
                แก้ไข
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"500px",
                marginTop:"-90px"
                
              }}
            >
              <button type="button" class="btn btn-secondary">
                รายละเอียด
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"350px",
                marginTop:"-97px"
                
              }}
            >
              <button type="button" class="btn btn-success">
               สมัครทุน
              </button>
            </div>
                
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"200px",
                marginTop:"-105px"
                
              }}
            >
              <button type="button" class="btn btn-primary">
               ประกาศผล
              </button>
            </div>
            <div class="line2"></div>
            <div>
                    <p class="rcorners1 sizetext"></p>
                    <p class="position1">ทุนการศึกษาสำหรับนิสิตกิจกรรมเด่น</p>
                    <p class="position2">สมัครได้ตั้งแต่ xx/xx/xx - xx/xx/xx</p>
                </div>
                <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginLeft:"-7100px",
                marginTop:"-490px"
                

              }}
            >
              <button type="button" class="btn btn-outline-danger">
                อัพโหลดรูปภาพ
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"650px",
                marginTop:"-60px"
                
              }}
            >
              <button type="button" class="btn btn-danger">
                แก้ไข
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"500px",
                marginTop:"-90px"
                
              }}
            >
              <button type="button" class="btn btn-secondary">
                รายละเอียด
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"350px",
                marginTop:"-97px"
                
              }}
            >
              <button type="button" class="btn btn-success">
               สมัครทุน
              </button>
            </div>
                
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"200px",
                marginTop:"-105px"
                
              }}
            >
              <button type="button" class="btn btn-primary">
               ประกาศผล
              </button>
            </div>   
            <div class="line3"></div>
            <div>
                    <p class="rcorners1 sizetext"></p>
                    <p class="position1">ทุนการศึกษาเพื่อช่วยเหลือนิสิตขาดทุนทรัพย์</p>
                    <p class="position2">สมัครได้ตั้งแต่ xx/xx/xx - xx/xx/xx</p>
                </div>
                <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginLeft:"-7100px",
                marginTop:"-490px"
                

              }}
            >
              <button type="button" class="btn btn-outline-danger">
                อัพโหลดรูปภาพ
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"650px",
                marginTop:"-60px"
                
              }}
            >
              <button type="button" class="btn btn-danger">
                แก้ไข
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"500px",
                marginTop:"-90px"
                
              }}
            >
              <button type="button" class="btn btn-secondary">
                รายละเอียด
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"350px",
                marginTop:"-97px"
                
              }}
            >
              <button type="button" class="btn btn-success">
               สมัครทุน
              </button>
            </div>
                
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"200px",
                marginTop:"-105px"
                
              }}
            >
              <button type="button" class="btn btn-primary">
               ประกาศผล
              </button>
            </div>  
            <div class="line4"></div>
            <div>
                    <p class="rcorners1 sizetext"></p>
                    <p class="position1">ทุนการศึกษาสำหรับที่สร้างชื่อเสียงให้คณะ</p>
                    <p class="position2">สมัครได้ตั้งแต่ xx/xx/xx - xx/xx/xx</p>
                </div>
                <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginLeft:"-7100px",
                marginTop:"-490px"
                

              }}
            >
              <button type="button" class="btn btn-outline-danger">
                อัพโหลดรูปภาพ
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"650px",
                marginTop:"-60px"
                
              }}
            >
              <button type="button" class="btn btn-danger">
                แก้ไข
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"500px",
                marginTop:"-90px"
                
              }}
            >
              <button type="button" class="btn btn-secondary">
                รายละเอียด
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"350px",
                marginTop:"-97px"
                
              }}
            >
              <button type="button" class="btn btn-success">
               สมัครทุน
              </button>
            </div>
                
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"200px",
                marginTop:"-105px"
                
              }}
            >
              <button type="button" class="btn btn-primary">
               ประกาศผล
              </button>
            </div>  
            <div class="line5"></div>
                
            </div>
            
            
        )
    }
}



export default (HomeUser);


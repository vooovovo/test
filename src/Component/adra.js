import React, { Component } from 'react'

import styled, { css } from 'styled-components'


import './HomeS.css';
import { connect } from 'react-redux';



class test extends Component {
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
                    <p class="col position">ทุนประเภทที่ 1 </p>
                </div>
                <div>
                    <p class="rcorners1 sizetext">รายละเอียดทุน</p>
                    
                </div>
                <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                
                marginLeft:"-1500px",
                marginTop:"-150px"
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
                marginRight:"100px",
                marginTop:"-190px"
                
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
                marginRight:"100px",
                marginTop:"-30px"
              
              }}
            >
              <button type="button" class="btn btn-secondary">
                กลับ
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"1000px",
                marginTop:"-580px"
                
              }}
            >
              <button type="button" class="btn btn-danger">
                เกณฑ์การให้คะแนน
              </button>
            </div>
                
                

                

                
            </div>
            
            
        )
    }
}



export default (test);


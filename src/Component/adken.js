import React, { Component } from 'react'

import styled, { css } from 'styled-components'


import './HomeS.css';
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
                    <p class="col position">ทุนประเภทที่ 1 </p>
                </div>
                <div>
                    <p class="rcorners1 sizetext">เกณฑ์การให้คะแนน</p>
                    
                </div>
               
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginRight:"100px",
                marginTop:"-140px"
                
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
                marginTop:"-45px"
              
              }}
            >
              <button type="button" class="btn btn-secondary">
                กลับ
              </button>
            </div>
                
                

                

                
            </div>
            
            
        )
    }
}



export default (HomeUser);


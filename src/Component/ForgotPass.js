import React, { Component } from 'react'
import history from '../history'
import firestore from "../firebase/firestore"
import './Style.css';
import {Box,TextField,Button} from "@material-ui/core";
import styled, { css } from 'styled-components'
import './Modal.css';
import PinInput from "react-pin-input";
import Countdown from 'react-countdown';
import { AiOutlineReload } from "react-icons/ai";
import { connect } from 'react-redux';
import { addUser , editUser} from '../actions/userAction';
import { addProduct , deleteProduct} from '../actions/productAction';
import emailjs from 'emailjs-com';
import { Base64 } from 'js-base64';
import { Success } from '../pic';
const Font = styled.div`
  && {
    color: #000000;
    font-size: 24px;
  }
`
const ButtonInsert = styled.button`
  background: #EC4444;
  border: 2px;
  color: #ffffff;
  width: 170px;
  height: 48px;
  border-radius: 12px;
  paddingLeft: 10 ;
`

const ButtonOK = styled.button`
  background: #29292B;
  border: 2px;
  color: #ffffff;
  width: 121px;
  height: 48px;
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.5em 1.75em;
`
const ButtonResend = styled.button`
  background: #ffffff;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
  margin: 0 1em;
  padding: 0.5em 1em;
  `

  const FontTopic = styled.div`
  && {
    color: #000000;
    font-size: 35px;
    font-weight: 600;
  }
`
const FontHead = styled.div`
  && {
    color: #000000;
    font-size: 36px;
  }
`

const ButtonCancel = styled.button`
  background: #868181;
  border-radius: 10px;
  border: 2px;
  color: #ffffff;
  margin: 0 1em;
  padding: 0.5em 1.5em;
  `



class ForgotPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal3: false,
            Pin: null,
            pinVar: null,
            pinMSG: "",
            email:null,
            Pin:0,
            pinVar:null,
            pinVar:null,
            pinMSG:null,
            modalSendPinSuccess: false,
            modal4: false,
            newPass:null,
            confirmNewPass:null,
            newPassMsg: "",
            user:null,
            todayS: new Date(),
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    };

    ///////////////////////////////////////////////////////
  handleModal3Close = (e) => {
    this.setState({ modal3: false });
    this.handleModal4Open();
  };


  handleModal3Open = () => {
    this.setState({ modal3: true });
  };
  ///////////////////////////////////////////////////////
  handlemodalSendPinSuccessClose = (e) => {
    this.setState({ modalSendPinSuccess: false });
    this.handleModal3Open();
  };


  handlemodalSendPinSuccessOpen = () => {
    this.setState({ modalSendPinSuccess: true });
  };

  ///////////////////////////////////////////////////////
  handleModal4Close = (e) => {
    this.setState({ modal4: false });
  };


  handleModal4Open = () => {
    this.setState({ modal4: true });
  };
   ///////////////////////////////////////////////////////

  
  onSend = (e) => {
    console.log(this.state.email);
    e.preventDefault()
    this.setState({ Pin: Math.floor(100000 + Math.random() * 900000).toString() })
    firestore.getUser(this.state.email, this.success, this.reject)
  }


    success = (querySnapshot) => {
        let user;
        querySnapshot.forEach(doc => {
          user = doc.data()
          user.id = doc.id
          console.log("sussss")
          this.setState({
            user: user
          })
        });
        if (user.email != this.state.email) {
          console.log("error")
        } else {
            console.log(user);
            this.handleSubmit();
        }
      }
          

    reject = (error) => {
       console.log(error)
       alert("เดี๋ยวนะอิสัส")
    }
          
    handleSubmit = () => {
      console.log("sub")
      emailjs
        .sendForm(
          "service_o6xyl18",
          "template_q34buoh",
          ".forget_Pass",
          "user_fB00kPeUl1v618UKVJoEZ",
        )
        .then(function () {
          console.log('Send')
        })
        .catch(function (error) {
          console.log(error)
        });
        this.handlemodalSendPinSuccessOpen();
    }

    onCheckP = () => {

      if (this.state.Pin === this.state.pinVar) {
        console.log("Correct!!")
        this.handleModal3Close()
        this.setState({
          pinMSG: ""
        });
      }
      else {
        this.setState({
          pinMSG: "Incorrect PIN"
        });
        console.log("incorrect")
      }
    }
    
    upSuccess = () => {
      
      alert('Update password success')
      this.setState({ modal4: !this.state.modal4 });
    }
    upReject = (e) => {
      console.log(e)
    }

    onOK = () => {
      if (this.state.newPass === this.state.confirmNewPass) {
        console.log(this.state.newPass)
        const user = {
          id:this.state.user.id,
          passwd: Base64.encode(this.state.newPass),
          todayS: this.state.todayS,
          email: this.state.user.email,
        } 
        firestore.updateUser(user, this.upSuccess, this.upReject)
        this.setState({
          email: "",
          pass: "",
        });
      } else {
        this.setState({
          newPassMsg: "Password not match"
        })
        console.log("Password not match!!")
      }
  
    }

    render() {
        const Completionist = () => {
            this.setState({
              Pin: "Invalid"
            })
            return <p>Timeout</p>;
          }
        return (
            <div id='container-forgotpass'>
              
                <div class='forgot' >
                <form className='forget_Pass'>
                    <h1 class= 'text'>Password Reset</h1>
                    <a1 class= 'text1'>Enter your username, or the email address that you used to register.</a1>
                    <div></div>
                    <a1 class= 'text1'>We'll send you an email with your username and a link to reset your password.</a1>
                    <div style={{width:'100%',height:'1vh' ,backgroundColor:'#29292B'}}></div>                    
                    <div style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '20' }}>
                      <input class='input' type="text"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={txt => this.setState({ email: txt.target.value })} style={{ fontSize: 16, width: 510 }} />
                      <input type="hidden"
                        id="name"
                        name="name"
                        value={this.state.firstnameEN} />
                      <input type="hidden"
                        id="pass"
                        name="pass"
                        value={this.state.Pin} />
                    </div>  
                        <div style={{width:'100%',height:'2vh' ,backgroundColor:'#29292B'}}></div>
                        <button class="buttonfern" onClick={this.onSend}><span>SEND</span></button>
                </form>
            </div > 
          
          <div hidden={!this.state.modalSendPinSuccess}>
          <div className="modal-background">
            <div className="modal-cardforget">
              <div style={{ paddingTop: 20 }}>
                <img className="picSuccess" src={Success} />
              </div>
              <div>
                <Font style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }} >
                  <p>Email has been sent.</p>
                  <p>Please check pin in your mail box.</p>
                </Font>
              </div>
              <div style={{paddingTop: 10 }}>
                <ButtonInsert style={{ fontSize: 20 }} onClick={this.handlemodalSendPinSuccessClose}>Insert Pin</ButtonInsert>
              </div>
            </div>
          </div>
        </div>
                
        <div hidden={!this.state.modal3}>
          <div className="modal-background">
            <div className="modal-cardforget" >
              <div>
                <FontTopic style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 25 }} >
                  Enter your PIN
                </FontTopic>
              </div>
              <div style={{ paddingLeft: 100, color: "red" }}>{this.state.pinMSG}</div>
              <div style = {{display: 'flex', flexDirection: 'row',justifyContent:'center',alignItems:'center' ,marginRight:'20px'}}>
                <PinInput
                  length={6}
                  initialValue=""
                  secret
                  type="numeric"
                  inputMode="number"
                  style={{ padding: '10px' }}
                  inputStyle={{ borderColor: '#29292B' }}
                  inputFocusStyle={{ borderColor: 'red' }}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  onChange={value => this.setState({ pinVar: value })}
                  style={{ paddingLeft: 90, paddingTop: 30 }}
                />
                <div style = {{paddingTop: 30}}>
                  <ButtonResend onClick={this.onResend}><AiOutlineReload size = {20} style ={{color:'black'}}/> </ButtonResend>
                </div>
              </div>
              <div style={{ paddingTop: 15, paddingLeft: 5, color:'black'}}>
                <Countdown date={Date.now() + 10000 * 6 * 3}>
                  <Completionist />
                </Countdown>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ paddingTop: 40 }}>
                  <ButtonOK style={{ fontSize: 17 }} onClick={this.onCheckP}>Submit</ButtonOK>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div hidden={!this.state.modal4}>
          <div className="modal-background">
            <div className="modal-cardChangePass2">
              <div>
                <FontHead style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 20, fontWeight: "bold" }} >Reset Password</FontHead>
                <Font style={{ display: 'flex', flexDirection: 'column', paddingTop: 25, paddingLeft: 20 }} ></Font>
              </div>
              <div style={{ paddingTop: 10, paddingLeft: 20 }}>
                <input type="hidden" style={{ fontSize: 24 }} />
              </div>
              <div>
                <Font style={{ display: 'flex', flexDirection: 'column', paddingTop: 10, paddingLeft: 10 }} >New Password</Font>
              </div>
              <div style={{ paddingTop: 10, paddingLeft: 10 }}>
                <input type="password" style={{ fontSize: 24 }} onChange={txt => this.setState({ newPass: txt.target.value })} />
              </div>
              <div>
                <Font style={{ display: 'flex', flexDirection: 'column', paddingTop: 20, paddingLeft: 10 }} >Confirm Password</Font>
              </div>
              <div style={{ paddingTop: 10, paddingLeft: 10 }}>
                <input type="password" style={{ fontSize: 24 }} onChange={txt => this.setState({ confirmNewPass: txt.target.value })} />
              </div>
              <div style={{ paddingLeft: 20, color: "red" }}>
                {this.state.newPassMsg}
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }} >
                <div style={{ paddingLeft: 20, paddingTop: 100 }}>
                  <ButtonCancel style={{ fontSize: 20 }} onClick={this.handleModal4Close}>Cancel</ButtonCancel>
                </div>
                <div style={{ paddingLeft: 190, paddingTop: 100 }}>
                  <ButtonOK style={{ fontSize: 20 }} onClick={this.onOK}>OK</ButtonOK>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>

            
          
        )

    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user)),
        addProduct: (product) => dispatch(addProduct(product)),
        editUser: (user) => dispatch(editUser(user)),
        deleteProduct:(product) => dispatch(deleteProduct(product))
    };
};

const mapStateToProps = (state) => {
    return {
        userList: state.userReducer.userList,
        products: state.productReducer.products,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);

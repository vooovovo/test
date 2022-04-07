import React, { Component } from 'react'
import './SignStyle.css'
import history from '../history'
import firestore from '../firebase/firestore'
import { Base64 } from 'js-base64';
import { render } from 'react-dom';
import {Warning } from '../pic';
import styled, { css } from 'styled-components'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import './Style.css';
import { connect } from 'react-redux';
import { addUser , editUser} from '../actions/userAction';
import { addProduct , deleteProduct} from '../actions/productAction';
import PasswordStrengthBar from 'react-password-strength-bar';

const options = [
    {
        label: "Officer",
        value: "officer",
    },
    {
        label: "Manager",
        value: "manager",
    },
    {
        label: "Admin",
        value: "admin",
    },
];

const ButtonTry = styled.button`
  background: #29292B;
  border: 2px;
  color: #ffffff;
  width: 121px;
  height: 48px;
  border-radius: 12px;
  margin: 0 1em;
  padding: 0.5em 1.75em;
`

class Sign_Up extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            username:'',
            email:'',
            passwd:'',
            department:'',
            todayS: new Date(),
            modalfill: false,
            

        };
    }

    ///////////////////////////////////////////////
    handleModalfillClose = (e) => {
        this.setState({ modalfill: false });
    };


    handleModalfillOpen = () => {
        this.setState({ modalfill: true });
    };
    ///////////////////////////////////////////////
    componentDidMount() {
        loadCaptchaEnginge(6);
    };
    
    onAdd = (xScore) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(xScore==0){
            alert("0");
        }
        if(xScore==1){
            alert("1");
        }
        if(xScore==2){
            alert("2");
        }if(xScore==3){
            alert("3");
        }if(xScore==4){
            alert("4");
        }
        if ((this.state.firstname !== '') && (this.state.lastname !== '') && (this.state.username !== '') && (this.state.email !== '') && (this.state.passwd !== '') && (this.state.department !== '') ) {
            
            if(re.test(this.state.email)===false){
                alert("Invalid Email")
            }else{
                firestore.getUser(this.state.email, this.getSuccess, this.getReject)
    
            }
            
        }else {
            this.handleModalfillOpen()
        }
        console.log(this.state.todayS)
        console.log("last value ",xScore)
    }

    getSuccess = (querySnapshot) => {
        let user;
        querySnapshot.forEach(doc => {
            user = doc.data()
            user.id = doc.id
            this.setState({ user: user })
        });
        console.log(user.firstname)
        alert('Email is already have.')
    }

    getReject = (error) => {
        console.log(error)
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            department: this.state.department,
            passwd: Base64.encode(this.state.passwd),
            todayS : this.state.todayS,
        }
        firestore.addUser(user, this.addSuccess, this.addReject)
    }

    addSuccess = (doc) => {
        console.log(doc.id)
        window.location.href="/"
    }

    addReject = (error) => {
        console.log(error)
    }

    render() {
        const { passwd } = this.state;
        let xScore=0;
        const styles = {
            wrap: {
              width: 300,
            }};
        return (
            
            <div style={{direction:'row',width:"100%",height:"100vh",backgroundColor:"#29292B"}}>
                <div style={{textAlign:'center',justifyContent:"center",alignItems:"center"}}>
                    <div style={{height:"5vh"}}></div>
                    <h2 style={{color:"#FFB636",fontSize:"40px", fontWeight:"600"}}>Sign up</h2>
                    <div style={{height:"0.5vh"}}></div>
                    <a1 style={{color:"#FFB636",fontSize:"16px"}}>Please fill this form to create an account!</a1>
                </div>
                <div style={{alignItems:"center",paddingTop:'10px'}}>
                    <div style={{marginLeft:'35%'}}>
                        <div>
                            <a1 style={{ color: "#FFB636", fontSize: "16px" }} type="text">First Name</a1>
                            <a1 style={{ color: "#FFB636", fontSize: "16px", marginLeft: '18%' }} type="text">Last Name</a1>
                        </div>
                    </div>
                    <div style={{ direction: 'row' }}>
                        <div style={{ textAlig: 'left', marginLeft: '35%' }}>
                            <input style={{ marginTop: '10px', width: 200, height: 30, color: "black" }} type="text" name="first-name"
                                onChange={txt => this.setState({ firstname: txt.target.value })} />
                            <input style={{ marginTop: '10px', width: 200, height: 30, color: "black", marginLeft: '5%' }} type="text" name="last-name"
                                onChange={txt => this.setState({ lastname: txt.target.value })} />
                        </div>
                    </div>
                </div>
                <div style={{ alignItems: "center" }}>
                    <div style={{ marginLeft: '35%', direction: 'colunm', paddingTop: '0.5%' }}>
                        <div>
                            <a1 style={{ color: "#FFB636", fontSize: "16px" }} type="text">Username</a1>
                            <a1 style={{ color: "#FFB636", fontSize: "16px", marginLeft: '18.5%' }} type="text">Email</a1>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left', marginLeft: '35%', direction: 'row' }}>
                        <input style={{ marginTop: '10px', width: 200, height: 30, color: "black" }} type="text" name="username"
                            onChange={txt => this.setState({ username: txt.target.value })} />
                        <input style={{ marginTop: '10px', width: 200, height: 30, color: "black", marginLeft: '5%' }} type="text" name="email"
                            onChange={txt => this.setState({ email: txt.target.value })} />
                    </div>
                </div>
                <div style={{ alignItems: "center" }}>
                    <div style={{ marginLeft: '35%', paddingTop: '0.5%' }}>
                        <div>
                            <a1 style={{ color: "#FFB636", fontSize: "16px" }} type="text">Password</a1>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left', marginLeft: '35%' }}>
                        <input style={{ marginTop: '10px', width: 460, height: 30, color: "black" }} type="text" value ={passwd} name="password"
                            onChange={txt => this.setState({ passwd: txt.target.value })} />
                            <PasswordStrengthBar style={{width:459}}
                                    password={passwd}
                                    minLength={5}
                                    onChangeScore={(score, feedback) => {
                                    console.log(score, feedback)
                                    
                                    xScore=score
                                    console.log("from score(Default)",score)
                                    console.log("from xScore",xScore);
                                
                                    
                                    }}
                                />
                    </div>
                </div>
                <div style={{ alignItems: "center" }}>
                    <div style={{ marginLeft: '35%', paddingTop: '0.5%' }}>
                        <div>
                            <a1 style={{ color: "#FFB636", fontSize: "16px" }} type="text">Confirm Password</a1>
                        </div>
                    </div>
                    <div style={{ textAlign: 'left', marginLeft: '35%', }}>
                        <input style={{ marginTop: '10px', width: 460, height: 30, color: "black" }} type="text" name="password" />
                    </div>
                </div>
                <div style={{ alignItems: "center" }}>
                    <div style={{ marginLeft: '35%', paddingTop: '0.5%' }}>
                        <a1 style={{ color: "#FFB636", fontSize: "16px" }} type="text">Department</a1>
                    </div>
                    <div style={{ marginLeft: '35%', paddingTop: '0.5%' }}>
                        <input type="radio" value="Officer" name="department"
                            onChange={txt => this.setState({ department: 'Officer' })} /><label style={{ paddingLeft: '1%', paddingRight: '2%', color: '#FFB636' }}>Officer</label>
                        <input type="radio" value="Manager" name="department"
                            onChange={txt => this.setState({ department: 'Manager' })} /><label style={{ paddingLeft: '1%', paddingRight: '2%', color: '#FFB636' }}> Manager</label>
                        <input type="radio" value="Admin" name="department"
                            onChange={txt => this.setState({ department: 'Admin' })} /><label style={{ paddingLeft: '1%', paddingRight: '2%', color: '#FFB636' }}>Admin</label>
                    </div>
                </div>
                <div className="container" style={{ backgroundColor: '#29292B',textAlign:'center' }}>
                    <div className="form-group">

                        <div className="col mt-3">
                            <LoadCanvasTemplate />
                        </div>

                        <div className="col mt-3">
                            <div><input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input></div>
                        </div>

                        

                    </div>
                </div>
                <div style={{ marginLeft: '43.5%', paddingTop: '1%' }}>
                    <button style={{ width: 200, height: 50, borderRadius: '40px', fontSize: '22px', fontWeight: 'bold', color: '#000000', cursor: 'pointer', backgroundColor: '#FFB636' }}
                        onClick={()=>this.onAdd(xScore)}>
                        Sign up
                    </button>
                </div>
                <div style={{ marginLeft: '46.5%', paddingTop: '0.5%' }}>
                    <button style={{ width: 100, height: 40, borderRadius: '40px', fontSize: '16px', color: '#ffffff', cursor: 'pointer', backgroundColor: '#29292B' }}
                        onClick={() => { window.location.href = "/" }}>
                        Back
                    </button>
                </div>

                <div hidden={!this.state.modalfill}>
                    <div className="modal-backgroundfill" >
                        <div className="modal-cardfill">
                            <div style={{ textAlign: 'center', justifyContent: "center", alignItems: "center" }}>
                                <div style={{ paddingTop: 10 }}>
                                    <img className="picWarning" src={Warning} />
                                </div>

                                <a1 style={{ color: "#29292B", fontSize: "24px", fontWeight: "600" }}>Please complete the information.</a1>
                                <div style={{ height: "1vh" }}></div>
                            </div>
                            <div style={{ textAlign: 'center', paddingTop: "10px" }}>
                                <ButtonTry style={{ fontSize: 20 }} onClick={this.handleModalfillClose}>OK</ButtonTry>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sign_Up);

import React, { Component } from 'react'
import history from '../history'
import firestore from "../firebase/firestore"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import { DataGrid } from '@mui/x-data-grid';

import { connect } from 'react-redux';
import { addUser , editUser} from '../actions/userAction';
import { addProduct , deleteProduct} from '../actions/productAction';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'department', headerName: 'Department', width: 160 },
    { field: 'event',headerName: 'Event',width: 130,},
    { field: 'time',headerName: 'Time',type: 'time',width: 130,},
  ];
  
  const rows = [
    { id: 1,name: 'TTTT',department: 'Officer',event: 'Edit',time: '00:00' },
    { id: 2,name: 'Snong',department: 'Officer',event: 'Delete',time: '10:00' },
    { id: 3,name: 'Ping',department: 'Admin',event: 'Edit',time: '10:30' },
    { id: 4,name: 'May',department: 'Officer',event: 'Edit',time: '11:00' },
    { id: 5,name: 'May',department: 'Officer',event: 'Delete',time: '13:00' },
    { id: 6,name: 'Preeyaporn',department: 'Manager',event: 'Edit',time: '15:00' },
    { id: 7,name: 'Proramaporn',department: 'Officer',event: 'Edit',time: '15:45' },
    { id: 8,name: 'Prapassorn',department: 'Admin',event: 'Edit',time: '17:10' },
    { id: 9,name: 'Mew',department: 'Manager',event: 'Edit',time: '20:00' },
    { id: 10,name: 'Sniim',department: 'Manager',event: 'Delete',time: '21:00' },
    
  ];

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div id="container">
                <div class = "view1">
                <div style={{ width: '100%' ,height:'5vh' , backgroundColor:'#29292B'}} ></div>
                <div class='view' >
                    <h1 style={{color:'#FFB636'}}> PROMSHOP</h1>
                    <h5 style={{color:'#FFB636'}}> History</h5> 
                </div>
                <div style={{ width: '100%' ,height:'50vh'}}>
                <DataGrid className='cssStyle'
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[1]}
                />
                </div>
                <div class='view' ></div>
                <div style={{ width: '100%' ,height:'5vh' , backgroundColor:'#FFB636'}} ></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(History);

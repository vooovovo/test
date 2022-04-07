import React, { Component } from 'react'
import firebase from 'firebase';
import firestore from "../firebase/firestore"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import { DataGrid } from '@mui/x-data-grid';

import {FiLogOut} from "react-icons/fi";

import { connect } from 'react-redux';
import { addUser , editUser} from '../actions/userAction';
import { addProduct , deleteProduct} from '../actions/productAction';
//const db = firebase.firestore();
console.log("fern");

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age',headerName: 'Age',type: 'number',width: 90,},
    { field: 'fullName',headerName: 'Full name',description: 'This column has a value getter and is not sortable.',sortable: false,width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        //db.collection('User').get().then((snapshot)=>  {
        //    snapshot.forEach(doc=> {
         //       console.log(doc.data()); 
         //   });     
        //});
        
    }

    render() {
        return (
          
            <div id="container">
                <div class = "view1">
                <div style={{ width: '100%' ,height:'5vh' , backgroundColor:'#29292B'}} ></div>
                <div class='view' >
                    <h1 style={{color:'#FFB636'}}>View stock</h1> 
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
                <div style={{ width: '100%' ,height:'10vh' , backgroundColor:'#FFB636'}} ></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(View);

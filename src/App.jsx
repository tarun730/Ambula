// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './pages'
import Head from './pages/Head'
// import { Provider } from 'react-redux';
// import { useSelector } from 'react-redux';
// import {selectUser} from "./container/Store"
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@material-ui/core';
// import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // Paper,
} from '@material-ui/core';


  // const dispatch = useDispatch();


function App() {
  
  const [id, Setid] = useState()

  const [userDetails, setUserDetails] = useState({
    empid:"",
    Ename: '',
    age: '',
    Company: '',
  });

  const [employees, setemployees] = useState([]);
  const [EDit, setEDit] = useState("");

  // const [userDetails, setUserDetails] = useState({
  

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setUserDetails((prev) => ({
    ...prev,
    [name]: value,
  }));
};
const handleDelete=(id)=>{

  const filter = employees.filter((employee, index) => index !== id);
  setemployees( filter);

}

const handleEdit=(id)=>{
  setEDit(id)
  var updateuser=employees[id]
  setUserDetails(

    {
    empid:updateuser.empid,
    Ename: updateuser.Ename,
    age: updateuser.age,
    Company: updateuser.Company,
  }
 
  );

}
const handleSave = () => {

  // const isIdPresent = employees.some((employee,index) => index === EDit);


    setemployees([...employees, userDetails]);

  

 
  // setemployees([...employees, userDetails]);
  setUserDetails({
      empid:"",
      Ename: '',
      age: '',
      Company: '',
     
    });
 
};
  return (
    <>
   
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
       
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AMBULA
          </Typography>
     
             <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
      <Grid container justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" align="center" gutterBottom>
            User Details Form
          </Typography>
          <form>
            <TextField
             required
              fullWidth
              inputProps={{ inputMode: 'numeric' }}
              margin="normal"
              label="empid"
              name="empid"
              value={userDetails.empid}
              onChange={handleInputChange}
            />
            <TextField
             required
              fullWidth
              margin="normal"
              label="Ename"
              name="Ename"
              value={userDetails.Ename}
              onChange={handleInputChange}
            />
            <TextField
             required
              fullWidth
              margin="normal"
              label="Age"
              name="age"
              inputProps={{ inputMode: 'numeric' }}
              value={userDetails.age}
              onChange={handleInputChange}
            />
            <TextField
             error={false}
             required
              fullWidth
              margin="normal"
              label="Company"
              name="Company"
              type="Company"
              value={userDetails.Company}
              onChange={handleInputChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={()=>handleSave(EDit)}
              style={{ marginTop: '20px' }}
            >
              Save
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>




    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Empid</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.empid}</TableCell>
              <TableCell>{row.Ename}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.Company}</TableCell>
              <TableCell>
              <DeleteIcon onClick={()=>handleDelete(index)}/>
              <EditIcon onClick={()=>handleEdit(index)}/>
                
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </>
  )
}

export default App

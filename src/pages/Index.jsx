import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@material-ui/core';
// import { useDispatch } from 'react-redux';
// import { saveEmployee } from '../container/Store'
const Index = () => {
    // const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    empid:"",
    Ename: '',
    age: '',
    Company: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Dispatch the action to save employee
    dispatch(saveEmployee({ empid, age, Ename, company }));

    // Clear the form fields
    setUserDetails(
        {
            empid:"",
            Ename: '',
            age: '',
            Company: '',   
        }
    )
   
  };

  return (
    <Grid container justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" align="center" gutterBottom>
            User Details Form
          </Typography>
          <form>
            <TextField
              fullWidth
              margin="normal"
              label="empid"
              name="empid"
              value={userDetails.empid}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Age"
              name="age"
              value={userDetails.age}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={userDetails.Company}
              onChange={handleInputChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSave}
              style={{ marginTop: '20px' }}
            >
              Save
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Index;

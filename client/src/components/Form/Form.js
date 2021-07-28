import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createUsers, updateUsers } from '../../actions/users';

const Form = ({ currentId, setCurrentId }) => {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    mail: '',
    password: '',
  });
  const user = useSelector((state) =>
    currentId ? state.users.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateUsers(currentId, userData));
    } else {
      dispatch(createUsers(userData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setUserData({ name: '', age: '', mail: '', password: '' });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Redaguoti' : 'Sukurti'} vartotoja
        </Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Vardas"
          fullWidth
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <TextField
          name="age"
          variant="outlined"
          label="Amžius"
          fullWidth
          value={userData.age}
          onChange={(e) => setUserData({ ...userData, age: e.target.value })}
        />
        <TextField
          name="mail"
          variant="outlined"
          label="El. paštas"
          fullWidth
          value={userData.mail}
          onChange={(e) => setUserData({ ...userData, mail: e.target.value })}
        />
        <TextField
          name="password"
          variant="outlined"
          label="Slaptažodis"
          fullWidth
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Patvirtinti
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Išvalyti
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

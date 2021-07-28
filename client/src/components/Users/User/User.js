import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { deleteUsers } from '../../../actions/users';

const User = ({ user, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Vardas: {user.name}
        </Typography>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Amžius: {user.age}
        </Typography>
        <Typography className={classes.title} variant="h5" gutterBottom>
          El. paštas: {user.mail}
        </Typography>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Slaptažodis: {user.password}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            setCurrentId(user._id);
          }}
        >
          <EditIcon fontSize="small" /> Edit
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteUsers(user._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default User;

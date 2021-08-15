import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

let page = 1;
const itemsRege = 4;
let totalPage = Math.ceil(localStorage.length / itemsRege);

export default function PaginationControlled() {
  const classes = useStyles();
  const [page, setPage] = React.useState(2);
  const handleChange = (event, value) => {
    setPage(value);
  };
  //   allStorage();

  return (
    <div className={classes.root}>
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={totalPage} page={page} onChange={handleChange} />
    </div>
  );
}

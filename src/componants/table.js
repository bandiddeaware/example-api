import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

let interval_

export default function BasicTable(props) {
  const { store } = props
  const classes = useStyles();

  const [rows, setrows ] = React.useState([])

  React.useEffect(() => {
    
    interval_ = setInterval(() => {
      var data = store.getState().PersonCard
      if (data !== undefined){
        setrows(Object.assign([], data))
      }
    }, 100);

    return () => {
      clearInterval(interval_)
    }
  }, [store])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">surname</TableCell>
            <TableCell align="right">id_card</TableCell>
            <TableCell align="right">company</TableCell>
            <TableCell align="right">card_number</TableCell>
            <TableCell align="right">expire</TableCell>
            <TableCell align="right">is_accept_mine</TableCell>
            <TableCell align="right">is_accept_mine</TableCell>
            <TableCell align="right">is_working</TableCell>
            <TableCell align="right">rfid_link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.surname}</TableCell>
              <TableCell align="right">{row.id_card}</TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.card_number}</TableCell>
              <TableCell align="right">{row.expire}</TableCell>
              <TableCell align="right">{(row.is_accept_mine ? "True": "False")}</TableCell>
              <TableCell align="right">{(row.is_accept_mine ? "True": "False")}</TableCell>
              <TableCell align="right">{(row.is_working ? "True": "False")}</TableCell>
              <TableCell align="right">{(row.rfid_link ? "True": "False")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
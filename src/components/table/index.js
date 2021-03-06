import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import TheatersIcon from '@material-ui/icons/Theaters';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { Link, Button } from '@material-ui/core';
import { useState } from 'preact/hooks';
import Dropdown from './../dropdown';
import format from 'date-fns/format';
import style from './style';
import { vCalendarUrl, googleCalendarUrl, vCalHandler } from '../../utils/calendar';
import { googleMapsUrl, appleMapsUrl } from '../../utils/maps';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
  { id: 'venue', numeric: false, disablePadding: false, label: 'Venue' },
  { id: 'location', numeric: false, disablePadding: false, label: 'Location' },
  { id: 'calendar', numeric: true, disablePadding: false, label: null },
  { id: 'tickets', numeric: true, disablePadding: false, label: null },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('date');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = props.rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.rows.length}
            />
            <TableBody>
              {stableSort(props.rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isItemSelected = isSelected(row.name);

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell className={props.type === 'past' ? style.pastDate : ''}>{`${format(new Date(row.datetime), 'EEE, do MMM, yyyy')}`}</TableCell>
                      <TableCell align="left">
                        <Dropdown iconClass={style.icon} colName='venue' buttonText={row.venue} menuItems={[
                          {
                            text: 'Google Maps',
                            url: googleMapsUrl(`${row.venue}, ${row.city}, ${row.country}`),
                            target: '_blank',
                          },
                          {
                            text: 'Apple Maps',
                            url: appleMapsUrl(row.latitude, row.longitude),
                          },
                        ]} />
                      </TableCell>
                      <TableCell align="left">
                        <Dropdown iconClass={style.icon} colName='location' buttonText={`${row.city}, ${row.country}`} menuItems={[
                          {
                            text: 'Google Maps',
                            url: googleMapsUrl(`${row.venue}, ${row.city}, ${row.country}`),
                            target: '_blank',
                          },
                          {
                            text: 'Apple Maps',
                            url: appleMapsUrl(row.latitude, row.longitude),
                          },
                        ]} />
                      </TableCell>
                      <TableCell>
                        {props.type !== 'past' ?
                          <Dropdown iconClass={style.icon} colName='calendar' buttonText="Add to Calendar" handler={vCalHandler} menuItems={[
                            {
                              text: 'Google',
                              url: googleCalendarUrl(row),
                              target: '_blank',
                            },
                            {
                              text: 'Apple',
                              url: vCalendarUrl(row),
                            },
                            {
                              text: 'Outlook',
                              url: vCalendarUrl(row),
                            },
                          ]} />
                          : '-'
                        }
                      </TableCell>
                      <TableCell>
                        <Link
                          href={row.url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Button>
                            <EventAvailableIcon className={style.icon} color="primary" />
                            {props.type !== 'past' ?
                              'RSVP'
                              : 'I Was There'
                            }
                          </Button>
                        </Link>
                        {row.ticketsUrl ?
                          <Link
                            href={row.ticketsUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                            className={style.ticketsLink}
                          >
                            <Button>
                              <TheatersIcon color="primary" className={style.icon} />
                              Tickets
                            </Button>
                          </Link>
                          : null
                        }
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

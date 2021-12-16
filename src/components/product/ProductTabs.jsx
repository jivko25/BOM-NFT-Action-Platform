import styles from './ProductTabs.module.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import User from '../user/User';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatDistance, parseISO } from 'date-fns';
import Spacer from '../spacer/Spacer';

export default function ProductTabs({text = '', bids = []}) {
  const [value, setValue] = React.useState('details');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles["product-tabs"]}> 
    <Box xs={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Details" value="details" className={styles["tab-details"]}/>
            <Tab label="Bids" value="bids"  className={styles["tab-bids"]} />
          </TabList>
        </Box>
        <TabPanel value="details">
            <p>{text}</p>
        </TabPanel>
        <TabPanel value="bids">
          {bids.length > 0 ?
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {
            bids.sort((a, b) => b.amount - a.amount).map((user, i) => (
              <TableRow key={i} className={`table-row-${i}`}>
              <TableCell align="right">
                <User name = {user.user.name} verified = {user.user.verified} avatar = {user.user.avatar}/>
              </TableCell>
              <TableCell align="right">{user.amount}</TableCell>
              <TableCell align="right">{
                formatDistance(
                  Date.now(),
                  parseISO(user.date),
                  { includeSeconds: true }
                  )
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
            </TableContainer>
            :
            <Spacer item="Bids" variant="h2"/>
        }
        </TabPanel>
      </TabContext>
    </Box>
    </div> 
  );
}
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Row from './rows.js'

import { Container,Menu,LinkMenu } from "./style";
import { useEffect,useState } from "react";
import apiPierBurguer from "../../../services/api.js";
import status from './order-status.js';

function Orders(){
  const [orders,setOrders] = useState([])
  const [Filterorders,setFilterOrders] = useState([])
  const [rows,setRows] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiPierBurguer.get('orders')
      setOrders(data) // Atualizando o useState

    }

    loadOrders() // Chamando a funçao para q ela possa ser executado
  }, [])



  function createData(order) { 
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products
    };
  }

  useEffect(() => {
    const newRows = orders.map(ord => createData(ord))
    setRows(newRows)
  },[orders])

  function handleStatus(status){
    if(status.id === 1){
      setFilterOrders(orders)
    }else{
      const newOrders = orders.filter(order => order.status === status.value )
      setFilterOrders(newOrders)
    }

  }

  return(
    <Container>
      <Menu>
        {status && status.map(status => (
          <LinkMenu onClick={() => handleStatus(status)} >
          {status.label}
        </LinkMenu>
        ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedidos</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}


export default Orders
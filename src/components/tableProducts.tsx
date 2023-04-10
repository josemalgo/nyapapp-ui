import { type Props } from '../types'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const TableProducts: React.FC<Props> = ({ products }) => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Products</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">Brand</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Stock</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.slice(1, 10).map((product) => (
          <TableRow
            key={product.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {product.title}
            </TableCell>
            <TableCell align="right">{product.description}</TableCell>
            <TableCell align="right">{product.brand}</TableCell>
            <TableCell align="right">{product.price}</TableCell>
            <TableCell align="right">{product.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TableProducts

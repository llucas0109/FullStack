import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const listLinks = [
  { 
  id: 1,
  label: 'Pedidos',
  link: '/pedidos',
  icon: ShoppingBagIcon
  },
  { 
  id: 2,
  label: 'Listar Produtos',
  link: '/listar-pedidos',
  icon: ShoppingCartIcon
  },
  { 
  id: 3,
  label: 'Novo Produto',
  link: '/novo-produto',
  icon: AddShoppingCartIcon
  }
]  

export default listLinks
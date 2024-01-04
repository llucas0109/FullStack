import { Container,ItemConteiner,ListLink,LogoutIconQuit } from './style.js'
import listLinks from './menu-list.js'
import LogoutIcon from '@mui/icons-material/Logout';
import { Logout } from '@mui/icons-material';
import { useUser } from "../../hooks/UserContext.js"
import PropTypes from 'prop-types'


const SideMenuAdmin = ({path}) => {
  const { Logout } = useUser()
  return(
    <Container>
      <hr></hr>
      {listLinks.map(item => (
      <ItemConteiner key={item.id} $isActive={path === item.link}>
        <item.icon className='icon' />
        <ListLink to={item.link}>
          {item.label}
        </ListLink>
      </ItemConteiner>
      ))}
      <hr></hr>
      <ItemConteiner style={{ position: 'absolute', bottom : '30px' }} >
        <LogoutIconQuit />
        <ListLink to={'/login'} onClick={Logout} >Sair</ListLink>
      </ItemConteiner>
    </Container>  
    
  )
}

export default SideMenuAdmin

SideMenuAdmin.propTypes = {
    path: PropTypes.string
}
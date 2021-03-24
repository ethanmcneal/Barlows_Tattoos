import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
    return(
        <Menu inverted>
            <Link to='/'>
            <Menu.Item >
                Home
            </Menu.Item>
            </Link>
            <Link to='/about'>
            <Menu.Item >
                About
            </Menu.Item>
            </Link>
            <Link to='/styled'>
            <Menu.Item >
                Style Components
            </Menu.Item>
            </Link>
            <Menu.Menu position='right'>
                <Link to='/register'>
                <Menu.Item>
                Register
                </Menu.Item>
                </Link>

            </Menu.Menu>
        </Menu>
    )
}

export default NavBar
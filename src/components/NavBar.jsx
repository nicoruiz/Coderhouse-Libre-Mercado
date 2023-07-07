import logo from '../logo-lm.png';
import CartWidget from './CartWidget';
import styles from './NavBar.module.scss';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const sections = [
    {
        name: "Inicio",
        path: "/"
    },
    {
        name: "Vehículos",
        path: "/category/vehicles"
    },
    {
        name: "Electrónica",
        path: "/category/electronic"
    },
    {
        name: "Libros",
        path: "/category/books"
    }
]

const NavBar = () => {
    return (
        <Breadcrumb className={styles.navBar} spacing=".5rem" separator={''}>
            <BreadcrumbLink as={RouterLink} to="/">
                <img src={logo} height={70} width={180} style={{ marginRight: '.7rem' }} alt="logo" />
            </BreadcrumbLink>

            <Box className={styles.navBarSections}>
                {sections.map((section) => (
                    <BreadcrumbItem>
                        <BreadcrumbLink as={RouterLink} to={section.path}>
                            {section.name}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
            </Box>


            <BreadcrumbItem>
                <CartWidget />
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default NavBar;
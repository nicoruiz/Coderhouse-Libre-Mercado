import logo from '../logo-lm.png';
import CartWidget from './CartWidget';
import styles from './NavBar.module.scss';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react';

const NavBar = () => {
    return (
        <Breadcrumb className={styles.navBar} spacing=".5rem" separator={'-'}>
            <BreadcrumbItem isCurrentPage>
                <img src={logo} height={70} width={180} style={{ marginRight: '.7rem' }} alt="logo" />
                <BreadcrumbLink href='#/home'>Inicio</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#/profile'>Mi Perfil</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#/about'>Sobre Nosotros</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <CartWidget />
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default NavBar;
import React from 'react';
import { styles } from '../styles';

const Header = () => {
    return (
        <div style={styles.HeaderContainer}>
        <h1 style={styles.Header}>Stay up to date with ecommerce trends with Shopify's newsletter</h1>
        <hr style={styles.Rule}/>
    </div>
    );
};

export default Header;
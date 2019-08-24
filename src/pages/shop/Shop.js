import React from 'react';

import SHOP_DATA from './shop.data'

import './shop.scss';

class Shop extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }

    }

    render() {
        return();

    }
}

export default Shop;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Layout.less';
import { Header, Footer } from '../../components/Navigation';

class Layout extends Component {
    render() {
        return (
            <div className="main-container">
                <Header userName="orassayag@gmail.com" />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node
  };

export default Layout;
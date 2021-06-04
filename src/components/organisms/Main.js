import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
const Main = (props) =>{
    return(
        <div>
            <Header></Header>
            <Menu></Menu>
            {props.children}
            <Footer></Footer>
        </div>
    );
}
export default Main;
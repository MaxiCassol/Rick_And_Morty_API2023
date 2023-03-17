import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import {Link} from "react-router-dom";


class Nav extends React.Component {
    

    render(){
        return(
            <div className={style.nav}>
                <Link to="/home">
                    <h3>HOME</h3>
                </Link>
                <Link to="/about">
                    <h3>ABOUT</h3>
                </Link>
                <SearchBar onSearch={this.props.onSearch} />
            </div>    
        );
    }

}

export default Nav;
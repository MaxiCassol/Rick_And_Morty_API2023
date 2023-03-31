import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import {Link} from "react-router-dom";
import titulo from "./logo.png"


class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={style.nav}>
                <Link to="/home">
                    <img src={titulo} width= "90px" height="80px" alt="" />
                </Link>
                <Link to="/home">
                    <h3>HOME</h3>
                </Link>
                <Link to="/about">
                    <h3>ABOUT</h3>
                </Link>
                <Link to="/favorites">
                    <h3>FAVORITES</h3>
                </Link>
                <Link to="/allCharacters">
                    <h3>ALL CHARACTERS</h3>
                </Link>
                <SearchBar onSearch={this.props.onSearch} />
            </div>    
        );
    }

}

export default Nav;
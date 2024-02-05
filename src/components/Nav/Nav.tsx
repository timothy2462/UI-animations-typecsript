import React, { CSSProperties } from "react";
import "./Nav.scss";
import logo from "../../assets/logo.png";
import {ReactComponent as Bar} from '../../assets/hamburger.svg'
import {ReactComponent as Search} from '../../assets/search.svg'
function Nav() {
  const style:  CSSProperties  = {
    display:"flex"
  };
  return (
    <div className="nav-container" data-testid="navbar">
      <div style={{...style}}>
        <div className="logo">
          <img src={logo} width={135} height={46} />
        </div>
        <div className="search">
        <div className="icon">
          <Search/>
        </div>
          <input type="search" placeholder="suche"/>
        </div>
      </div>
      <div className="content">
        <Bar style={{alignSelf:'center', width:50,height:50}}/>
      </div>
    </div>
  );
}

export default Nav;

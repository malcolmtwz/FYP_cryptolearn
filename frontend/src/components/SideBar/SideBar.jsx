import React from 'react';
import './SideBar.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  
  return (
    <div className="sidebar-container">
      <CDBSidebar textColor="#fff" backgroundColor="#333" className="sidebar">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/notes" className="text-decoration-none" style={{ color: 'inherit' }}>
            Tutorial
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/notes" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='th-large' >Introduction</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/caesar" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='table' >Caesar Cipher</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/beaufort" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='table' >Beaufort Cipher</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/vig" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='table' >Vigenere Cipher</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/column" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='table' >Columnar Transposition Cipher</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/secret" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='user' >Secret Key Cryptography</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/public" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='chart-line' >Public Key Cryptography</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hash" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='sticky-note' >Hash Functions</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter className="sidebar-footer">
          Tutorial
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;
import React from 'react';
import { Button } from './../buttons/button.style';
import { Header as HeaderStyle } from './header.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navLists: ['Home', 'Pricing', 'Our Service', 'Features', 'Contact'],
      active: 0,
      navMobile: false,
    };
    this.handleListClick = this.handleListClick.bind(this);
  }
  handleListClick(active) {
    this.setState({ active });
  }
  render() {
    const { navLists, active } = this.state;
    return (
      <HeaderStyle>
        <div className="header">
          <div className="nav-mobile-wrapper">
            <div
              className="hamburger"
              onClick={() => {
                const navMobile = this.state.navMobile;
                this.setState({ navMobile: !navMobile });
              }}>
              <FontAwesomeIcon icon="bars" />
            </div>
            {this.state.navMobile && (
              <ul className="nav-mobile">
                <li>
                  <input
                    type="text"
                    value=""
                    className="search"
                    placeholder="&#128269; search"
                  />
                </li>
                {navLists.map((li, ind) => {
                  return (
                    <li
                      key={ind}
                      onClick={() => {
                        this.handleListClick(ind);
                      }}
                      className={`nav-mobile-item ${
                        ind === active ? 'active' : ''
                      }`}>
                      {li}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="navbar-brand">AlertWeb</div>
          <ul className="nav">
            {navLists.map((li, ind) => {
              return (
                <li
                  key={ind}
                  onClick={() => {
                    this.handleListClick(ind);
                  }}
                  className={`nav-item ${ind === active ? 'active' : ''}`}>
                  {li}
                </li>
              );
            })}
          </ul>
          <div>
            <Button>Login</Button>
          </div>
        </div>
      </HeaderStyle>
    );
  }
}

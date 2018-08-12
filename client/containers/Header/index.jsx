import React, { Component } from 'react';
import classNames from 'classnames';

import ModalNav from '../ModalNav';
import { HamburgerCross } from '../../widgets/icons/icons';
import { headerNav } from '../../info.json';

import './index.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
    this.toggleExpandedState = this.toggleExpandedState.bind(this);
  }

  render() {
    const cls = classNames({
      header: true,
      'header--transparent': true,
      'header--expanded': this.state.isExpanded,
    });

    return (
      <header className={cls}>
        <nav
          className="header__icon header__falafel"
          onClick={this.toggleExpandedState}
        >
          {
            __CLIENT__ && <HamburgerCross ref={(e) => { this.btn = e; }} />
          }
        </nav>
        <ModalNav
          isExpanded={this.state.isExpanded}
          buttons={headerNav}
          toggleExpandedState={this.toggleExpandedState}
        />
      </header>);
  }

  toggleExpandedState() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
    this.btn && this.btn.toggle();
  }
}
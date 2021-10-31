import React from "react";
import logo from '../../images/logo.svg';

export default function Header() {
  return (
		<header className="header">
			<a href="#"><img src={logo} alt="логотип" className="header__logo link-hover"/></a>
		</header>
  );
}
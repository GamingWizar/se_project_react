import React from "react";

import "../blocks/Footer.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer page__section">
        <p className="footer__text">Developed by Carver Hannasch</p>
        <p className="footer__text">2024</p>
      </footer>
    );
  }
}

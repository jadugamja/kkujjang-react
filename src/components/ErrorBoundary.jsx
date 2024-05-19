import React from "react";
import PropTypes from "prop-types";
import WebModal from "./Web/Shared/Modal/WebModal";
import GameModal from "./Game/Shared/GameModal";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, isOpen: false };

    this.setIsOpen = this.setIsOpen.bind(this);
  }

  setIsOpen() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    this.setState({ error, isOpen: true });
  }

  render() {
    const { path = "/web" } = this.props;

    if (this.state.hasError) {
      if (this.props.path === "/game") {
        return (
          <GameModal type="error" isOpen={this.state.isOpen} setIsOpen={this.setIsOpen}>
            {this.state.error.message}
          </GameModal>
        );
      } else {
        return (
          <WebModal isOpen={this.state.isOpen} setIsOpen={this.setIsOpen}>
            {this.state.error.message}
          </WebModal>
        );
      }
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node
};

export default ErrorBoundary;

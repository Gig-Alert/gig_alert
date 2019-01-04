import React from "react";
import { Button } from "react-bootstrap";
import "./loaderButton.css";

const LoaderButton = props => ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) => (
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {/* {isLoading && <Glyphicon glyph="refresh" className="spinning" />} */}
    {!isLoading ? text : loadingText}
  </Button>
);

export default LoaderButton;

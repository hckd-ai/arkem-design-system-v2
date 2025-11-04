import React from "react";
import "./Field.css";

export interface FieldProps {
  label: string;
  value: string;
  className?: string;
}

export const Field: React.FC<FieldProps> = ({
  label,
  value,
  className,
}) => {
  const classes = ["arkem-field", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <div className="arkem-field__label">{label}</div>
      <div className="arkem-field__value">{value}</div>
    </div>
  );
};


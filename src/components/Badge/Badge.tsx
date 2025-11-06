import React from "react";
import "./Badge.css";

export type BadgeVariant = "admin" | "user";

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "user",
  children,
  className,
}) => {
  const classes = ["arkem-badge", className].filter(Boolean).join(" ");

  return (
    <span className={classes} data-variant={variant}>
      {children}
    </span>
  );
};


import React from "react";
import * as Lucide from "lucide-react";
import "./HeaderXs.css";

export interface HeaderXsProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  leadingIcon?: boolean;
  icon?: keyof typeof Lucide;
  className?: string;
}

const defaultIcons: Record<NonNullable<HeaderXsProps["variant"]>, keyof typeof Lucide> = {
  default: "Info",
  success: "CheckCircle2",
  warning: "AlertTriangle",
  error: "XCircle",
  info: "Info",
};

export const HeaderXs: React.FC<HeaderXsProps> = ({
  children,
  variant = "default",
  leadingIcon = false,
  icon,
  className,
}) => {
  const classes = ["arkem-header-xs", className]
    .filter(Boolean)
    .join(" ");
  
  const IconComponent = leadingIcon
    ? ((icon ? Lucide[icon] : Lucide[defaultIcons[variant]]) as React.ComponentType<{ strokeWidth?: number }>)
    : null;

  return (
    <div className={classes} data-variant={variant}>
      {leadingIcon && IconComponent && (
        <div className="arkem-header-xs__icon" aria-hidden="true">
          <IconComponent strokeWidth={2} />
        </div>
      )}
      <h3 className="arkem-header-xs__text">{children}</h3>
    </div>
  );
};


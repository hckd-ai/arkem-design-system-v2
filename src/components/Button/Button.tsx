import React from "react";
import * as Lucide from "lucide-react";
import "./Button.css";

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  hierarchy?: "primary" | "secondary" | "mode";
  tone?: "black" | "grey" | "color";
  state?: "default" | "hover" | "focused" | "disabled";
  function?: "feature" | "action" | "close";
  showText?: boolean;
  iconLeading?: boolean; // Show/hide leading icon
  iconTrailing?: boolean; // Show/hide trailing icon
  leadingIconName?: keyof typeof Lucide;
  trailingIconName?: keyof typeof Lucide;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
  // Story-only control
  forcedState?: "default" | "hover" | "focused" | "disabled";
}

/**
 * Derives hierarchy from size if not explicitly provided
 */
function getHierarchy(size?: ButtonProps["size"], explicitHierarchy?: ButtonProps["hierarchy"]): "secondary" | "primary" | "mode" {
  if (explicitHierarchy) {
    return explicitHierarchy;
  }
  if (size === "sm" || size === "md") {
    return "secondary";
  }
  return "primary";
}

export const Button: React.FC<ButtonProps> = ({
  size = "md",
  hierarchy,
  tone = "grey",
  state = "default",
  function: buttonFunction,
  showText = true,
  iconLeading = true,
  iconTrailing = false,
  leadingIconName,
  trailingIconName,
  leadingIcon,
  trailingIcon,
  fullWidth,
  disabled,
  className,
  children,
  onClick,
  ariaLabel,
  forcedState,
  ...rest
}) => {
  const effectiveHierarchy = getHierarchy(size, hierarchy);
  
  // Mode hierarchy enforces black tone
  const effectiveTone = effectiveHierarchy === "mode" ? "black" : tone;

  // Use state if provided, otherwise fall back to forcedState for backward compatibility
  const effectiveState = state !== "default" ? state : forcedState;

  // Dynamic Lucide icon resolution
  const LeadingIcon = leadingIconName ? Lucide[leadingIconName] : null;
  const TrailingIcon = trailingIconName ? Lucide[trailingIconName] : null;

  // Visibility and layout
  const hasLabel = !!children && showText !== false;
  const showLeading = !!(LeadingIcon || leadingIcon) && iconLeading === true;
  const showTrailing = !!(TrailingIcon || trailingIcon) && iconTrailing === true;
  const hasAnyIcon = showLeading || showTrailing;
  const iconOnly = hasAnyIcon && !hasLabel;

  const classes = ["arkem-btn", fullWidth && "is-fullwidth", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
      data-size={size}
      data-tone={effectiveTone}
      data-hierarchy={effectiveHierarchy}
      data-function={buttonFunction}
      data-forced-state={effectiveState && effectiveState !== "default" ? effectiveState : undefined}
      data-icon-only={iconOnly ? "true" : undefined}
      data-has-leading={showLeading ? "true" : "false"}
      data-has-trailing={showTrailing ? "true" : "false"}
      aria-label={ariaLabel || (iconOnly && children ? String(children) : undefined)}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {showLeading && (
        <span className="arkem-btn__icon arkem-btn__icon--lead" aria-hidden="true">
          {LeadingIcon ? <LeadingIcon strokeWidth={2} /> : leadingIcon}
        </span>
      )}
      {hasLabel && <span className="arkem-btn__label">{children}</span>}
      {showTrailing && (
        <span className="arkem-btn__icon arkem-btn__icon--trail" aria-hidden="true">
          {TrailingIcon ? <TrailingIcon strokeWidth={2} /> : trailingIcon}
        </span>
      )}
    </button>
  );
};


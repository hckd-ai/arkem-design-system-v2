import React from "react";
import * as Lucide from "lucide-react";
import { Field } from "../Field/Field";
import { HeaderXs } from "../HeaderXs/HeaderXs";
import "./Toast.css";

export interface ToastDataItem {
  label: string;
  value: string;
}

export type ToastVariant = "default" | "success" | "warning" | "error" | "info";

export interface ToastProps {
  title?: string;
  message?: string;
  data?: ToastDataItem[];
  variant?: ToastVariant;
  hasTitle?: boolean;
  hasMessage?: boolean;
  hasData?: boolean;
  leadingIcon?: boolean;
  dataRows?: number;
  showCloseIcon?: boolean;
  onClose?: () => void;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  title = "Pattern Detected",
  message = "Same 2 devices appear across 3 burglary scenes within 5 hours.",
  data = [
    { label: "BEHAVIOUR", value: "Repetitive route transversal and synchronized dwell." },
    { label: "ROUTE OVERLAP", value: "3/4 Incidents" },
    { label: "TIME RANGE", value: "11:00 PM - 3:00 AM" },
  ],
  variant = "default",
  hasTitle = true,
  hasMessage = true,
  hasData = true,
  leadingIcon = false,
  dataRows,
  showCloseIcon = false,
  onClose,
  className,
}) => {
  const classes = ["arkem-toast", className].filter(Boolean).join(" ");
  
  // Slice data array based on dataRows if provided (0-3)
  // If dataRows is undefined or null, show all data; otherwise respect the limit
  const displayData = dataRows !== undefined && dataRows !== null 
    ? (dataRows > 0 ? data.slice(0, Math.min(dataRows, 3)) : [])
    : data;

  // Determine if separator is the last element (title only case)
  const hasContentAfterTitle = (hasMessage && message) || (hasData && displayData.length > 0);
  const isSeparatorLast = hasTitle && title && !hasContentAfterTitle;

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={classes}
      data-variant={variant}
      data-separator-last={isSeparatorLast}
      role="alert"
      aria-live={variant === "error" ? "assertive" : "polite"}
      aria-atomic="true"
    >
      {showCloseIcon && (
        <button
          className="arkem-toast__close"
          onClick={handleClose}
          aria-label="Close"
          type="button"
        >
          <Lucide.X size={16} strokeWidth={2} />
        </button>
      )}
      {hasTitle && title && (
        <div className="arkem-toast__header">
          <HeaderXs variant={variant} leadingIcon={leadingIcon}>
            {title}
          </HeaderXs>
        </div>
      )}
      {hasTitle && title && (
        <div className={`arkem-toast__separator ${isSeparatorLast ? "arkem-toast__separator--last" : ""}`} />
      )}
      {hasMessage && message && (
        <div className="arkem-toast__message-section">
          <div className="arkem-toast__message">{message}</div>
        </div>
      )}
      {hasMessage && message && hasData && displayData.length > 0 && (
        <div className="arkem-toast__separator" />
      )}
      {hasData && displayData.length > 0 && (
        <div className="arkem-toast__data-section">
          <div className="arkem-toast__data">
            {displayData.map((item, index) => (
              <Field key={index} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

import React from "react";
import * as Lucide from "lucide-react";
import "./Checkbox.css";

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  id?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
  checked = false,
  indeterminate = false,
  onCheckedChange,
  disabled = false,
  ariaLabel,
  className,
  id,
}, ref) => {
  const internalRef = React.useRef<HTMLInputElement>(null);
  
  // Merge refs: use external ref if provided, otherwise use internal
  const inputRef = React.useCallback(
    (node: HTMLInputElement | null) => {
      internalRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
      }
    },
    [ref]
  );

  React.useEffect(() => {
    const node = internalRef.current;
    if (node) {
      node.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onCheckedChange) {
      onCheckedChange(e.target.checked);
    }
  };

  const classes = ["arkem-checkbox", className].filter(Boolean).join(" ");

  return (
    <div className={classes} data-checked={checked} data-indeterminate={indeterminate} data-disabled={disabled}>
      <input
        ref={inputRef}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        aria-label={ariaLabel}
        className="arkem-checkbox__input"
      />
      <span className="arkem-checkbox__indicator" aria-hidden="true">
        {indeterminate ? (
          <Lucide.Minus size={16} strokeWidth={2.5} />
        ) : checked ? (
          <Lucide.Check size={16} strokeWidth={2.5} />
        ) : null}
      </span>
    </div>
  );
});

Checkbox.displayName = "Checkbox";


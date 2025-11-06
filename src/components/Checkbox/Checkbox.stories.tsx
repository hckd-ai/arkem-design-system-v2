// src/components/Checkbox/Checkbox.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import React from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    backgrounds: { default: "arkem-base" },
    docs: {
      description: {
        component: `# Checkbox

Checkboxes allow users to select one or more options from a set. They support checked, unchecked, and indeterminate states.

## Features

- **Three states**: Checked, unchecked, and indeterminate (for "select all" scenarios)
- **Accessibility**: Full ARIA support, keyboard navigation, and screen reader friendly
- **Token-based styling**: All styles use design tokens (no hardcoded values)
- **Ref forwarding**: Supports ref forwarding for programmatic control
- **Visual indicators**: Check icon for checked, Minus icon for indeterminate

## Usage

Checkboxes are perfect for:
- Multi-select lists
- Form inputs
- "Select all" functionality (using indeterminate state)
- Permission toggles
- Feature flags

The indeterminate state is particularly useful for header checkboxes in tables where some (but not all) items are selected.`,
      },
    },
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
      table: {
        category: "State",
      },
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the checkbox is in indeterminate state (for 'select all' scenarios)",
      table: {
        category: "State",
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
      table: {
        category: "State",
      },
    },
    onCheckedChange: {
      action: "checkedChanged",
      description: "Callback function when checkbox state changes",
      table: {
        category: "Events",
      },
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for screen readers",
      table: {
        category: "Accessibility",
      },
    },
    id: {
      control: "text",
      description: "HTML id attribute",
      table: {
        category: "Advanced",
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: {
        category: "Advanced",
      },
    },
  },
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
    ariaLabel: "Checkbox",
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Playground story - interactive with all controls
export const Playground: Story = {};

// Unchecked state
export const Unchecked: Story = {
  args: {
    checked: false,
    ariaLabel: "Unchecked checkbox",
  },
};

// Checked state
export const Checked: Story = {
  args: {
    checked: true,
    ariaLabel: "Checked checkbox",
  },
};

// Indeterminate state (for "select all" scenarios)
export const Indeterminate: Story = {
  args: {
    checked: false,
    indeterminate: true,
    ariaLabel: "Indeterminate checkbox",
  },
};

// Disabled unchecked
export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    ariaLabel: "Disabled unchecked checkbox",
  },
};

// Disabled checked
export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    ariaLabel: "Disabled checked checkbox",
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        checked={checked}
        onCheckedChange={setChecked}
        ariaLabel="Interactive checkbox"
      />
    );
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox checked={false} ariaLabel="Unchecked" />
        <span style={{ color: "var(--semantic-text-primary)" }}>Unchecked</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox checked={true} ariaLabel="Checked" />
        <span style={{ color: "var(--semantic-text-primary)" }}>Checked</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox checked={false} indeterminate={true} ariaLabel="Indeterminate" />
        <span style={{ color: "var(--semantic-text-primary)" }}>Indeterminate</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox checked={false} disabled={true} ariaLabel="Disabled unchecked" />
        <span style={{ color: "var(--semantic-text-muted)" }}>Disabled Unchecked</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox checked={true} disabled={true} ariaLabel="Disabled checked" />
        <span style={{ color: "var(--semantic-text-muted)" }}>Disabled Checked</span>
      </div>
    </div>
  ),
};

// In context - checkbox list
export const InContext: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string[]>([]);
    
    const items = [
      { id: "1", label: "Enable notifications" },
      { id: "2", label: "Enable email alerts" },
      { id: "3", label: "Enable SMS alerts" },
    ];

    const toggleItem = (id: string) => {
      setSelected((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    };

    const allSelected = selected.length === items.length;
    const someSelected = selected.length > 0 && !allSelected;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "250px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingBottom: "8px", borderBottom: "1px solid var(--semantic-border-subtle)" }}>
          <Checkbox
            checked={allSelected}
            indeterminate={someSelected}
            onCheckedChange={(checked) => {
              setSelected(checked ? items.map((item) => item.id) : []);
            }}
            ariaLabel="Select all"
          />
          <span style={{ color: "var(--semantic-text-primary)", fontWeight: "var(--font-weight-medium)" }}>
            Select all
          </span>
        </div>
        {items.map((item) => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Checkbox
              checked={selected.includes(item.id)}
              onCheckedChange={() => toggleItem(item.id)}
              ariaLabel={item.label}
            />
            <span style={{ color: "var(--semantic-text-primary)" }}>{item.label}</span>
          </div>
        ))}
      </div>
    );
  },
};

// Table header example (indeterminate state)
export const TableHeaderExample: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string[]>([]);
    
    const users = [
      { id: "1", name: "Sarah Chen" },
      { id: "2", name: "Marcus Johnson" },
      { id: "3", name: "Emily Rodriguez" },
    ];

    const allSelected = selected.length === users.length;
    const someSelected = selected.length > 0 && !allSelected;

    return (
      <div style={{ minWidth: "300px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--semantic-border-subtle)" }}>
              <th style={{ padding: "12px", textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Checkbox
                    checked={allSelected}
                    indeterminate={someSelected}
                    onCheckedChange={(checked) => {
                      setSelected(checked ? users.map((u) => u.id) : []);
                    }}
                    ariaLabel="Select all users"
                  />
                  <span style={{ color: "var(--semantic-text-secondary)", fontSize: "var(--fonts-semantic-xs)", textTransform: "uppercase" }}>
                    User
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: "1px solid var(--semantic-border-subtle)" }}>
                <td style={{ padding: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Checkbox
                      checked={selected.includes(user.id)}
                      onCheckedChange={() => {
                        setSelected((prev) =>
                          prev.includes(user.id)
                            ? prev.filter((id) => id !== user.id)
                            : [...prev, user.id]
                        );
                      }}
                      ariaLabel={`Select ${user.name}`}
                    />
                    <span style={{ color: "var(--semantic-text-primary)" }}>{user.name}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};


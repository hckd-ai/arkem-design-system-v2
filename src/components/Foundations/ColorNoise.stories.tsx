// src/components/Foundations/ColorNoise.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import "../../styles/tokens.css";
import "../../styles/tokens-semantic.css";

const meta: Meta = {
  title: "Foundations/Color Noise Audit",
  parameters: {
    layout: "padded",
    backgrounds: { default: "arkem-base" },
    docs: {
      description: {
        component: `# Color Noise Audit (Arkem)

Reduce brand-yellow to semantic moments only.

## Allowed Brand Uses

Brand yellow (\`--semantic-brand-base\`) should **only** be used for:
- Selected row accent (left border)
- Granted check icons (positive permissions)
- Admin badge background
- Primary CTAs (outside table chrome)

## Neutral Chrome (must not be yellow)

These elements must use neutral tones:
- Table header background (matches row surface)
- Table dividers/borders
- Inactive icons (denied permissions)
- Numbers and labels
- Module header icons (muted by default)

## Token Reference

### Table Tokens
- \`--table-header-bg\`: Matches row surface (neutral)
- \`--table-border\`: Subtle border color (neutral)
- \`--table-label-text\`: Header text color (neutral)
- \`--table-body-text\`: Body text color (neutral)
- \`--table-row-selected\`: Selected row background (neutral with brand accent)
- \`--icon-muted\`: Muted icon color (neutral)
- \`--icon-weak\`: Weak/inactive icon color (neutral)

### Brand Tokens (Use Sparingly)
- \`--semantic-brand-base\`: Only for semantic moments listed above`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch: React.FC<{ token: string; name: string; showBorder?: boolean }> = ({
  token,
  name,
  showBorder = false,
}) => {
  return (
    <div
      style={{
        border: `1px solid var(--semantic-border-subtle)`,
        borderRadius: "8px",
        padding: "12px",
        background: "var(--semantic-background-base)",
      }}
    >
      <div
        style={{
          height: "48px",
          borderRadius: "6px",
          background: `var(${token})`,
          border: showBorder ? `1px solid var(--semantic-border-subtle)` : "none",
        }}
      />
      <div style={{ marginTop: "8px", fontSize: "12px", color: "var(--semantic-text-primary)" }}>
        {name}
      </div>
      <div
        style={{
          fontSize: "11px",
          color: "var(--semantic-text-muted)",
          fontFamily: "monospace",
          marginTop: "4px",
        }}
      >
        {token}
      </div>
    </div>
  );
};

export const AllowedBrandUses: Story = {
  render: () => {
    const allowedUses = [
      { token: "--semantic-brand-base", name: "Selected Row Accent" },
      { token: "--semantic-brand-base", name: "Granted Check" },
      { token: "--semantic-brand-base", name: "Admin Badge BG" },
      { token: "--semantic-brand-base", name: "Primary CTA" },
    ];

    return (
      <div>
        <h2 style={{ color: "var(--semantic-text-primary)", marginBottom: "16px" }}>
          Allowed Brand Uses
        </h2>
        <p style={{ color: "var(--semantic-text-secondary)", marginBottom: "24px" }}>
          Brand yellow (<code>--semantic-brand-base</code>) should <strong>only</strong> be used
          for these semantic moments:
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          {allowedUses.map((item) => (
            <ColorSwatch key={item.name} token={item.token} name={item.name} />
          ))}
        </div>
      </div>
    );
  },
};

export const NeutralChrome: Story = {
  render: () => {
    const neutralUses = [
      { token: "--table-header-bg", name: "Table Header", showBorder: true },
      { token: "--table-border", name: "Table Border", showBorder: true },
      { token: "--icon-weak", name: "Inactive Icon", showBorder: true },
      { token: "--table-body-text", name: "Body Text", showBorder: true },
    ];

    return (
      <div>
        <h2 style={{ color: "var(--semantic-text-primary)", marginBottom: "16px" }}>
          Neutral Chrome (must not be yellow)
        </h2>
        <p style={{ color: "var(--semantic-text-secondary)", marginBottom: "24px" }}>
          These elements must use neutral tones:
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          {neutralUses.map((item) => (
            <ColorSwatch
              key={item.name}
              token={item.token}
              name={item.name}
              showBorder={item.showBorder}
            />
          ))}
        </div>
      </div>
    );
  },
};

export const ImplementationChecklist: Story = {
  render: () => {
    const checklistItems = [
      "Header visually matches row surface; separation via border only",
      "Brand yellow appears only on: selected accent, granted checks, admin badges, CTAs",
      "Module header icons are neutral by default (no yellow), lighten on hover",
      "Numbers/labels use `--table-body-text`",
      "No hex or inline colors; all via tokens/utilities",
    ];

    return (
      <div>
        <h2 style={{ color: "var(--semantic-text-primary)", marginBottom: "16px" }}>
          Implementation Checklist
        </h2>
        <ul
          style={{
            color: "var(--semantic-text-primary)",
            paddingLeft: "24px",
            lineHeight: "1.8",
          }}
        >
          {checklistItems.map((item, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  },
};

export const TokenReference: Story = {
  render: () => {
    const tableTokens = [
      { token: "--table-header-bg", desc: "Matches row surface (neutral)" },
      { token: "--table-border", desc: "Subtle border color (neutral)" },
      { token: "--table-label-text", desc: "Header text color (neutral)" },
      { token: "--table-body-text", desc: "Body text color (neutral)" },
      { token: "--table-row-selected", desc: "Selected row background (neutral with brand accent)" },
      { token: "--icon-muted", desc: "Muted icon color (neutral)" },
      { token: "--icon-weak", desc: "Weak/inactive icon color (neutral)" },
    ];

    return (
      <div>
        <h2 style={{ color: "var(--semantic-text-primary)", marginBottom: "16px" }}>
          Token Reference
        </h2>
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ color: "var(--semantic-text-primary)", marginBottom: "12px" }}>
            Table Tokens
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
            }}
          >
            {tableTokens.map((item) => (
              <div
                key={item.token}
                style={{
                  padding: "12px",
                  border: "1px solid var(--semantic-border-subtle)",
                  borderRadius: "8px",
                  background: "var(--semantic-background-base)",
                }}
              >
                <code
                  style={{
                    color: "var(--semantic-brand-base)",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  {item.token}
                </code>
                <div
                  style={{
                    color: "var(--semantic-text-secondary)",
                    fontSize: "12px",
                    marginTop: "4px",
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ color: "var(--semantic-text-primary)", marginBottom: "12px" }}>
            Brand Tokens (Use Sparingly)
          </h3>
          <div
            style={{
              padding: "12px",
              border: "1px solid var(--semantic-border-subtle)",
              borderRadius: "8px",
              background: "var(--semantic-background-base)",
            }}
          >
            <code
              style={{
                color: "var(--semantic-brand-base)",
                fontFamily: "monospace",
                fontSize: "12px",
              }}
            >
              --semantic-brand-base
            </code>
            <div
              style={{
                color: "var(--semantic-text-secondary)",
                fontSize: "12px",
                marginTop: "4px",
              }}
            >
              Only for semantic moments listed above
            </div>
          </div>
        </div>
      </div>
    );
  },
};


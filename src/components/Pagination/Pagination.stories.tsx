import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "arkem" },
    docs: {
      description: {
        component: `# Pagination

The Pagination component provides navigation controls for paginated data sets, displaying page numbers, previous/next buttons, and row information.

## Features

- **Page Navigation**: Previous/next buttons with disabled states
- **Page Numbers**: Clickable page number buttons with active state
- **Row Information**: Displays current range and total items
- **Customizable**: Configurable item labels, max page buttons, and visibility options
- **Accessible**: Full ARIA support, keyboard navigation, and focus management
- **Token-Based**: Uses design system tokens for all styling

## Usage

The Pagination component requires controlled state management. Use \`useState\` to manage the current page:

\\\`\\\`\\\`tsx
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;
const totalItems = 100;
const totalPages = Math.ceil(totalItems / itemsPerPage);

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  totalItems={totalItems}
  itemsPerPage={itemsPerPage}
  onPageChange={setCurrentPage}
  itemLabel="users"
/>
\\\`\\\`\\\`

## Props

- \`currentPage\`: Current page number (1-indexed)
- \`totalPages\`: Total number of pages
- \`totalItems\`: Total number of items across all pages
- \`itemsPerPage\`: Number of items per page
- \`onPageChange\`: Callback when page changes
- \`itemLabel\`: Custom label for items (default: "entries")
- \`showRowsInfo\`: Show/hide row information (default: true)
- \`showPageNumbers\`: Show/hide page number buttons (default: true)
- \`maxPageButtons\`: Maximum page buttons to display (default: 10)`,
      },
    },
  },
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
      description: "Current page number (1-indexed)",
    },
    totalPages: {
      control: { type: "number", min: 1 },
      description: "Total number of pages",
    },
    totalItems: {
      control: { type: "number", min: 1 },
      description: "Total number of items",
    },
    itemsPerPage: {
      control: { type: "number", min: 1 },
      description: "Number of items per page",
    },
    onPageChange: {
      action: "page changed",
      description: "Callback when page changes",
    },
    itemLabel: {
      control: "text",
      description: "Custom label for items (e.g., 'users', 'items', 'records', 'entries')",
    },
    showRowsInfo: {
      control: "boolean",
      description: "Show rows info text",
    },
    showPageNumbers: {
      control: "boolean",
      description: "Show page number buttons",
    },
    maxPageButtons: {
      control: { type: "number", min: 1, max: 20 },
      description: "Maximum number of page buttons to show",
    },
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
    itemLabel: "entries",
    showRowsInfo: true,
    showPageNumbers: true,
    maxPageButtons: 10,
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// Wrapper to position pagination at bottom of viewport
const PaginationContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

// Interactive wrapper component for stories
const PaginationWrapper = (args: React.ComponentProps<typeof Pagination>) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return (
    <PaginationContainer>
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          args.onPageChange?.(page);
        }}
      />
    </PaginationContainer>
  );
};

export const Playground: Story = {
  render: (args) => <PaginationWrapper {...args} />,
};

export const Default: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          totalItems={100}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
        />
      </PaginationContainer>
    );
  },
};

export const WithCustomLabel: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          totalItems={100}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
          itemLabel="users"
        />
      </PaginationContainer>
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    return (
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={50}
          totalItems={500}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
          itemLabel="records"
          maxPageButtons={10}
        />
      </PaginationContainer>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination with many pages. The component automatically shows a subset of page numbers around the current page.",
      },
    },
  },
};

export const FirstPage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          totalItems={100}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
        />
      </PaginationContainer>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination on the first page. Previous button is disabled.",
      },
    },
  },
};

export const LastPage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(10);
    return (
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          totalItems={100}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
        />
      </PaginationContainer>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination on the last page. Next button is disabled.",
      },
    },
  },
};

export const SinglePage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={1}
          totalItems={5}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
        />
      </PaginationContainer>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination with only one page. Both previous and next buttons are disabled.",
      },
    },
  },
};

export const WithoutRowsInfo: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);
    return (
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          totalItems={100}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
          showRowsInfo={false}
        />
      </PaginationContainer>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination without the rows information text.",
      },
    },
  },
};

export const WithoutPageNumbers: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);
    return (
      <PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          totalItems={100}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
          showPageNumbers={false}
        />
      </PaginationContainer>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination with only previous/next buttons, no page numbers.",
      },
    },
  },
};

export const States: Story = {
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(5);
    const [page3, setPage3] = useState(10);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
        <div>
          <h3 style={{ color: "var(--semantic-text-primary)", marginBottom: "12px", fontSize: "var(--fonts-semantic-md)" }}>
            First Page
          </h3>
          <Pagination
            currentPage={page1}
            totalPages={10}
            totalItems={100}
            itemsPerPage={10}
            onPageChange={setPage1}
          />
        </div>
        <div>
          <h3 style={{ color: "var(--semantic-text-primary)", marginBottom: "12px", fontSize: "var(--fonts-semantic-md)" }}>
            Middle Page
          </h3>
          <Pagination
            currentPage={page2}
            totalPages={10}
            totalItems={100}
            itemsPerPage={10}
            onPageChange={setPage2}
          />
        </div>
        <div>
          <h3 style={{ color: "var(--semantic-text-primary)", marginBottom: "12px", fontSize: "var(--fonts-semantic-md)" }}>
            Last Page
          </h3>
          <Pagination
            currentPage={page3}
            totalPages={10}
            totalItems={100}
            itemsPerPage={10}
            onPageChange={setPage3}
          />
        </div>
      </div>
    );
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Different states of pagination: first page, middle page, and last page.",
      },
    },
  },
};


// src/components/UserAccessTable/UserAccessTable.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { UserAccessTable, User, Module, UserRole } from "./UserAccessTable";
import { Pagination } from "../Pagination/Pagination";
import * as Lucide from "lucide-react";

const meta: Meta<typeof UserAccessTable> = {
  title: "Components/UserAccessTable",
  component: UserAccessTable,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "arkem-base" },
    docs: {
      description: {
        component: `# User Access Table

A comprehensive table component for managing user access permissions, module access, and data access configurations.

## Features

- **Selection UX**: Proper indeterminate checkbox state for "select all" functionality
- **Accessibility**: Full ARIA support, keyboard navigation, and screen reader friendly
- **Token-based styling**: All styles use design tokens (no hardcoded values)
- **Sticky columns**: First column (User) remains visible during horizontal scroll
- **Sorting**: Sortable columns with visual indicators
- **Batch operations**: Toolbar appears when users are selected
- **Pagination**: Integrated pagination controls for large datasets
- **Empty states**: Loading, error, and empty state handling
- **Type safety**: Fully typed with TypeScript
- **Performance**: Memoized handlers and optimized rendering

## Usage

The UserAccessTable component displays users with their roles, module access permissions, and data access settings. It supports:
- Multi-select with select all functionality
- Sorting by name or role
- Row-level actions (edit)
- Pagination for large datasets
- Visual indicators for permissions and access levels`,
      },
    },
  },
  argTypes: {
    users: {
      control: "object",
      description: "Array of user objects to display",
    },
    modules: {
      control: "object",
      description: "Array of module definitions with icons",
    },
    selectedUsers: {
      control: "object",
      description: "Array of selected user IDs",
    },
    onSelectionChange: {
      action: "selectionChanged",
      description: "Callback when selection changes",
    },
    onUserEdit: {
      action: "userEdit",
      description: "Callback when edit button is clicked",
    },
    sortKey: {
      control: "select",
      options: ["name", "userId", "role"],
      description: "Current sort column",
    },
    sortDirection: {
      control: "select",
      options: ["asc", "desc"],
      description: "Sort direction",
    },
    onSortChange: {
      action: "sortChanged",
      description: "Callback when sort changes",
    },
    isLoading: {
      control: "boolean",
      description: "Show loading state",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserAccessTable>;

// Mock data matching the requirement: 7 modules for MODULE ACCESS
const mockModules: Module[] = [
  { id: "monitor", name: "Monitor", icon: "MonitorPlay" },
  { id: "users", name: "People", icon: "Users" },
  { id: "org", name: "Organization", icon: "Building2" },
  { id: "user", name: "User", icon: "UserCog" },
  { id: "globe", name: "Globe", icon: "Globe" },
  { id: "document", name: "Document", icon: "FileText" },
  { id: "download", name: "Download", icon: "Download" },
];

// Helper function to generate random 8-digit user ID
const generateUserId = (): string => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

const mockUsers: User[] = [
  {
    id: "1",
    userId: generateUserId(),
    name: "Sarah Chen",
    role: "admin",
    modules: ["monitor", "users", "org", "user", "globe", "document", "download"],
    recordLimit: 1000,
    timeWindowDays: 90,
    maskShodan: true,
    hashIdentifiers: true,
    aiAssistant: true,
  },
  {
    id: "2",
    userId: generateUserId(),
    name: "Marcus Johnson",
    role: "user",
    modules: ["monitor", "users", "org", "user", "globe"],
    recordLimit: 500,
    timeWindowDays: 30,
    maskShodan: true,
    hashIdentifiers: false,
    aiAssistant: false,
  },
  {
    id: "3",
    userId: generateUserId(),
    name: "Emily Rodriguez",
    role: "user",
    modules: ["monitor", "users"],
    recordLimit: 250,
    timeWindowDays: 30,
    maskShodan: false,
    hashIdentifiers: false,
    aiAssistant: false,
  },
  {
    id: "4",
    userId: generateUserId(),
    name: "David Kim",
    role: "user",
    modules: ["monitor", "users", "org", "user"],
    recordLimit: 500,
    timeWindowDays: 60,
    maskShodan: true,
    hashIdentifiers: true,
    aiAssistant: false,
  },
  {
    id: "5",
    userId: generateUserId(),
    name: "Jessica Taylor",
    role: "user",
    modules: ["monitor", "users", "org"],
    recordLimit: 250,
    timeWindowDays: 30,
    maskShodan: false,
    hashIdentifiers: false,
    aiAssistant: false,
  },
  {
    id: "6",
    userId: generateUserId(),
    name: "Robert Anderson",
    role: "admin",
    modules: ["monitor", "users", "org", "user", "globe", "document", "download"],
    recordLimit: 1000,
    timeWindowDays: 90,
    maskShodan: true,
    hashIdentifiers: true,
    aiAssistant: true,
  },
  {
    id: "7",
    userId: generateUserId(),
    name: "Lisa Martinez",
    role: "user",
    modules: ["monitor", "users", "org", "user"],
    recordLimit: 750,
    timeWindowDays: 60,
    maskShodan: true,
    hashIdentifiers: true,
    aiAssistant: false,
  },
  {
    id: "8",
    userId: generateUserId(),
    name: "Thomas Wright",
    role: "user",
    modules: ["monitor", "users"],
    recordLimit: 250,
    timeWindowDays: 30,
    maskShodan: false,
    hashIdentifiers: false,
    aiAssistant: false,
  },
  {
    id: "9",
    userId: generateUserId(),
    name: "Ava Nguyen",
    role: "admin",
    modules: ["monitor", "users", "org", "user", "globe", "document", "download"],
    recordLimit: 1000,
    timeWindowDays: 90,
    maskShodan: true,
    hashIdentifiers: true,
    aiAssistant: true,
  },
  {
    id: "10",
    userId: generateUserId(),
    name: "Daniel Romero",
    role: "user",
    modules: ["monitor", "users", "org", "user"],
    recordLimit: 600,
    timeWindowDays: 60,
    maskShodan: true,
    hashIdentifiers: true,
    aiAssistant: false,
  },
  {
    id: "11",
    userId: generateUserId(),
    name: "Hannah Lee",
    role: "user",
    modules: ["monitor", "users"],
    recordLimit: 400,
    timeWindowDays: 30,
    maskShodan: false,
    hashIdentifiers: true,
    aiAssistant: false,
  },
];

// Generate more users for pagination examples
const generateMoreUsers = (count: number): User[] => {
  const names = [
    "Alex Thompson", "Maria Garcia", "James Wilson", "Sophia Brown", "Michael Davis",
    "Emma Martinez", "William Taylor", "Olivia Anderson", "Benjamin Thomas", "Isabella Jackson",
    "Lucas White", "Mia Harris", "Henry Martin", "Charlotte Thompson", "Alexander Garcia",
    "Amelia Rodriguez", "Daniel Lewis", "Harper Walker", "Matthew Hall", "Evelyn Allen",
    "Joseph Young", "Abigail King", "Samuel Wright", "Emily Lopez", "David Hill",
    "Sofia Green", "Andrew Adams", "Avery Nelson", "Joshua Baker", "Scarlett Perez",
  ];
  const roles: UserRole[] = ["admin", "user"];
  const moduleSets = [
    ["monitor", "users", "org", "user", "globe", "document", "download"],
    ["monitor", "users", "org", "user", "globe"],
    ["monitor", "users", "org", "user"],
    ["monitor", "users", "org"],
    ["monitor", "users"],
  ];

  return Array.from({ length: count }, (_, i) => {
    const baseIndex = i % mockUsers.length;
    const nameIndex = i % names.length;
    return {
      ...mockUsers[baseIndex],
      id: String(mockUsers.length + i + 1),
      userId: generateUserId(),
      name: names[nameIndex],
      role: roles[Math.floor(Math.random() * roles.length)] as UserRole,
      modules: moduleSets[Math.floor(Math.random() * moduleSets.length)],
    };
  });
};

const allMockUsers = [...mockUsers, ...generateMoreUsers(50)]; // Total: 61 users

// Pagination container wrapper
const PaginationContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      {children}
    </div>
  );
};

// Get spacing between table and pagination using semantic token
const getTablePaginationSpacing = () => {
  return "var(--table-pagination-spacing, calc(var(--pagination-height, 56px) + var(--spacing-style-spacing-4px-6-24px, 24px)))";
};

// Wrapper component for stories with pagination
const UserAccessTableWithPagination = ({
  allUsers,
  itemsPerPage = 10,
  ...tableProps
}: Omit<React.ComponentProps<typeof UserAccessTable>, "users"> & {
  allUsers: User[];
  itemsPerPage?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState<string[]>(tableProps.selectedUsers || []);

  const totalItems = allUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = allUsers.slice(startIndex, endIndex);

  // Reset to page 1 if current page is out of bounds
  React.useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const handleSelectionChange = (selectedIds: string[]) => {
    setSelectedUsers(selectedIds);
    tableProps.onSelectionChange?.(selectedIds);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1, paddingBottom: getTablePaginationSpacing() }}>
        <UserAccessTable
          {...tableProps}
          users={paginatedUsers}
          selectedUsers={selectedUsers}
          onSelectionChange={handleSelectionChange}
        />
      </div>
      {totalPages > 1 && (
        <PaginationContainer>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            itemLabel="users"
          />
        </PaginationContainer>
      )}
    </div>
  );
};

// Playground story - interactive with all controls
export const Playground: Story = {
  render: (args) => (
    <UserAccessTableWithPagination
      allUsers={allMockUsers}
      itemsPerPage={10}
      {...args}
      modules={mockModules}
    />
  ),
  args: {
    modules: mockModules,
    selectedUsers: [],
    sortKey: "name",
    sortDirection: "asc",
    isLoading: false,
    error: null,
  },
};

// Default table with pagination
export const Default: Story = {
  render: () => (
    <UserAccessTableWithPagination
      allUsers={allMockUsers}
      itemsPerPage={10}
      modules={mockModules}
      selectedUsers={[]}
      sortKey="name"
      sortDirection="asc"
    />
  ),
};

// Table with some users selected and pagination
export const WithSelection: Story = {
  render: () => {
    const [selectedUsers, setSelectedUsers] = useState<string[]>(["1", "2", "3"]);
    return (
      <UserAccessTableWithPagination
        allUsers={allMockUsers}
        itemsPerPage={10}
        modules={mockModules}
        selectedUsers={selectedUsers}
        onSelectionChange={setSelectedUsers}
        sortKey="name"
        sortDirection="asc"
      />
    );
  },
};

// Table sorted by role with pagination
export const SortedByRole: Story = {
  render: () => (
    <UserAccessTableWithPagination
      allUsers={allMockUsers}
      itemsPerPage={10}
      modules={mockModules}
      selectedUsers={[]}
      sortKey="role"
      sortDirection="asc"
    />
  ),
};

// Loading state
export const Loading: Story = {
  args: {
    users: [],
    modules: mockModules,
    selectedUsers: [],
    isLoading: true,
  },
};

// Error state
export const Error: Story = {
  args: {
    users: [],
    modules: mockModules,
    selectedUsers: [],
    isLoading: false,
    error: "Failed to load users. Please try again.",
  },
};

// Empty state
export const Empty: Story = {
  args: {
    users: [],
    modules: mockModules,
    selectedUsers: [],
    isLoading: false,
    error: null,
  },
};

// Small dataset (no pagination needed)
export const SmallDataset: Story = {
  args: {
    users: mockUsers.slice(0, 3),
    modules: mockModules,
    selectedUsers: [],
    sortKey: "name",
    sortDirection: "asc",
  },
};

// Pagination examples
export const WithPagination: Story = {
  render: () => (
    <UserAccessTableWithPagination
      allUsers={allMockUsers}
      itemsPerPage={10}
      modules={mockModules}
      selectedUsers={[]}
      sortKey="name"
      sortDirection="asc"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "UserAccessTable with pagination. Navigate through pages to see different sets of users.",
      },
    },
  },
};

export const PaginationManyPages: Story = {
  render: () => (
    <UserAccessTableWithPagination
      allUsers={allMockUsers}
      itemsPerPage={5}
      modules={mockModules}
      selectedUsers={[]}
      sortKey="name"
      sortDirection="asc"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Pagination with many pages (5 users per page). The pagination component shows a subset of page numbers around the current page.",
      },
    },
  },
};

export const PaginationFirstPage: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalItems = allMockUsers.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedUsers = allMockUsers.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div style={{ flex: 1, paddingBottom: getTablePaginationSpacing() }}>
          <UserAccessTable
            users={paginatedUsers}
            modules={mockModules}
            selectedUsers={[]}
            sortKey="name"
            sortDirection="asc"
          />
        </div>
        <PaginationContainer>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            itemLabel="users"
          />
        </PaginationContainer>
      </div>
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

export const PaginationLastPage: Story = {
  render: () => {
    const itemsPerPage = 10;
    const totalItems = allMockUsers.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(totalPages);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedUsers = allMockUsers.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div style={{ flex: 1, paddingBottom: getTablePaginationSpacing() }}>
          <UserAccessTable
            users={paginatedUsers}
            modules={mockModules}
            selectedUsers={[]}
            sortKey="name"
            sortDirection="asc"
          />
        </div>
        <PaginationContainer>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            itemLabel="users"
          />
        </PaginationContainer>
      </div>
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

// Responsive viewport stories with pagination
export const MobileView: Story = {
  render: () => (
    <UserAccessTableWithPagination
      allUsers={allMockUsers}
      itemsPerPage={10}
      modules={mockModules}
      selectedUsers={[]}
      sortKey="name"
      sortDirection="asc"
    />
  ),
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const TabletView: Story = {
  render: () => (
    <UserAccessTableWithPagination
      allUsers={allMockUsers}
      itemsPerPage={10}
      modules={mockModules}
      selectedUsers={[]}
      sortKey="name"
      sortDirection="asc"
    />
  ),
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const DesktopView: Story = {
  render: () => (
    <UserAccessTableWithPagination
      allUsers={allMockUsers}
      itemsPerPage={10}
      modules={mockModules}
      selectedUsers={[]}
      sortKey="name"
      sortDirection="asc"
    />
  ),
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};


import React from "react";
import * as Lucide from "lucide-react";
import { Checkbox } from "../Checkbox/Checkbox";
import { Badge } from "../Badge/Badge";
import "./UserAccessTable.css";

export type UserRole = "admin" | "user";

export interface Module {
  id: string;
  name: string;
  icon: keyof typeof Lucide;
}

export interface User {
  id: string;
  userId: string;
  name: string;
  role: UserRole;
  modules: string[];
  recordLimit: number;
  timeWindowDays: number;
  maskShodan: boolean;
  hashIdentifiers: boolean;
  aiAssistant: boolean;
}

export type SortKey = "name" | "userId" | "role";
export type SortDirection = "asc" | "desc";

export interface UserAccessTableProps {
  users: User[];
  modules: Module[];
  selectedUsers?: string[];
  onSelectionChange?: (selectedIds: string[]) => void;
  onUserEdit?: (user: User) => void;
  sortKey?: SortKey;
  sortDirection?: SortDirection;
  onSortChange?: (key: SortKey, direction: SortDirection) => void;
  isLoading?: boolean;
  error?: string | null;
  className?: string;
}

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const UserAccessTable: React.FC<UserAccessTableProps> = ({
  users = [],
  modules = [],
  selectedUsers = [],
  onSelectionChange,
  onUserEdit,
  sortKey = "name",
  sortDirection = "asc",
  onSortChange,
  isLoading = false,
  error = null,
  className,
}) => {
  const [filteredUsers, setFilteredUsers] = React.useState<User[]>(users);
  const [internalSelectedUsers, setInternalSelectedUsers] = React.useState<string[]>(selectedUsers);
  const [internalSortKey, setInternalSortKey] = React.useState<SortKey>(sortKey);
  const [internalSortDirection, setInternalSortDirection] = React.useState<SortDirection>(sortDirection);

  // Sync external props
  React.useEffect(() => {
    setInternalSelectedUsers(selectedUsers);
  }, [selectedUsers]);

  React.useEffect(() => {
    setInternalSortKey(sortKey);
    setInternalSortDirection(sortDirection);
  }, [sortKey, sortDirection]);

  // Derive selection state once per render
  const allSelected = filteredUsers.length > 0 && internalSelectedUsers.length === filteredUsers.length;
  const someSelected = internalSelectedUsers.length > 0 && !allSelected;

  // Header checkbox ref for indeterminate state
  const headerCbRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (headerCbRef.current) {
      headerCbRef.current.indeterminate = someSelected;
    }
  }, [someSelected]);

  // Sort users
  React.useEffect(() => {
    const sorted = [...users].sort((a, b) => {
      let comparison = 0;
      if (internalSortKey === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (internalSortKey === "userId") {
        comparison = a.userId.localeCompare(b.userId);
      } else if (internalSortKey === "role") {
        comparison = a.role.localeCompare(b.role);
      }
      return internalSortDirection === "asc" ? comparison : -comparison;
    });
    setFilteredUsers(sorted);
  }, [users, internalSortKey, internalSortDirection]);

  // Memoized handlers
  const toggleAllUsers = React.useCallback(() => {
    const newSelection = allSelected ? [] : filteredUsers.map((u) => u.id);
    setInternalSelectedUsers(newSelection);
    onSelectionChange?.(newSelection);
  }, [allSelected, filteredUsers, onSelectionChange]);

  const toggleUserSelection = React.useCallback(
    (id: string) => {
      const newSelection = internalSelectedUsers.includes(id)
        ? internalSelectedUsers.filter((uid) => uid !== id)
        : [...internalSelectedUsers, id];
      setInternalSelectedUsers(newSelection);
      onSelectionChange?.(newSelection);
    },
    [internalSelectedUsers, onSelectionChange]
  );

  const toggleSort = React.useCallback(
    (key: SortKey) => {
      const newDirection =
        internalSortKey === key && internalSortDirection === "asc" ? "desc" : "asc";
      setInternalSortKey(key);
      setInternalSortDirection(newDirection);
      onSortChange?.(key, newDirection);
    },
    [internalSortKey, internalSortDirection, onSortChange]
  );

  const openUserConfig = React.useCallback(
    (user: User) => {
      onUserEdit?.(user);
    },
    [onUserEdit]
  );

  const handleRowClick = React.useCallback(
    (e: React.MouseEvent<HTMLTableRowElement>, user: User) => {
      if ((e.target as HTMLElement).closest("button, a, input")) return;
      toggleUserSelection(user.id);
    },
    [toggleUserSelection]
  );

  const handleRowKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLTableRowElement>, user: User) => {
      if (e.key === " ") {
        e.preventDefault();
        toggleUserSelection(user.id);
      }
    },
    [toggleUserSelection]
  );

  const handleSortKeyDown = React.useCallback(
    (e: React.KeyboardEvent, key: SortKey) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleSort(key);
      }
    },
    [toggleSort]
  );

  const hasModule = (user: User, moduleId: string): boolean => {
    return user.modules.includes(moduleId);
  };

  const getSortAriaSort = (key: SortKey): "ascending" | "descending" | "none" => {
    if (internalSortKey === key) {
      return internalSortDirection === "asc" ? "ascending" : "descending";
    }
    return "none";
  };

  const ArrowUpDown = Lucide.ArrowUpDown;
  const Check = Lucide.Check;
  const Minus = Lucide.Minus;
  const Edit = Lucide.Pencil;

  const classes = ["arkem-user-access-table", className].filter(Boolean).join(" ");

  if (isLoading) {
    return (
      <div className={classes}>
        <div className="arkem-user-access-table__empty">Loading users…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes}>
        <div className="arkem-user-access-table__error">Failed to load users. Try again.</div>
      </div>
    );
  }

  if (filteredUsers.length === 0) {
    return (
      <div className={classes}>
        <div className="arkem-user-access-table__empty">No users found.</div>
      </div>
    );
  }

  return (
    <div className={classes}>
      {internalSelectedUsers.length > 0 && (
        <div className="arkem-user-access-table__batch-toolbar">
          <span className="arkem-user-access-table__batch-count">
            {internalSelectedUsers.length} user{internalSelectedUsers.length !== 1 ? "s" : ""} selected
          </span>
        </div>
      )}
      <div className="arkem-user-access-table__scroll-container">
        <table className="arkem-user-access-table__table">
          <thead className="arkem-user-access-table__thead">
            {/* Row 1: Grouped Headers */}
            <tr className="arkem-user-access-table__header-row arkem-user-access-table__header-row--group">
              <th
                className="arkem-user-access-table__header-cell arkem-user-access-table__header-cell--group"
                scope="colgroup"
                colSpan={4}
              >
                users
              </th>
              <th
                className="arkem-user-access-table__header-cell arkem-user-access-table__header-cell--group"
                scope="colgroup"
                colSpan={7}
              >
                MODULE ACCESS
              </th>
              <th
                className="arkem-user-access-table__header-cell arkem-user-access-table__header-cell--group"
                scope="colgroup"
                colSpan={5}
              >
                DATA ACCESS
              </th>
              <th
                className="arkem-user-access-table__header-cell arkem-user-access-table__header-cell--actions"
                scope="col"
                rowSpan={2}
              >
                Actions
              </th>
            </tr>
            {/* Row 2: Column Headers with Select All Checkbox */}
            <tr className="arkem-user-access-table__subheader-row">
              <th
                className="arkem-user-access-table__subheader-cell arkem-user-access-table__subheader-cell--checkbox"
                scope="col"
              >
                <Checkbox
                  ref={headerCbRef}
                  checked={allSelected}
                  indeterminate={someSelected}
                  onCheckedChange={toggleAllUsers}
                  ariaLabel="Select all users"
                />
              </th>
              <th
                className="arkem-user-access-table__subheader-cell arkem-user-access-table__subheader-cell--sticky"
                scope="col"
                role="columnheader"
                aria-sort={getSortAriaSort("name")}
                onClick={() => toggleSort("name")}
                tabIndex={0}
                onKeyDown={(e) => handleSortKeyDown(e, "name")}
              >
                <span className="arkem-user-access-table__sr-only">Sort by </span>
                <div className="arkem-user-access-table__sortable-header">
                  Name
                  <ArrowUpDown
                    className={`arkem-user-access-table__sort-icon ${
                      internalSortKey === "name" ? "arkem-user-access-table__sort-icon--active" : ""
                    } ${
                      internalSortKey === "name" && internalSortDirection === "desc"
                        ? "arkem-user-access-table__sort-icon--desc"
                        : ""
                    }`}
                  />
                </div>
              </th>
              <th
                className="arkem-user-access-table__subheader-cell"
                scope="col"
                role="columnheader"
                aria-sort={getSortAriaSort("userId")}
                onClick={() => toggleSort("userId")}
                tabIndex={0}
                onKeyDown={(e) => handleSortKeyDown(e, "userId")}
              >
                <span className="arkem-user-access-table__sr-only">Sort by </span>
                <div className="arkem-user-access-table__sortable-header">
                  User ID
                  <ArrowUpDown
                    className={`arkem-user-access-table__sort-icon ${
                      internalSortKey === "userId" ? "arkem-user-access-table__sort-icon--active" : ""
                    } ${
                      internalSortKey === "userId" && internalSortDirection === "desc"
                        ? "arkem-user-access-table__sort-icon--desc"
                        : ""
                    }`}
                  />
                </div>
              </th>
              <th
                className="arkem-user-access-table__subheader-cell"
                scope="col"
                role="columnheader"
                aria-sort={getSortAriaSort("role")}
                onClick={() => toggleSort("role")}
                tabIndex={0}
                onKeyDown={(e) => handleSortKeyDown(e, "role")}
              >
                <span className="arkem-user-access-table__sr-only">Sort by </span>
                <div className="arkem-user-access-table__sortable-header">
                  Role
                  <ArrowUpDown
                    className={`arkem-user-access-table__sort-icon ${
                      internalSortKey === "role" ? "arkem-user-access-table__sort-icon--active" : ""
                    } ${
                      internalSortKey === "role" && internalSortDirection === "desc"
                        ? "arkem-user-access-table__sort-icon--desc"
                        : ""
                    }`}
                  />
                </div>
              </th>
              {modules.slice(0, 7).map((module, index) => {
                const IconComponent = Lucide[module.icon] as React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
                return (
                  <th
                    key={module.id}
                    scope="col"
                    className="arkem-user-access-table__subheader-cell arkem-user-access-table__subheader-cell--icon"
                    title={module.name}
                  >
                    <div className="arkem-user-access-table__icon-wrapper">
                      {IconComponent && <IconComponent size={16} strokeWidth={2} className="arkem-user-access-table__header-icon" />}
                    </div>
                  </th>
                );
              })}
              {/* Pad with empty cells if fewer than 7 modules */}
              {Array.from({ length: Math.max(0, 7 - modules.length) }).map((_, index) => (
                <th
                  key={`module-pad-${index}`}
                  scope="col"
                  className="arkem-user-access-table__subheader-cell arkem-user-access-table__subheader-cell--icon"
                >
                  <div className="arkem-user-access-table__icon-wrapper"></div>
                </th>
              ))}
              <th scope="col" className="arkem-user-access-table__subheader-cell">
                Record Limit
              </th>
              <th scope="col" className="arkem-user-access-table__subheader-cell">
                Time Window (Days)
              </th>
              <th scope="col" className="arkem-user-access-table__subheader-cell">
                Mask Shodan
              </th>
              <th scope="col" className="arkem-user-access-table__subheader-cell">
                Hash Identifiers
              </th>
              <th scope="col" className="arkem-user-access-table__subheader-cell">
                AI Assistant
              </th>
            </tr>
          </thead>
          <tbody className="arkem-user-access-table__tbody">
            {filteredUsers.map((user, index) => {
              const isSelected = internalSelectedUsers.includes(user.id);
              const isEven = index % 2 === 0;
              return (
                <tr
                  key={user.id}
                  className="arkem-user-access-table__row"
                  aria-selected={isSelected}
                  data-selected={isSelected ? "" : undefined}
                  onClick={(e) => handleRowClick(e, user)}
                  onKeyDown={(e) => handleRowKeyDown(e, user)}
                  tabIndex={0}
                >
                  <td className="arkem-user-access-table__cell arkem-user-access-table__cell--checkbox">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => toggleUserSelection(user.id)}
                      ariaLabel={`Select ${user.name}`}
                    />
                  </td>
                  <td className="arkem-user-access-table__cell arkem-user-access-table__cell--sticky">
                    <div className="arkem-user-access-table__user-cell">
                      <div className="arkem-user-access-table__avatar">
                        {getInitials(user.name)}
                      </div>
                      <span className="arkem-user-access-table__user-name">{user.name}</span>
                    </div>
                  </td>
                  <td className="arkem-user-access-table__cell">
                    {user.userId}
                  </td>
                  <td className="arkem-user-access-table__cell">
                    <Badge variant={user.role}>{user.role}</Badge>
                  </td>
                  {/* MODULE ACCESS: 7 cells */}
                  {modules.slice(0, 7).map((module) => {
                    const hasAccess = hasModule(user, module.id);
                    const IconComponent = Lucide[module.icon] as React.ComponentType<{ size?: number; strokeWidth?: number }>;
                    return (
                      <td key={module.id} className="arkem-user-access-table__cell arkem-user-access-table__cell--icon">
                        {hasAccess ? (
                          <Check
                            className="arkem-user-access-table__module-icon arkem-user-access-table__module-icon--allowed"
                            size={16}
                            strokeWidth={2}
                            aria-label={`${module.name}: allowed`}
                          />
                        ) : (
                          <Minus
                            className="arkem-user-access-table__module-icon arkem-user-access-table__module-icon--denied"
                            size={16}
                            strokeWidth={2}
                            aria-label={`${module.name}: not allowed`}
                          />
                        )}
                      </td>
                    );
                  })}
                  {/* Pad with empty cells if fewer than 7 modules */}
                  {Array.from({ length: Math.max(0, 7 - modules.length) }).map((_, index) => (
                    <td key={`module-pad-${index}`} className="arkem-user-access-table__cell arkem-user-access-table__cell--icon">
                      <Minus
                        className="arkem-user-access-table__module-icon arkem-user-access-table__module-icon--denied"
                        size={16}
                        strokeWidth={2}
                        aria-label="Module not configured"
                      />
                    </td>
                  ))}
                  {/* DATA ACCESS: 5 cells */}
                  <td className="arkem-user-access-table__cell">{user.recordLimit}</td>
                  <td className="arkem-user-access-table__cell">{user.timeWindowDays}</td>
                  <td className="arkem-user-access-table__cell">
                    {user.maskShodan ? (
                      <Check
                        className="arkem-user-access-table__check-icon"
                        size={16}
                        strokeWidth={2}
                        aria-label="Mask Shodan: enabled"
                      />
                    ) : (
                      <Minus
                        className="arkem-user-access-table__check-icon arkem-user-access-table__check-icon--disabled"
                        size={16}
                        strokeWidth={2}
                        aria-label="Mask Shodan: disabled"
                      />
                    )}
                  </td>
                  <td className="arkem-user-access-table__cell">
                    {user.hashIdentifiers ? (
                      <Check
                        className="arkem-user-access-table__check-icon"
                        size={16}
                        strokeWidth={2}
                        aria-label="Hash Identifiers: enabled"
                      />
                    ) : (
                      <Minus
                        className="arkem-user-access-table__check-icon arkem-user-access-table__check-icon--disabled"
                        size={16}
                        strokeWidth={2}
                        aria-label="Hash Identifiers: disabled"
                      />
                    )}
                  </td>
                  <td className="arkem-user-access-table__cell">
                    {user.aiAssistant ? (
                      <Check
                        className="arkem-user-access-table__check-icon"
                        size={16}
                        strokeWidth={2}
                        aria-label="AI Assistant: enabled"
                      />
                    ) : (
                      <Minus
                        className="arkem-user-access-table__check-icon arkem-user-access-table__check-icon--disabled"
                        size={16}
                        strokeWidth={2}
                        aria-label="AI Assistant: disabled"
                      />
                    )}
                  </td>
                  <td className="arkem-user-access-table__cell">
                    <button
                      className="arkem-user-access-table__edit-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openUserConfig(user);
                      }}
                      aria-label={`Edit ${user.name}`}
                      type="button"
                    >
                      <Edit size={16} strokeWidth={2} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};


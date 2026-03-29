"use client";

import * as React from "react";
import { cn } from "./utils";

// Simplified sidebar component to avoid triggering Jotai warnings from unused dependencies
// This is a minimal stub since sidebar is not used in the application

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

function SidebarProvider({
  children,
  ...props
}: React.ComponentProps<"div"> & { defaultOpen?: boolean; open?: boolean; onOpenChange?: (open: boolean) => void }) {
  const [open, setOpen] = React.useState(props.defaultOpen ?? true);
  const [openMobile, setOpenMobile] = React.useState(false);

  const contextValue = React.useMemo(
    () => ({
      state: open ? "expanded" as const : "collapsed" as const,
      open,
      setOpen,
      openMobile,
      setOpenMobile,
      isMobile: false,
      toggleSidebar: () => setOpen(!open),
    }),
    [open, openMobile]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div data-slot="sidebar-provider" {...props}>{children}</div>
    </SidebarContext.Provider>
  );
}

function Sidebar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar"
      className={cn("flex flex-col bg-sidebar text-sidebar-foreground", className)}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      className={cn("flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      className={cn("flex flex-col gap-2 p-4 mt-auto", className)}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      className={cn("flex flex-col gap-2 p-4 flex-1 overflow-auto", className)}
      {...props}
    />
  );
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function SidebarGroupLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-label"
      className={cn("text-sm font-medium text-sidebar-foreground/70 px-2 py-1", className)}
      {...props}
    />
  );
}

function SidebarGroupContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      className={cn("list-none", className)}
      {...props}
    />
  );
}

function SidebarMenuButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="sidebar-menu-button"
      className={cn(
        "flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors w-full text-left",
        className
      )}
      {...props}
    />
  );
}

function SidebarTrigger({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="sidebar-trigger"
      className={cn("p-2", className)}
      {...props}
    />
  );
}

function SidebarRail({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-rail"
      className={cn("w-1 bg-sidebar-border", className)}
      {...props}
    />
  );
}

function SidebarInset({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-inset"
      className={cn("flex-1", className)}
      {...props}
    />
  );
}

function SidebarInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="sidebar-input"
      className={cn(
        "px-3 py-2 rounded-md bg-sidebar-accent text-sidebar-accent-foreground",
        className
      )}
      {...props}
    />
  );
}

function SidebarSeparator({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-separator"
      className={cn("h-px bg-sidebar-border my-2", className)}
      {...props}
    />
  );
}

function SidebarGroupAction({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="sidebar-group-action"
      className={cn("p-1 hover:bg-sidebar-accent rounded-md transition-colors", className)}
      {...props}
    />
  );
}

function SidebarMenuAction({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="sidebar-menu-action"
      className={cn("p-1 hover:bg-sidebar-accent rounded-md transition-colors", className)}
      {...props}
    />
  );
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      className={cn("flex flex-col gap-1 ml-4 mt-1", className)}
      {...props}
    />
  );
}

function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      className={cn("list-none", className)}
      {...props}
    />
  );
}

function SidebarMenuSubButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="sidebar-menu-sub-button"
      className={cn(
        "flex items-center gap-2 px-2 py-1 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors w-full text-left text-sm",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuBadge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      className={cn("px-1.5 py-0.5 text-xs rounded-md bg-sidebar-primary text-sidebar-primary-foreground", className)}
      {...props}
    />
  );
}

function SidebarMenuSkeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-skeleton"
      className={cn("h-8 bg-sidebar-accent/50 rounded-md animate-pulse", className)}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
  SidebarInput,
  SidebarSeparator,
  useSidebar,
};

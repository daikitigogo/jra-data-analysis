type breakpoints = number | "xs" | "sm" | "md" | "lg" | "xl";

export const breakpointUp = (process.env.REACT_APP_BREAKPOINTS_UP || 'sm') as breakpoints;
export const sidebarWidth = Number(process.env.REACT_APP_SIDEBAR_WIDTH) || 300;

export const appTitle = process.env.REACT_APP_TITLE || 'Jra data analysis';

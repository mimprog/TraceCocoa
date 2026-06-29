// Base URL (ONLY for API calls or external links, NOT React Router)
const CLIENT_URL = "https://trace-cocoa.onrender.com";

/**
 * React Router CLIENT ROUTES (IMPORTANT: path-only, no domain)
 */
export const SITE_URL = {
  // Public routes
  HOME: "/",
  MAP: "/map",
  ASSISTANCE: "/assistance",
  ABOUT: "/about",
  TERMS: "/termsofuse",
  PRIVACY: "/privacy",
  COOKIE_POLICY: "/cookie",
  HELP: "/help",
  SETTINGS: "/settings",
  LOGIN: "/login",
  LOCATION: "/location",
  AUTH_ERROR: "/auth/error",
  REGISTER: "/register",
  VERIFY_EMAIL: "/verifyEmailCode",

  // User routes
  TEST: "/test",
  PROFILE: "/profile",

  // Admin routes
  ADMIN_DASHBOARD: "/admin/dashboard",

  ADMIN_USERS: "/admin/user",
  ADMIN_ADD_USER: "/admin/user/add",
  ADMIN_EDIT_USER: "/admin/user/edit",

  ADMIN_COOPERATIVES: "/admin/cooperative",
  ADMIN_ADD_COOPERATIVE: "/admin/cooperative/add",
  ADMIN_EDIT_COOPERATIVE: "/admin/cooperative/edit",

  ADMIN_PLOTS: "/admin/plot",
  ADMIN_ADD_PLOT: "/admin/plot/add",
  ADMIN_EDIT_PLOT: "/admin/plot/edit",

  ADMIN_SALES: "/admin/sale",
  ADMIN_ADD_SALE: "/admin/sale/add",
  ADMIN_EDIT_SALE: "/admin/sale/edit",

  ADMIN_PURCHASES: "/admin/purchase",
  ADMIN_ADD_PURCHASE: "/admin/purchase/add",
  ADMIN_EDIT_PURCHASE: "/admin/purchase/edit",

  ADMIN_ROLES: "/admin/role",

  ADMIN_EXPORTERS: "/admin/exporter",
  ADMIN_ADD_EXPORTER: "/admin/exporter/add",
  ADMIN_EDIT_EXPORTER: "/admin/exporter/edit",
};

/**
 * Grouped exports (optional convenience)
 */
export const PUBLIC_ROUTES = {
  HOME: SITE_URL.HOME,
  MAP: SITE_URL.MAP,
  LOGIN: SITE_URL.LOGIN,
  REGISTER: SITE_URL.REGISTER,
};

export const AUTH_ROUTES = {
  PROFILE: SITE_URL.PROFILE,
  SETTINGS: SITE_URL.SETTINGS,
};

export const ADMIN_ROUTES = {
  DASHBOARD: SITE_URL.ADMIN_DASHBOARD,
  USERS: SITE_URL.ADMIN_USERS,
  SALES: SITE_URL.ADMIN_SALES,
};

/**
 * Destructured exports (for direct imports)
 */
export const {
  HOME,
  MAP,
  LOGIN,
  REGISTER,
  PROFILE,

  ADMIN_DASHBOARD,
  ADMIN_USERS,
  ADMIN_ADD_USER,
  ADMIN_EDIT_USER,
  ADMIN_COOPERATIVES,
  ADMIN_ADD_COOPERATIVE,
  ADMIN_EDIT_COOPERATIVE,
  ADMIN_PLOTS,
  ADMIN_ADD_PLOT,
  ADMIN_EDIT_PLOT,
  ADMIN_SALES,
  ADMIN_ADD_SALE,
  ADMIN_EDIT_SALE,
  ADMIN_PURCHASES,
  ADMIN_ADD_PURCHASE,
  ADMIN_EDIT_PURCHASE,
  ADMIN_ROLES,
  ADMIN_EXPORTERS,
  ADMIN_ADD_EXPORTER,
  ADMIN_EDIT_EXPORTER,
} = SITE_URL;

/**
 * Default export (ONLY use if needed elsewhere)
 */
export default CLIENT_URL;
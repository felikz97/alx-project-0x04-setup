import { ReactNode } from "react";

// From pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// From components/common/Button.tsx
export type ButtonSize = "small" | "medium" | "large";
export type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-full";

export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: string;
  size?: ButtonSize;
  shape?: ButtonShape;
  action?: () => void;
}

// From components/layouts/Layout.tsx
export interface LayoutProps {
  children: ReactNode;
}

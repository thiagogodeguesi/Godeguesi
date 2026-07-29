import React from "react";
import type { HTMLAttributes } from "react";

export type DividerProps = Omit<HTMLAttributes<HTMLHRElement>, "children">;

export function Divider({ className = "", ...props }: DividerProps) {
  return (
    <hr className={`border-0 border-t border-border ${className}`} {...props} />
  );
}

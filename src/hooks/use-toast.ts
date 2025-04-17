
// Re-exporting sonner toast functionality
import { toast as sonnerToast } from "sonner";
import { useState, useEffect } from "react";

// Empty interface for compatibility with shadcn toast
type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

export const toast = sonnerToast;

export const useToast = () => {
  // This is for compatibility with the shadcn/ui toast component
  // It's not actually used with sonner, but needed to satisfy the type requirements
  const [toasts, setToasts] = useState<Toast[]>([]);

  return {
    toast: sonnerToast,
    toasts, // This makes the TypeScript error go away
    dismiss: (toastId?: string) => {
      if (toastId) {
        sonnerToast.dismiss(toastId);
      } else {
        sonnerToast.dismiss();
      }
    },
  };
};

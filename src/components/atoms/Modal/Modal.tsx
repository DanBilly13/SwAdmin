import React, { useEffect } from "react";
import classNames from "classnames";
import { Button } from "../";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  actions?: {
    left?: React.ReactNode;
    right?: React.ReactNode[];
  };
  size?: "sm" | "md" | "lg" | "xl";
  headerContent?: React.ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  actions,
  size,
  headerContent,
}: ModalProps) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalClasses = classNames(
    "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
    {
      hidden: !isOpen,
      "w-[300px]": size === "sm",
      "w-[500px]": size === "md",
      "w-[800px]": size === "lg",
      "w-[1100px]": size === "xl",
    }
  );

  return (
    <div className={modalClasses}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-0">
        <div
          className={classNames(
            "relative w-full max-w-md transform overflow-hidden rounded-lg bg-white p-0 shadow-xl transition-all",
            className
          )}
        >
          {/* Header */}
          <div className="mb-0 flex items-center justify-between p-6">
            <h3 className="text-lg font-medium">{title}</h3>
            {headerContent || (
              <button
                onClick={onClose}
                className="text-content-tertiary hover:text-content-secondary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            )}
          </div>

          {/* Content */}
          <div className="mb-0 bg-bg p-6">{children}</div>

          {/* Footer */}
          <div className="flex justify-between items-center gap-3 bg-bg p-6">
            {actions ? (
              <>
                <div>{actions.left}</div>
                <div className="flex gap-3">
                  {actions.right?.map((action, index) => (
                    <React.Fragment key={index}>{action}</React.Fragment>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div>
                  <Button variant="tertiary" onClick={onClose}>
                    Cancel
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Button>Confirm</Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

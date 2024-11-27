import React, { useEffect } from "react";
import classNames from "classnames";
import { Button, IconButton } from "../";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
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
  description,
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
            <h3 className="text-title-l font-medium">{title}</h3>
            {headerContent || <IconButton onClick={onClose} icon="close" />}
          </div>

          {/* Description */}
          {description && (
            <div className="mb-0 flex items-center justify-between px-6 pb-6">
              <p className="text-body-m font-medium">{description}</p>
            </div>
          )}

          {/* Content */}
          <div className="mb-0 bg-bg p-6">{children}</div>

          {/* Footer */}
          {actions && (
            <div className="flex justify-between items-center gap-3 bg-bg p-6">
              <div>{actions.left}</div>
              <div className="flex gap-3">
                {actions.right?.map((action, index) => (
                  <React.Fragment key={index}>{action}</React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

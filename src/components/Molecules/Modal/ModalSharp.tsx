import { ReactNode, useEffect, useId, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { XMarkIcon } from "@heroicons/react/24/outline";

const headerVariants = cva(
  "flex items-center justify-between px-6 py-4 flex-shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-emerald-500",
        secondary: "bg-violet-700",
        tertiary: "bg-blue-500",
        danger: "bg-red-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const dialogVariants = cva(
  `open:flex open:flex-col p-0 border-none outline-none
   dark:bg-gray-500 bg-gray-200 text-slate-600 dark:text-slate-200
   w-full max-w-lg
   shadow-2xl
   backdrop:bg-black/60
   rounded-none`,
);

const SHARP_MODAL_CLIP_PATH =
  "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)";

export interface ModalProps extends VariantProps<typeof headerVariants> {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  headerIcon?: ReactNode;
}

const Modal = ({
  open,
  onClose,
  title,
  children,
  variant,
  headerIcon,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const rect = dialogRef.current?.getBoundingClientRect();
    if (!rect) return;
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClick={handleDialogClick}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      className={dialogVariants()}
      style={{ clipPath: SHARP_MODAL_CLIP_PATH }}
    >
      <div onClick={(e) => e.stopPropagation()} className="flex flex-col">
        <header className={headerVariants({ variant })}>
          <div className="flex gap-2 items-center">
            {headerIcon && (
              <span aria-hidden="true" className="text-white">
                {headerIcon}
              </span>
            )}
            <h2 id={titleId} className="text-white font-semibold">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-white/50 transition-colors ml-4 flex-shrink-0"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </header>
        <div className="px-6 py-5">{children}</div>
      </div>
    </dialog>
  );
};

Modal.displayName = "Modal";

export default Modal;

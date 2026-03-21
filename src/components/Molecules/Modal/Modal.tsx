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
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const dialogVariants = cva(
  `open:flex open:flex-col p-0 border-none outline-none
   bg-gray-500
   w-full max-w-lg
   shadow-2xl
   backdrop:bg-black/60`,
  {
    variants: {
      sharp: {
        true: "rounded-none",
        false: "rounded-xl overflow-hidden",
      },
    },
    defaultVariants: {
      sharp: false,
    },
  },
);

const SHARP_MODAL_CLIP_PATH =
  "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)";

export interface ModalProps
  extends
    VariantProps<typeof headerVariants>,
    VariantProps<typeof dialogVariants> {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  customColour?: string;
}

const Modal = ({
  open,
  onClose,
  title,
  children,
  variant,
  sharp,
  customColour,
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

  const colourStyle = customColour
    ? { backgroundColor: customColour }
    : undefined;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClick={handleDialogClick}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      className={dialogVariants({ sharp })}
      style={sharp ? { clipPath: SHARP_MODAL_CLIP_PATH } : undefined}
    >
      <div onClick={(e) => e.stopPropagation()} className="flex flex-col">
        <header className={headerVariants({ variant })} style={colourStyle}>
          <h2 id={titleId} className="text-white font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors ml-4 flex-shrink-0"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </header>
        <div className="px-6 py-5 text-gray-300">{children}</div>
      </div>
    </dialog>
  );
};

Modal.displayName = "Modal";

export default Modal;

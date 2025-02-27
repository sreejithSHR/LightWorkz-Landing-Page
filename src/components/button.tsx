import type { PropsWithChildren } from "react";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface ButtonProps {
  id?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  containerClass?: string;
  onClick?: () => void;
}

export const Button = ({
  id,
  children,
  containerClass,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className={cn(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black transition hover:opacity-75 flex items-center gap-2",
        containerClass
      )}
      aria-label={typeof children === "string" ? children : "button"}
    >
      {LeftIcon && <LeftIcon className="w-5 h-5" />}

      <span className="relative inline-flex font-general text-xs uppercase">
        {children}
      </span>

      {RightIcon && <RightIcon className="w-5 h-5" />}
    </button>
  );
};

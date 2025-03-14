import clsx from "clsx";
import localFont from "next/font/local";

interface Props {
  size?: "small" | "medium" | "large";
  variant?:
    | "accent"
    | "outline"
    | "filled"
    | "delete"
    | "modify"
    | "noBorder"
    | "icon";
  icon?: { icon: React.ElementType };
  iconTheme?: "accent" | "secondary";
  iconPosition?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean; // Ajout de la prop disabled
}

const Ambit = localFont({
  src: "../../pages/fonts/Ambit-SemiBold.woff2",
});

export const Button = ({
  size = "medium",
  className,
  variant = "accent",
  icon,
  type = "button",
  iconTheme = "accent",
  iconPosition = "right",
  children,
  onClick,
  disabled = false, // Ajout de la valeur par défaut
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    iconSize: number = 0;

  switch (variant) {
    case "accent":
      variantStyles = "bg-none text-black rounded-full border-2 border-black";
      break;
    case "outline":
      variantStyles =
        "bg-none border-2 border-black border-dashed text-black rounded-full";
      break;
    case "filled":
      variantStyles = "bg-black text-white rounded-full";
      break;
    case "delete":
      variantStyles =
        "bg-none border-2 border-dashed border-red text-red rounded-full";
      break;
    case "modify":
      variantStyles =
        "bg-none border-2 border-dashed border-blue text-blue rounded-full";
      break;
    case "noBorder":
      variantStyles = "bg-none text-tercery";
      break;
    case "icon":
      if (iconTheme === "accent") {
        variantStyles =
          "bg-linear border border-secondary hover:opacity-85 rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          "bg-light border-primary border hover:bg-white/70 rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = `text-sm  ${
        variant === "icon"
          ? " flex items-center justify-center w-[40px] h-[40px]"
          : "py-[5px] px-[15px]"
      }`;
      iconSize = 15;
      break;
    case "medium":
      sizeStyles = `text-tag ${
        variant === "icon"
          ? " flex items-center justify-center w-[50px] h-[50px]"
          : "py-[8px] px-[20px]"
      }`;
      iconSize = 18;
      break;
    case "large":
      sizeStyles = `text-tag md:text-xl ${
        variant === "icon"
          ? " flex items-center justify-center w-[70px] h-[70px]"
          : "py-[10px] px-[25px]"
      }`;
      iconSize = 20;
      break;
  }

  return (
    <button
      type={type}
      className={clsx(
        Ambit.className,
        variantStyles,
        sizeStyles,
        iconSize,
        "cursor-pointer hover:bg-black/5 transition-all duration-200 ease-in-out",
        disabled && "cursor-not-allowed opacity-50", // Appliquer les styles désactivés
        className
      )}
      onClick={disabled ? undefined : onClick} // Désactiver onClick si disabled est vrai
      disabled={disabled} // Passer la prop disabled au bouton
    >
      {icon && variant === "icon" ? (
        <icon.icon size={iconSize} />
      ) : (
        <div className={clsx(icon && "flex items-center gap-2")}>
          {icon && iconPosition === "left" && <icon.icon size={iconSize} />}

          {children}

          {icon && iconPosition === "right" && <icon.icon size={iconSize} />}
        </div>
      )}
    </button>
  );
};

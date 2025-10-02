import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default:
          "bg-transparent border-2 border-[var(--color-cyber-cyan)] text-[var(--color-cyber-cyan)] hover:bg-[var(--color-cyber-cyan)] hover:text-black box-glow hover:scale-105 font-bold",
        destructive:
          "bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black",
        outline:
          "border-2 border-[var(--color-cyber-teal)] bg-transparent text-[var(--color-cyber-teal)] hover:bg-[var(--color-cyber-teal)] hover:text-black",
        secondary:
          "bg-[var(--color-cyber-cyan)]/20 text-[var(--color-cyber-cyan)] border-2 border-[var(--color-cyber-cyan)]/50 hover:border-[var(--color-cyber-cyan)] hover:bg-[var(--color-cyber-cyan)]/30",
        ghost: "hover:bg-[var(--color-cyber-cyan)]/10 hover:text-[var(--color-cyber-cyan)]",
        link: "text-[var(--color-cyber-cyan)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-13 px-10",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

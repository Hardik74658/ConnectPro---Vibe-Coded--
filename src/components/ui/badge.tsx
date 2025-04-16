import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-105",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105",
        destructive:
          "border-transparent bg-red-600 text-white hover:bg-red-700 hover:scale-105",
        outline:
          "text-foreground border-foreground hover:bg-foreground/10 hover:scale-105 dark:text-gray-900",
        success:
          "border-transparent bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500 text-white hover:shadow-lg hover:scale-105",
        warning:
          "border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:shadow-lg hover:scale-105",
        info:
          "border-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 text-white hover:shadow-lg hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        className,
        "dark:focus:ring-offset-gray-900 dark:bg-gray-100 dark:text-gray-900"
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

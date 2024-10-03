import React, { ComponentProps, FC } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

const buttonVariants = cva('px-4 py-2 font-semibold rounded', {
  variants: {
    size: {
      small: 'text-xs',
      medium: 'text-sm',
      large: 'text-lg',
    },
    variant: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-500 text-white',
      outline: 'bg-transparent border border-gray-400 text-gray-500',
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button: FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ size, variant, className }))} ref={ref} {...props} />
  },
)

Button.displayName = 'Button'
export { Button, buttonVariants }

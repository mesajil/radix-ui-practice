import { ComponentProps, FC } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonStyles = cva('px-4 py-2 font-semibold rounded', {
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

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonStyles> {}

export const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
  return <button className={cn(buttonStyles({ size, variant, className }))} {...props} />
}

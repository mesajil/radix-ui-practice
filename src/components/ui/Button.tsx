import { FC } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

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

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  label: string
}

export const Button: FC<ButtonProps> = ({ label, size, variant }) => {
  return <button className={buttonStyles({ size, variant })}>{label}</button>
}

import { type VariantProps } from 'class-variance-authority';
import React from 'react';
import { buttonVariants } from '../../lib/classNames/buttonVariants';
import { cn } from '../../utils/helper';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export default Button;

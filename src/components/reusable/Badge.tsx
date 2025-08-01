import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { badgeVariants } from '../../lib/classNames/badgeVariants';
import { cn } from '../../utils/helper';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
};

export default Badge;

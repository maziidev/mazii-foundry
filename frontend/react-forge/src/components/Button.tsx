import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant: 'primary' | 'danger';
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

function Button({ children, variant, onClick, size = 'md' }: ButtonProps) {
  const baseStyles = 'rounded font-semibold text-white cursor-pointer';
  const variantStyles =
    variant === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600'
      : 'bg-red-500 hover:bg-red-600';

  let sizeStyles = '';

  switch (size) {
    case 'sm':
      sizeStyles = 'text-sm px-2 py-1';
      break;
    case 'md':
      sizeStyles = 'text-md px-4 py-2';
      break;
    case 'lg':
      sizeStyles = 'text-lg px-4 py-3';
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${sizeStyles}`}>
      {children}
    </button>
  );
}

export default Button;

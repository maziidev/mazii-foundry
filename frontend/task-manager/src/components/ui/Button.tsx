import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant: 'primary' | 'danger';
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}
const Button = ({ children, variant, onClick, size = 'md' }: ButtonProps) => {
  const baseStyle = 'rounded font-semibold text-white cursor-pointer';
  const variantStyle =
    variant === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600'
      : 'bg-red-500 hover:bg-red-600';

  let sizeStyle = '';
  switch (size) {
    case 'sm':
      sizeStyle = 'text-sm px-2 py-1';
      break;
    case 'md':
      sizeStyle = 'text-md px-4 py-2';
      break;
    case 'lg':
      sizeStyle = 'text-lg px-4 py-3';
      break;
  }
  return (
    <>
      <button
        onClick={onClick}
        className={`${variantStyle} ${baseStyle} ${sizeStyle}`}>
        {children}
      </button>
    </>
  );
};

export default Button;

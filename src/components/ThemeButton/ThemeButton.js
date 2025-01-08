import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const BaseButton = styled.button`
  ${tw`text-base font-bold py-3 px-6 transition-all duration-200 rounded-[8px] relative overflow-hidden`}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 0;
    background-color: ${({ variant }) => {
      switch (variant) {
        case 'primary':
          return 'white';
        case 'secondary':
          return 'rgb(255, 54, 0)';
        case 'outline':
          return 'rgb(219, 234, 254)';
        case 'text':
          return 'transparent';
        default:
          return 'white';
      }
    }};
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    height: 100%;
  }

  span {
    position: relative;
    z-index: 2;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return tw`bg-primary text-white font-bold hover:text-black`;
      case 'secondary':
        return tw`bg-white text-black font-bold hover:text-white`;
      case 'outline':
        return tw`border-2 border-blue-600 text-blue-600 font-bold bg-transparent hover:bg-blue-50`;
      case 'text':
        return tw`bg-transparent text-blue-600 font-bold hover:underline p-0`;
      default:
        return tw`bg-primary text-white font-bold hover:text-black`;
    }
  }}

  ${({ size }) => {
    switch (size) {
      // case 'small':
      //   return tw`text-sm py-1.5 px-3`;
      // case 'medium':
      //   return tw`text-base py-2 px-4`;
      // case 'large':
      //   return tw`text-lg py-3 px-6`;
      // default:
      //   return tw`text-base py-2 px-4`;
    }
  }}

  ${({ fullWidth }) => fullWidth && tw`w-full`}
`;

const ThemeButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className,
  ...props
}) => {
  return (
    <BaseButton
      type={type}
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      className={className}
      {...props}
    >
      <span>{variant === 'icon' ? children : <>{children}</>}</span>
    </BaseButton>
  );
};

ThemeButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text', 'icon']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default ThemeButton;

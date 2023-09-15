import Link, { LinkProps } from 'next/link';
import { HTMLProps, FC } from 'react';

const StyledLink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  children, href, style, ...rest
}) => (
  <Link
    href={href}
    style={{
      textDecoration: "none",
      ...style
    }}
    {...rest}
  >
    {children}
  </Link>
);

export default StyledLink
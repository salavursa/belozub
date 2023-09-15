import Link, { LinkProps } from 'next/link';
import { HTMLProps, FC } from 'react';

const StyledLink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  children, href, style, target, rel, scroll, onClick
}) => (
  <Link
    onClick={onClick || undefined}
    href={href}
    target={target}
    rel={rel}
    scroll={scroll || false}
    style={{
      textDecoration: "none",
      ...style
    }}
  >
    {children}
  </Link>
);

export default StyledLink
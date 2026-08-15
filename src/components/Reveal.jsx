import { useReveal } from '../hooks/useReveal.js';

/* Wraps children in a scroll-triggered fade-up.
 * `delay` is in milliseconds; `as` swaps the rendered element. */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  style,
  ...rest
}) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      /* Merged, not spread over — a caller passing `style` for a background
       * must not wipe out the stagger delay. */
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

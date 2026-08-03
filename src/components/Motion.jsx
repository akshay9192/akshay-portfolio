export function MagneticLink({ children, className, ...props }) {
  return <a className={className || ''} {...props}>{children}</a>
}

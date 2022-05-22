type ButtonProps = {
  children: React.ReactNode
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = ({ children, ...rest }: ButtonProps) => (
  <button
    className="w-full rounded-md px-3 py-4 text-sm font-bold text-white hover:brightness-75"
    style={{
      background:
        'linear-gradient(156.07deg, rgba(36, 152, 243, 0.86) -10.81%, #123D68 84.63%)'
    }}
    {...rest}
  >
    {children}
  </button>
)

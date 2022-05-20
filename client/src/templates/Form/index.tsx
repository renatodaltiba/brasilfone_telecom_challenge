import { Illustration } from 'components/Illustration'
import { Logo } from 'components/Logo'

interface FormProps {
  children: React.ReactNode
}

export const Form = ({ children }: FormProps) => (
  <div className="relative flex h-full w-full flex-row">
    <header className="absolute top-8 flex w-full justify-center lg:left-0 lg:justify-start lg:pl-7">
      <Logo />
    </header>
    <div className="hidden h-screen items-center justify-center bg-gradient-to-br from-[#3AA3F5DB] to-[#123D68] lg:flex lg:w-1/2">
      <Illustration />
    </div>
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-[#3AA3F5DB] to-[#123D68] shadow-lg lg:w-1/2 lg:from-[white] lg:to-[white]">
      <div className="absolute z-0 flex w-screen lg:hidden">
        <Illustration />
      </div>
      <section className="relative z-20 flex h-auto w-full max-w-sm items-center justify-center rounded-lg bg-white shadow-lg lg:h-auto lg:max-w-[400px]">
        <div className="z-20 w-full rounded-xl lg:bg-white">{children}</div>
      </section>
    </div>
  </div>
)

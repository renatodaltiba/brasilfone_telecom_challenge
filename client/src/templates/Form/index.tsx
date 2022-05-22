import { Illustration } from 'components/Illustration'
import { Logo } from 'components/Logo'

interface FormProps {
  children: React.ReactNode
}

export const Form = ({ children }: FormProps) => (
  <section className="relative flex bg-gradient-to-br from-[#3AA3F5DB] to-[#123D68] lg:bg-white lg:from-[white] lg:to-[white]">
    <header className="absolute top-8 flex w-full justify-center lg:left-0 lg:justify-start lg:pl-7">
      <Logo />
    </header>
    <div className="hidden min-h-screen w-1/2 items-center justify-center bg-gradient-to-br from-[#3AA3F5DB] to-[#123D68] lg:flex">
      <Illustration />
    </div>
    <div className="z-20 my-0 mx-auto flex h-full min-h-screen w-full items-center justify-center rounded-xl pt-20 lg:w-1/2 lg:pt-0">
      <div className="my-5 w-full max-w-md rounded-lg border-2 bg-white">
        {children}
      </div>
    </div>
  </section>
)

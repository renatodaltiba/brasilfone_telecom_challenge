import { Logo } from 'components/Logo'

export default function Login() {
  return (
    <>
      <div
        className="relative flex h-screen flex-col pt-12"
        style={{
          background:
            'linear-gradient(156.07deg, rgba(36, 152, 243, 0.86) -10.81%, #123D68 84.63%)'
        }}
      >
        <header className="flex w-full items-center justify-center">
          <Logo />
        </header>

        <section className="flex flex-1 items-center justify-center px-9">
          <div className="w-full rounded-xl bg-white">
            <div className="flex flex-col items-center px-8 pt-11 pb-14">
              <h2 className="text-primary">Conecte-se</h2>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

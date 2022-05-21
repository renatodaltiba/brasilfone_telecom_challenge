import { Listbox, Transition } from '@headlessui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/Button'
import { FormInput } from 'components/FormInput'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Controller, FieldError, useForm } from 'react-hook-form'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { IoIosWarning } from 'react-icons/io'
import 'react-phone-input-2/lib/style.css'
import { RegisterSchema } from 'schemas/Register'

import { Form } from 'templates/Form'

export default function Register() {
  const passwordTypes = [
    {
      name: 'password'
    },
    {
      name: 'text'
    }
  ]
  const countryList = [
    {
      country: '+1',
      flag: 'https://countryflagsapi.com/svg/us'
    },
    {
      country: '+55',
      flag: 'https://countryflagsapi.com/svg/br'
    }
  ]

  const [passwordType, setPasswordType] = useState(passwordTypes[0].name)
  const [selected, setSelected] = useState(countryList[0])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(RegisterSchema)
  })

  const onSubmit = handleSubmit((data) => console.log(data))
  console.log(errors)

  return (
    <Form>
      <div className="flex flex-col items-center px-8 pt-11 pb-14">
        <h2 className="font-custom text-2xl font-bold text-primary">
          Cadastre-se
        </h2>
        <form onSubmit={onSubmit} className="mt-6 flex w-full flex-col gap-2">
          <FormInput
            name="name"
            label="Nome"
            type="text"
            errors={errors}
            register={register}
          />
          <FormInput
            name="email"
            label="E-mail"
            type="email"
            errors={errors}
            register={register}
          />

          <label
            htmlFor="ddi"
            className={` ${
              errors.ddi || errors.phone ? 'text-error' : 'text-primary'
            } flex w-full flex-col font-normal `}
          >
            Número
          </label>
          <div
            className={`${
              errors.ddi || errors.phone ? 'text-error' : 'text-primary'
            }  flex h-10 w-full flex-row items-center rounded-md px-1 outline-none ring-1 ring-[#3D454C]`}
          >
            <Controller
              name="ddi"
              control={control}
              defaultValue={selected}
              render={({ field: { onChange } }) => (
                <Listbox
                  value={selected}
                  onChange={(e) => {
                    onChange(e)
                    setSelected(e)
                  }}
                >
                  <div className="relative mt-1">
                    <Listbox.Button className="relative flex  w-full cursor-pointer flex-row items-center gap-1 bg-white px-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <img src={selected.flag} alt="" className="h-5 w-7" />
                      <span className="">{selected.country}</span>
                      <AiOutlineCaretDown />
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {countryList.map((item) => (
                          <Listbox.Option
                            key={item.country}
                            value={item}
                            className="flex flex-row items-center gap-2 p-2"
                          >
                            <img src={item.flag} alt="" className="h-5 w-7" />
                            <span className="">{item.country}</span>
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              )}
            />
            <Controller
              name="numero"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <input
                  className="h-full outline-none"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>

          <FormInput
            name="password"
            label="Senha"
            type="password"
            errors={errors}
            register={register}
          />
          <FormInput
            name="confirm_password"
            label="Repetir senha"
            type="password"
            errors={errors}
            register={register}
          />

          {Object.values(errors).map((error: FieldError) => {
            return (
              <div className="flex items-center justify-center gap-2 pt-3 text-error">
                <IoIosWarning className="text-2xl" />
                <span>{error.message}</span>
              </div>
            )
          })}

          <div className="mx-auto mt-6 h-[50] w-full max-w-xs">
            <Button>Conectar</Button>
          </div>
        </form>

        <div className="flex flex-col pt-4 text-center">
          <span>Já é cliente Disparo Pro ?</span>
          <Link href="/login" passHref>
            <a>
              <span className="font-custom text-base font-medium text-primary hover:brightness-75">
                Fazer Login
              </span>
            </a>
          </Link>
        </div>
      </div>
    </Form>
  )
}

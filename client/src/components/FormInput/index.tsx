import { InputHTMLAttributes, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type FormInputProps = {
  name: string
  label?: string
  register?: any
  wrapperClass?: string
  errors?: any
  className?: string
  type: string
} & InputHTMLAttributes<HTMLInputElement>

export const FormInput = ({
  register,
  name,
  errors,
  label,
  wrapperClass,
  type,
  ...rest
}: FormInputProps) => {
  const passwordTypes = [
    {
      name: 'password'
    },
    {
      name: 'text'
    }
  ]

  const [passwordType, setPasswordType] = useState(passwordTypes[0].name)

  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={label}
          className={`${
            errors[name] ? 'text-error' : 'text-primary'
          } flex w-full flex-col font-normal `}
        >
          {label}
        </label>
      )}
      <div className="relative flex h-full items-center">
        <input
          type={type === 'password' ? passwordType : type}
          className={`${
            errors[name] ? 'ring-error' : 'ring-[#3D454C]'
          }  mt-2 h-10 w-full rounded-md px-3 outline-none ring-1`}
          {...register(`${name}`)}
          {...rest}
        />
        {type === 'password' && (
          <button
            onClick={() =>
              setPasswordType(passwordType === 'password' ? 'text' : 'password')
            }
            className="absolute right-4 text-xl"
          >
            {passwordType === 'password' ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
    </div>
  )
}

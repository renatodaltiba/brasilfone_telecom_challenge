import { InputHTMLAttributes, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export type FormInputProps = {
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
  const passwordTypes = ['password', 'text']

  const [passwordType, setPasswordType] = useState(passwordTypes[0])

  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={label}
          className={`${
            errors[name] ? 'text-error' : 'text-primary'
          } flex w-full flex-col text-sm font-normal `}
        >
          {label}
        </label>
      )}
      <div className="relative flex h-full items-center">
        <input
          type={type === 'password' ? passwordType : type}
          className={`${
            errors[name]
              ? 'ring-error focus:ring-error'
              : 'ring-[#3D454C] focus:ring-[#3D454C]'
          } mt-2 h-10 w-full rounded-md border-none px-3 ring-[1px]
          `}
          {...register(`${name}`)}
          {...rest}
        />
        {type === 'password' && (
          <a
            onClick={() =>
              setPasswordType(passwordType === 'password' ? 'text' : 'password')
            }
            className="absolute right-4 cursor-pointer text-xl"
          >
            {passwordType === 'password' ? <FaEye /> : <FaEyeSlash />}
          </a>
        )}
      </div>
    </div>
  )
}

import { Listbox, Transition } from '@headlessui/react'
import { Fragment, InputHTMLAttributes, useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'

type PhoneWithCountryProps = {
  className: string
} & InputHTMLAttributes<HTMLInputElement>

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

export const PhoneWithCountry = ({
  className,
  ...rest
}: PhoneWithCountryProps) => {
  const [selected, setSelected] = useState(countryList[0])

  return (
    <div
      className={`${className} mt-2 flex h-10 w-full flex-row items-center rounded-md px-1 outline-none ring-1`}
    >
      <Listbox value={selected} onChange={setSelected}>
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
      <input type="text" className="h-full outline-none" {...rest} />
    </div>
  )
}

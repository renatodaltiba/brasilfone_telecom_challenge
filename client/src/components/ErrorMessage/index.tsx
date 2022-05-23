import { IoIosWarning } from 'react-icons/io'

export type ErrorMessageProps = {
  message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className="mt-1 flex  h-full w-full items-center justify-start gap-2 py-1 lg:rounded-lg lg:border-[3px] lg:border-[#FBDBDD] lg:bg-[#FDEBEC]">
    <div className="ml-3 hidden h-[35px] w-[1px] border-2 border-[#F0717B] bg-[#F0717B] lg:inline-block" />
    <div className="flex items-center justify-center rounded-md p-1 lg:bg-[#F0717B]">
      <IoIosWarning className="h-full text-lg text-error lg:text-white" />
    </div>
    <span className="px-1 py-1 text-[#F0717B]">{message}</span>
  </div>
)

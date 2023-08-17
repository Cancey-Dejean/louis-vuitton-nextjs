import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
  label: string
  url: string
  className?: string
}

const Button = ({ label = "Link", url = "#", className = "" }: ButtonProps) => {
  return (
    <Link
      href={url}
      className={twMerge(
        "border border-white px-[32px] py-[13px] rounded-full backdrop-blur-[15px] bg-[rgba(25,17,11,.2)] transition-all duration-[.3s] ease-in-out",
        "hover:shadow-border",
        className
      )}
    >
      {label}
    </Link>
  )
}

export default Button

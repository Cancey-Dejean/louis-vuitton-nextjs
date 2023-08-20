import Image from "next/image"
import Link from "next/link"

interface LinkItem {
  url?: string
  label?: string
}

interface CardServiceProps {
  imgSrc?: string
  imgLink?: string
  imgAlt: string
  title: string
  description: string
  links?: LinkItem[]
}

const CardService = ({
  links = [],
  imgLink = "#img-link",
  imgSrc,
  imgAlt = "",
  title = "",
  description = "",
}: CardServiceProps) => {
  return (
    <div className="flex flex-col w-full md:flex-1">
      <Link href={imgLink}>
        <Image
          src={imgSrc || "http://via.placeholder.com/413x233"}
          width={413}
          height={233}
          alt={imgAlt}
          className="w-full"
        />
      </Link>

      <div className="mt-6">
        <h3 className="mb-2 text-[18px] leading-[24px]">{title}</h3>

        <div className="text-[14px]">
          <p>{description}</p>
        </div>

        <ul className="flex items-start gap-4 mt-2">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.url as string}
                className="shadow-link-underline text-[14px] leading-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CardService

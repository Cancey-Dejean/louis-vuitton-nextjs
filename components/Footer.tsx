import Link from "next/link"
import { ReactNode } from "react"
import FooterMobile from "./FooterMobile"

type FooterItemLinksProps = {
  children: ReactNode
}

const FooterItemLinks = ({ children }: FooterItemLinksProps) => {
  return <ul className="flex flex-col gap-4">{children}</ul>
}

type FooterItemTitleProps = {
  title: string
}

const FooterItemTitle = ({ title }: FooterItemTitleProps) => {
  return (
    <p className="text-[10px] leading-[16px] uppercase tracking-[1px] mb-6">
      {title}
    </p>
  )
}

type FooterItemDescriptionProps = {
  children: ReactNode
}
const FooterItemDescription = ({ children }: FooterItemDescriptionProps) => {
  return <p className="text-[14px]">{children}</p>
}

interface FooterProps {}

const FooterLinkList1 = [
  {
    label: "Repairs",
    url: "#repairs",
  },
  {
    label: "Personalization",
    url: "#personalization",
  },
  {
    label: "Art of Gifting",
    url: "#art-of-gifting",
  },
  {
    label: "Download our Apps",
    url: "#download-our-apps",
  },
]

const FooterLinkList2 = [
  {
    label: "Fashion Shows",
    url: "#",
  },
  {
    label: "Arts & Culture",
    url: "#",
  },
  {
    label: "La Maison",
    url: "#",
  },
  {
    label: "Sustainability",
    url: "#",
  },
  {
    label: "Latest News",
    url: "#",
  },
  {
    label: "Careers",
    url: "#",
  },
  {
    label: "Foundation Louis Vuitton",
    url: "#",
  },
]

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-transparent  border-b border-t border-[#eae8e4] py-[40px] px-[56px]">
      <div className="grid grid-cols-2 items-start gap-8 md:flex-row md:flex">
        <div className="flex-1">
          <FooterItemTitle title="HELP" />

          <FooterItemDescription>
            Our Client Advisors are available to assist you by phone at{" "}
            <Link href="#" className="shadow-link-underline">
              +1.866.VUITTON
            </Link>
            . You can also{" "}
            <Link href="#contact-us" className="shadow-link-underline">
              chat
            </Link>{" "}
            or{" "}
            <Link href="#email-us" className="shadow-link-underline">
              email us
            </Link>
            .
          </FooterItemDescription>
        </div>

        <div className="flex-1">
          <FooterItemTitle title="SERVICES" />

          <FooterItemLinks>
            {FooterLinkList1.map((link, i) => (
              <li className="">
                <Link href={link.url} className="">
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterItemLinks>
        </div>

        <div className="flex-1">
          <FooterItemTitle title="ABOUT LOUIS VUITTON" />

          <FooterItemLinks>
            {FooterLinkList2.map((link, i) => (
              <li className="">
                <Link href={link.url} className="">
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterItemLinks>
        </div>

        <div className="flex-1">
          <FooterItemTitle title="EMAIL SIGN-UP" />

          <FooterItemDescription>
            <Link
              href="https://us.louisvuitton.com/eng-us/mylv/newsletter"
              className="shadow-link-underline"
            >
              Sign up
            </Link>{" "}
            for Louis Vuitton emails and receive the latest news from the
            Maison, including exclusive online pre-launches and new collections.
          </FooterItemDescription>
        </div>
      </div>

      <FooterMobile />
    </footer>
  )
}

export default Footer

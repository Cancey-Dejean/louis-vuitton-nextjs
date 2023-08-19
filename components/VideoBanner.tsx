"use client"
import Image from "next/image"
import Button from "./Button"
import { twMerge } from "tailwind-merge"
import { useRef, useState } from "react"
import classNames from "classnames"

interface ButtonData {
  url?: string
  label?: string
}

interface VideoBannerProps {
  videoSrc?: string
  title?: string
  imageSrc?: string
  primary?: boolean
  buttons?: ButtonData[]
  imgOption?: "image" | "video"
}

const VideoBanner = ({
  videoSrc = "",
  buttons = [],
  imageSrc = "",
  title = "Title",
  imgOption = "image",
  primary,
}: VideoBannerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(false)
    }
  }

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(true)
    }
  }

  return (
    <section
      className={twMerge(
        "relative h-[660px]",
        "after:absolute after:w-full after:h-[282px] after:bottom-0 after:content-[''] after:opacity-[0.953598546788426] after:bg-video-gradient",
        "md:h-[760px]",
        primary ? "h-[95vh] md:h-[760px]" : ""
      )}
    >
      <div className="h-full">
        {imgOption === "image" ? (
          <picture>
            <source
              media="(min-width: 48rem)"
              sizes="(min-width: 0rem) 100vw"
              srcSet={`${imageSrc}?wid=490 490w, ${imageSrc}?wid=600 600w, ${imageSrc}?wid=730 730w, ${imageSrc}?wid=1090 1090w, ${imageSrc}?wid=1180 1180w, ${imageSrc}?wid=1300 1300w, ${imageSrc}?wid=1440 1440w, ${imageSrc}?wid=2400 2400w, ${imageSrc}?wid=4096 4096w`}
            />
            <Image
              sizes="(min-width: 0rem) 100vw"
              alt=""
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
              width={1405}
              height={400}
              srcSet={`${imageSrc}?wid=490 490w, ${imageSrc}?wid=600 600w, ${imageSrc}?wid=730 730w, ${imageSrc}?wid=1090 1090w, ${imageSrc}?wid=1180 1180w, ${imageSrc}?wid=1300 1300w, ${imageSrc}?wid=1440 1440w, ${imageSrc}?wid=2400 2400w, ${imageSrc}?wid=4096 4096w`}
              src={`${imageSrc}`}
            />
          </picture>
        ) : (
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            autoPlay
            playsInline
            muted
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div
        className={classNames(
          "absolute z-[1] bottom-0 left-0 w-full p-12 text-white flex flex-col items-center justify-center gap-6 text-center"
        )}
      >
        <h2
          className={classNames(
            "text-[24px] leading-[28px]",
            "md:text-[32px] md:leading-[40px]"
          )}
        >
          {title}
        </h2>
        <div
          className={classNames("gap-4 flex flex-col", "sm:gap-4 sm:flex-row")}
        >
          {buttons.map((button, index) => (
            <Button
              key={index}
              url={button.url as string}
              label={button.label as string}
            />
          ))}
        </div>
      </div>

      {imgOption === "video" && (
        <div className="absolute bottom-0 right-0 z-20 text-white">
          <div className="relative">
            <button
              type="button"
              className={classNames(
                "pause p-[.75rem] m-[1rem] absolute",
                isPlaying ? "z-0 opacity-0" : "z-[1] opacity-100",
                "md:m-[3rem] md:p-[.75rem]"
              )}
              onClick={pauseVideo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-inherit"
              >
                <path
                  strokeinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            </button>

            <button
              type="button"
              className={twMerge(
                "play p-[.75rem] m-[1rem] relative",
                isPlaying ? "z-[1] opacity-100" : " z-0 opacity-0",
                "md:m-[3rem] md:p-[.75rem]"
              )}
              onClick={playVideo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-inherit"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoBanner

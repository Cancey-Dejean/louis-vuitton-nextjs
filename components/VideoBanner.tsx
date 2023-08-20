"use client"
import Image from "next/image"
import Button from "./Button"
import { twMerge } from "tailwind-merge"
import { useRef, useState } from "react"
import classNames from "classnames"
import Text from "./Text"

interface ButtonData {
  url?: string
  label?: string
}

interface VideoBannerProps {
  videoSrc?: string
  title?: string
  headingElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  imageSrc?: string
  imgAlt?: string
  primary?: boolean
  buttons?: ButtonData[]
  imgOption?: "image" | "video"
}

const VideoBanner = ({
  headingElement = "h1",
  videoSrc = "",
  buttons = [],
  imageSrc = "",
  imgAlt = "",
  title = "Title",
  imgOption = "image",
  primary = false,
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
        // "after:absolute after:w-full after:h-[282px] after:bottom-0 after:content-[''] after:opacity-[0.953598546788426]",
        "md:h-[760px]"
      )}
    >
      <div className="h-full">
        {imgOption === "image" ? (
          <Image
            src={imageSrc}
            alt={imgAlt}
            width={1405}
            height={791}
            className="h-full object-cover w-full"
          />
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
          "absolute bottom-0 w-full bg-video-gradient h-[400px]",
          primary ? "opacity-100" : "opacity-30"
        )}
      >
        <div
          className={classNames(
            "relative text-white flex flex-col items-center justify-center gap-6 text-center  p-12"
          )}
        ></div>
      </div>

      <div className={classNames("absolute z-[1] bottom-0 left-0 w-full")}>
        <div
          className={classNames(
            "relative text-white flex flex-col items-center justify-center gap-6 text-center  p-12"
          )}
        >
          <Text
            as={headingElement}
            className="text-[24px] leading-[28px] md:text-[32px] md:leading-[40px]"
          >
            {title}
          </Text>

          <div
            className={classNames(
              "gap-4 flex flex-col",
              "sm:gap-4 sm:flex-row"
            )}
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
      </div>

      {imgOption === "video" && (
        <div className="absolute bottom-0 right-0 z-20 text-white">
          <div className="relative">
            <button
              type="button"
              aria-label="Pause Button"
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
              aria-label="Play Button"
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

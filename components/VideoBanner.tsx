"use client"
import Image from "next/image"
import Button from "./Button"
import { twMerge } from "tailwind-merge"
import { useRef, useState } from "react"

interface ButtonData {
  url?: string
  label?: string
}

interface VideoBannerProps {
  videoSrc?: string
  title?: string
  imageSrc?: string
  buttons?: ButtonData[]
  imgOption?: "image" | "video"
}

const VideoBanner = ({
  videoSrc = "",
  buttons,
  imageSrc = "",
  title = "Title",
  imgOption = "image",
}: VideoBannerProps) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section
      className={twMerge(
        "relative",
        "after:absolute after:w-full after:h-[282px] after:bottom-0 after:content-[''] after:opacity-[0.953598546788426] after:bg-video-gradient"
      )}
    >
      <div>
        {imgOption === "image" ? (
          <Image
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
            width={1405}
            height={400}
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

      <div className="absolute z-[1] bottom-0 left-0 w-full p-12 text-white flex flex-col items-center justify-center gap-6">
        <h2 className="text-[32px] leading-[40px]">{title}</h2>
        <div className="flex gap-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              url={button.url as string}
              label={button.label as string}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 text-white">
        <div className="relative">
          {/* <div className="absolute">
            <button
              type="button"
              className="play p-[.75rem] m-[3rem]"
              onClick={playVideo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-inherit"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </button>
          </div> */}

          <button
            type="button"
            className="pause p-[.75rem] m-[3rem]"
            onClick={pauseVideo}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-inherit"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* <div className="absolute bottom-0 right-0 z-20">
        <div className="relative">
          <button type="button" className="play p-[.75rem] m-[3rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-inherit"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </button>
        </div>
      </div> */}
    </section>
  )
}

export default VideoBanner

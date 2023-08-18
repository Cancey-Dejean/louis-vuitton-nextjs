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
  buttons?: ButtonData[]
  imgOption?: "image" | "video"
}

const VideoBanner = ({
  videoSrc = "",
  buttons = [],
  imageSrc = "",
  title = "Title",
  imgOption = "image",
}: VideoBannerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

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

  const playSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = true
      setIsMuted(!isMuted)
    }
  }

  const pauseSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      setIsMuted(false)
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

      {imgOption === "video" && (
        <>
          <div className="absolute bottom-0 left-0 z-20 text-white">
            <div className="relative">
              <button
                type="button"
                className={classNames(
                  "pause p-[.75rem] m-[3rem] absolute",
                  isPlaying ? "z-0 opacity-0" : " z-[1] opacity-100"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              </button>

              <button
                type="button"
                className={twMerge(
                  "play p-[.75rem] m-[3rem] relative",
                  isPlaying ? "z-[1] opacity-100" : " z-0 opacity-0"
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

          <div className="absolute bottom-0 right-0 z-20 text-white">
            <div className="relative">
              <button
                type="button"
                className={classNames(
                  "pauseSound p-[.75rem] m-[3rem] absolute",
                  isMuted ? "z-0 opacity-0" : " z-[1] opacity-100"
                )}
                onClick={playSound}
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
                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              </button>

              <button
                type="button"
                className={twMerge(
                  "playSound p-[.75rem] m-[3rem] relative",
                  isMuted ? "z-[1] opacity-100" : " z-0 opacity-0"
                )}
                onClick={pauseSound}
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
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default VideoBanner

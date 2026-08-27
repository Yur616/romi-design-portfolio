"use client";

import { useEffect, useRef } from "react";
import styles from "./BearVideoScrubber.module.css";

type BearVideoScrubberProps = {
  className?: string;
  src?: string;
  poster?: string;
};

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const lerp = (from: number, to: number, amount: number) =>
  from + (to - from) * amount;

export function BearVideoScrubber({
  className = "",
  src = "/bear-look.webm?v=clean-2",
  poster = "/bear-look-poster.png?v=clean-2",
}: BearVideoScrubberProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const touchDevice =
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    if (touchDevice) {
      video.loop = true;
      video.playbackRate = 0.55;

      const startMobilePlayback = () => {
        void video.play().catch(() => {
          // Some browsers still require a user gesture despite muted playback.
        });
      };

      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        startMobilePlayback();
      } else {
        video.addEventListener("canplay", startMobilePlayback, { once: true });
      }

      return () => {
        video.removeEventListener("canplay", startMobilePlayback);
        video.pause();
      };
    }

    video.loop = false;
    video.pause();

    let targetProgress = 0.5;
    let smoothTime = 0;
    let animationFrame = 0;
    let metadataReady = false;

    const setInitialFrame = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      metadataReady = true;
      smoothTime = video.duration * targetProgress;
      video.currentTime = smoothTime;
    };

    const updateTargetFromPointer = (event: PointerEvent) => {
      const xProgress = clamp01(event.clientX / window.innerWidth);
      const yProgress = clamp01(event.clientY / window.innerHeight);

      // X maps directly to the timeline: 0 at the left edge, 1 at the right.
      // Y adds a small signed bias near the centre. Multiplying by sin(PI * X)
      // makes that bias disappear at both edges, so they stay exactly 0 and 1.
      const verticalBias =
        (0.5 - yProgress) * 0.14 * Math.sin(Math.PI * xProgress);
      targetProgress = clamp01(xProgress + verticalBias);
    };

    const returnToNeutralFrame = () => {
      targetProgress = 0.5;
    };

    const animate = () => {
      if (
        metadataReady &&
        video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA &&
        Number.isFinite(video.duration)
      ) {
        // Avoid seeking to the exact duration because browsers may wrap it to 0.
        const timelineEnd = Math.max(0, video.duration - 0.04);
        const targetTime = targetProgress * timelineEnd;
        smoothTime = lerp(smoothTime, targetTime, 0.085);

        if (!video.seeking && Math.abs(video.currentTime - smoothTime) > 1 / 60) {
          video.currentTime = smoothTime;
        }
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      setInitialFrame();
    } else {
      video.addEventListener("loadedmetadata", setInitialFrame, { once: true });
    }

    window.addEventListener("pointermove", updateTargetFromPointer, { passive: true });
    document.documentElement.addEventListener("mouseleave", returnToNeutralFrame);
    window.addEventListener("blur", returnToNeutralFrame);
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", updateTargetFromPointer);
      document.documentElement.removeEventListener("mouseleave", returnToNeutralFrame);
      window.removeEventListener("blur", returnToNeutralFrame);
      video.removeEventListener("loadedmetadata", setInitialFrame);
      video.pause();
    };
  }, []);

  return (
    <div className={`${styles.frame} ${className}`.trim()} aria-hidden="true">
      <video
        ref={videoRef}
        className={styles.video}
        src={src}
        poster={poster}
        preload="auto"
        muted
        playsInline
        tabIndex={-1}
      />
    </div>
  );
}

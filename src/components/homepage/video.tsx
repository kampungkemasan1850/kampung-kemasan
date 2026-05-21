"use client";

import React, { useState } from "react";
import Video from "next-video";

const videoSrc =
  "https://u81ejkwpsfwmax3s.public.blob.vercel-storage.com/profile-vid.mp4";

export default function VideoSection() {
  const [loading, setLoading] = useState(true);

  return (
    <section className="py-24 px-4 md:px-8 bg-zinc-50">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
        <div className="relative">
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          <Video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            controls={true}
            className="aspect-video w-full object-cover"
            onLoadedData={() => setLoading(false)}
            onError={() => setLoading(false)}
          />
        </div>
      </div>
    </section>
  );
}

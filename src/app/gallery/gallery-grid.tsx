
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

type GalleryItem = {
  id: string;
  title: string;
  caption: string | null;
  media_type: "image" | "video";
  media_url: string;
  thumbnail_url: string | null;
  category: string;
};

export default function GalleryGrid() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<GalleryItem | null>(null);

 useEffect(() => {
  let cancelled = false;

  async function loadGallery() {
    const { data, error } = await supabase
      .from("gallery_items")
      .select(
        "id, title, caption, media_type, media_url, thumbnail_url, category"
      )
      .eq("is_published", true)
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (cancelled) return;

    if (error) {
      console.error("Failed to load gallery:", error);
      setError(true);
    } else {
      setItems((data ?? []) as GalleryItem[]);
    }

    setLoading(false);
  }

  void loadGallery();

  return () => {
    cancelled = true;
  };
}, []);

  if (loading) {
    return <p className="text-[#61756c]">Loading gallery...</p>;
  }

  if (error) {
    return (
      <p className="text-[#61756c]">
        The gallery is temporarily unavailable.
      </p>
    );
  }

  if (!items.length) {
    return (
      <p className="rounded-2xl border border-[#dce8df] bg-white p-8 text-[#61756c]">
        Photos and videos will appear here soon.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            className="group overflow-hidden rounded-2xl border border-[#dce8df] bg-white text-left transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#edf5ed]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  item.thumbnail_url ||
                  item.media_url
                }
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />

              {item.media_type === "video" && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/15">
                  <span className="rounded-full bg-white/95 px-4 py-3 text-sm font-semibold text-[#193b35]">
                    ▶ Play video
                  </span>
                </span>
              )}
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#43816c]">
                {item.category}
              </p>
              <h3 className="mt-2 font-semibold text-[#193b35]">
                {item.title}
              </h3>
              {item.caption && (
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#61756c]">
                  {item.caption}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 p-4">
              <h2 className="font-semibold text-[#193b35]">
                {selected.title}
              </h2>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-lg px-3 py-2 text-sm hover:bg-[#edf5ed]"
                aria-label="Close media"
              >
                Close ✕
              </button>
            </div>

            {selected.media_type === "video" ? (
              <video
                key={selected.id}
                src={selected.media_url}
                poster={selected.thumbnail_url || undefined}
                controls
                playsInline
                preload="none"
                className="max-h-[75vh] w-full bg-black"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={selected.media_url}
                alt={selected.title}
                className="max-h-[75vh] w-full object-contain"
              />
            )}

            {selected.caption && (
              <p className="p-4 text-sm leading-6 text-[#61756c]">
                {selected.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

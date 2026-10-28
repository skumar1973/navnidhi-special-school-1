
import { createSupabaseServerClient } from "@/lib/supabase/server";

type Announcement = {
  id: string;
  title: string;
  content: string | null;
  published_at: string | null;
};

function formatDate(value: string | null) {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

export default async function NewsList() {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return (
      <p className="rounded-2xl border border-[#dce8df] bg-white p-8 text-[#61756c]">
        News is temporarily unavailable. Please try again later.
      </p>
    );
  }

  const { data, error } = await supabase
    .from("announcements")
    .select("id, title, content, published_at")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to load announcements:", error);

    return (
      <p className="rounded-2xl border border-[#dce8df] bg-white p-8 text-[#61756c]">
        We couldn't load the latest announcements. Please try again later.
      </p>
    );
  }

  const announcements = (data ?? []) as Announcement[];

  if (announcements.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-[#cbdccf] bg-white px-6 py-16 text-center">
        <h3 className="text-xl font-semibold">No announcements yet</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#61756c]">
          Check back soon for school news, upcoming activities and important updates.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {announcements.map((announcement) => {
        const date = formatDate(announcement.published_at);

        return (
          <article
            key={announcement.id}
            className="group flex h-full flex-col rounded-3xl border border-[#dce8df] bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-[#9bbfac] hover:shadow-lg hover:shadow-[#193b35]/5"
          >
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#4d9478]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#43816c]">
                School announcement
              </span>
            </div>

            {date && (
              <time
                dateTime={announcement.published_at ?? undefined}
                className="mb-3 text-sm text-[#7b8b82]"
              >
                {date}
              </time>
            )}

            <h3 className="text-xl font-semibold leading-snug tracking-tight">
              {announcement.title}
            </h3>

            {announcement.content && (
              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-[#61756c]">
                {announcement.content}
              </p>
            )}

            <div className="mt-auto pt-6">
              <div className="h-px w-full bg-[#e8eee8]" />
              <p className="pt-4 text-xs font-medium text-[#43816c]">
                Navnidhi Special School
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

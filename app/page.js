import { Suspense } from "react";
import VideoList from "./_components/VideoList";
import NewsList from "./_components/NewsList";
import EventItem from "./_components/EventItem";
import PictureDay from "./_components/PictureDay";
import { LuLoader2 } from "react-icons/lu";

export default function Page() {
  function Loading() {
    return (
      <div>
        <LuLoader2 className="animate-spin" />
      </div>
    );
  }
  return (
    <main className="mx-auto gap-10">
      <Suspense fallback={<Loading />}>
        <VideoList />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <NewsList />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <EventItem />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <PictureDay />
      </Suspense>
    </main>
  );
}

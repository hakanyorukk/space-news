"use client";

import { Suspense } from "react";
import VideoList from "./_components/VideoList";
import NewsItem from "./_components/NewsItem";
import NewsList from "./_components/NewsList";
import EventItem from "./_components/EventItem";
import PictureDay from "./_components/PictureDay";

export default function Page() {
  function Loading() {
    return <div>Loading...</div>;
  }
  return (
    <main className="mx-auto gap-10">
      <Suspense>
        <VideoList />
      </Suspense>

      <Suspense>
        <NewsList />
      </Suspense>

      <Suspense>
        <EventItem />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <PictureDay />
      </Suspense>

      {/* 
      <div className="max-w-7xl mx-auto min-h-[100vh]">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-indigo-800  via-violet-900  to-purple-500 ">
          Earth Information Center
        </h1>
        <p className="text-4xl">
          For more than 50 years, NASA satellites have provided data on
          Earth&apos;s land, water, air, temperature, and climate. NASA&apos;s
          Earth Information Center allows visitors to see how our planet is
          changing in six key areas: sea level rise and coastal impacts, health
          and air quality, wildfires, greenhouse gases, sustainable energy, and
          agriculture.
        </p>
      </div> */}
    </main>
  );
}

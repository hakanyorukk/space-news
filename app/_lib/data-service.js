export async function getPhoto1({ id }) {
  const res = await fetch(`https://images-api.nasa.gov/search?&nasa_id=${id}`);
  if (!res.ok) throw Error("Filed getting search results.");
  const data = await res.json();

  const item = data.collection.items[0].data;
  const video_URL = `http://images-assets.nasa.gov/video/${id}/${id}~large.mp4`;

  return { item, video_URL };
}
//https://ll.thespacedevs.com/2.2.0/event/3/

//https://api.spaceflightnewsapi.net/v4/articles/

//https://lldev.thespacedevs.com/2.2.0/launch/
export async function getNews() {
  try {
    const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles/");
    if (!res.ok) throw Error("Filed getting news.");
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return null;
  }
}

export async function getEvent() {
  try {
    const res = await fetch("https://lldev.thespacedevs.com/2.2.0/event/3/");
    if (!res.ok) throw Error("Filed getting event");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch event.", error);
    return null;
  }
}

export async function getUpcomingLaunch() {
  try {
    const res = await fetch(
      "https://lldev.thespacedevs.com/2.2.0/launch/upcoming"
    );
    if (!res.ok) throw Error("Failed getting upcoming launches!");
    const data = await res.json();
    return data.results[1];
  } catch (error) {
    console.error("Failed to fetch upcoming launch.", error);
    return null;
  }
}

export async function getApod() {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=g1Hc4MoIBwhz5PcIDFJ7SZiDhw8hGiCoIad5AzoU"
  );
  const data = await res.json();
  return data;
}
//g1Hc4MoIBwhz5PcIDFJ7SZiDhw8hGiCoIad5AzoU

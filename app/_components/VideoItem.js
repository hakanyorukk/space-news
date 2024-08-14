function VideoItem({ item, video_URL }) {
  return (
    <>
      <div className={`flex justify-between relative h-[58vh] mb-0 flex-col`}>
        <video
          src={video_URL}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover -z-10 "
        />

        <div className=" relative top-8 mx-10  max-w-[95%]">
          <h1 className="bg-clip-text bg-slate-50 text-transparent relative col-span-1 lg:max-w-[55%] text-2xl lg:text-6xl font-bold text-left leading-[1.2em]">
            {item[0].title}
          </h1>
          <p className="max-w-[50%] text-md lg:text-xl font-[500] overflow-hidden lg:visible invisible">
            {item[0]?.description
              ? item[0]?.description?.slice(0, 200) + "..."
              : " "}
          </p>
        </div>
        <div className="justify-center bottom-[0] bg-slate-800/[.5] backdrop-blur-sm z-10 grid lg:flex pt-2 px-0 lg:px-6 flex-row gap-[4rem] pb-12 lg:visible invisible ">
          {item[0].keywords?.slice(0, 6).map((i) => (
            <h2
              key={i}
              className="lg:visible invisible capitalize border-t-2 border-slate-600 text-sm lg:text-lg tracking-wider px-4 pt-0 font-medium "
            >
              {i}
            </h2>
          ))}
        </div>
      </div>
    </>
  );
}

export default VideoItem;

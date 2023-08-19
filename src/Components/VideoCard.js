import React from 'react'

const VideoCard = (video) => {

  const {channelTitle , title , publishedAt } = video.snippet;
  const {viewCount} = video.statistics;
  const {url} = video.snippet.thumbnails.medium;
  // console.log(url)
  // console.log(video)
  // console.log(title)
  return (
    <>
      <div className='w-[21rem]'>
        <img src={url} alt="thubnail" className="w-[25rem] h-[11rem] rounded-2xl hover:rounded-none hover:cursor-pointer hover:transition duration-100 ease-in-out" />

        <div className='my-2 flex gap-4'>
          <div className='w-[2.5rem] h-[2.5rem] rounded-full bg-green-200'></div>

          <div className='w-[18rem] '>
            <h1 className='font-bold'>{title}</h1>
            <h2>{channelTitle}</h2>
            <div className='flex gap-3'>
              <p>{viewCount}</p>
              <p>{publishedAt}</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default VideoCard


const ProfilePosts = () => {
  return (
        <div className="w-full flex mt-8 space-x-4">
      {/*Left*/}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src="https://c4.wallpaperflare.com/wallpaper/238/832/888/artificial-intelligence-binary-digital-art-glowing-wallpaper-preview.jpg" alt="" className="h-full w-full object-cover"/>
      </div>
      {/*Right*/}
      <div className="flex flex-col w-[65%]">
        <h1 className="rexr-xl font-bolt md:mb-2 mb-1 md:text-2xl">
          10 Uses of Artificial Intelligence in Real Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@SaiSidDev</p>
          <div className="flex space-x-2">
            <p>07/12/2020</p>
            <p>05.55</p>
          </div>
        </div>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est doloribus, accusantium, quibusdam ex nisi culpa quas pariatur veniam assumenda saepe voluptatum blanditiis! Fugiat praesentium odio perspiciatis soluta tempore laudantium maxime?</p>
      </div>
    </div>
  )
}

export default ProfilePosts
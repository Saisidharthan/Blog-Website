import { MdDelete, MdEdit } from "react-icons/md"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Commnet from "../Components/Commnet"

const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-8 px-[200px] mt-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-black md:text-3xl">10 Uses of Arificial Intelligence in Day to Day Life</h1>
                <div className="flex items-center justify-center space-x-2">
                    <p><MdEdit/></p>
                    <p><MdDelete/></p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>@SaiSidDev</p>
            <div className="flex space-x-2">
                <p>07/12/2020</p>
                <p>05.55</p>
            </div>
            </div>
            {/* Place your image here */}
            <img src="https://c4.wallpaperflare.com/wallpaper/238/832/888/artificial-intelligence-binary-digital-art-glowing-wallpaper-preview.jpg" className="w-full mx-auto mt-8" alt=""/>
            <p className="mx-auto mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="flex itmes-center mt-8 space-x-4 font-semibold">
                <p>Categories:</p>
                <div className="flex justify-center items-center space-x-2">
                    <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                    <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
                </div>
            </div>
            <div className="flex flex-col mt-4">
                <h3 className="mt-6 mb-4 font-semibold">Comments :</h3>
                {/* comments: */}
                <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-600">@SaiSidDev</h3>
                        <div className="flex justify-center items-center space-x-4">
                            <p className="text-gray-500 text-sm">07/12/2020</p>
                            <p className="text-gray-500 text-sm">05.55</p>
                            <div className="flex items-center justify-center space-x-2">
                                <p><MdEdit/></p>
                                <p><MdDelete/></p>
                            </div>
                        </div>
                    </div>
                    <p className="px-4 mt-2"> Nice Information!!!</p>
                </div>

                {/* comments: */}
                <Commnet/>
                <Commnet/>
            </div>
            {/* Write a comment */}
            <div className="w-full flex flex-col mt-4 md:flex-row">
                <input type="text" placeholder="Write a Comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
                <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0"> Add Comment</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails
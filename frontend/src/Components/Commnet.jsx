import { MdDelete, MdEdit } from "react-icons/md"

const Commnet = () => {
  return (
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
  )
}

export default Commnet
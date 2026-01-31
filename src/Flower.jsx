import { MdEdit, MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

function Flower({flower, onDelete, onEdit}) {


    return (
        <>

                <div
                    className="bg-amber-50  flex-col border-2 max-w-120 max-h-100 min-w-50 min-h-20 border-solid rounded-xl border-[#945034] p-2 justify-between w-fit h-fit ">
                    <h1 className="text-center text-2xl font-medium">{flower.flowerName}</h1>
                    <p className="text-center">{flower.description}</p>

                    <div className="mt-3 flex flex-row justify-center space-x-3">
                        <button aria-label="Edit" className="bg-[#FF9A9A] border-2 border-solid border-[#945034] p-1 hover:cursor-pointer"
                                onClick={() => onEdit(flower.id)}><MdEdit />
                        </button>
                        <button aria-label="Details" className="bg-[#FF9A9A] border-2 border-solid border-[#945034] p-1 hover:cursor-pointer"
                                onClick={() => onDelete(flower.id)}><TbListDetails />
                        </button>
                        <button aria-label="Delete" className="bg-[#FF9A9A] border-2 border-solid border-[#945034] p-1 hover:cursor-pointer"
                                onClick={() => onDelete(flower.id)}><MdDelete />
                        </button>
                    </div>
                </div>


        </>
    )
}

export default Flower
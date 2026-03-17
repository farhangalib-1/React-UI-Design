import { MoveRight } from "lucide-react"

const RightCards = (props) => {
  return (
    <div className=" h-full w-80  shrink-0 overflow-hidden rounded-4xl relative ">
        <img className="h-full w-full object-cover " src={props.img} alt="" />
        <div className="absolute inset-0 bg-black/30">

        </div>
        <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-between p-4">
            <div className="bg-white rounded-full w-10 h-10 p-4 flex items-center justify-center">
                <h1 className="text-2xl font-semibold" >{props.id}</h1>
            </div>
            <div >
                <p className="mb-15 font-semibold pr-6 text-white">{props.text}</p>
               <div className="btns flex items-center justify-between">
                    <button style={{backgroundColor:props.color}} className=" text-white py-1 px-5 rounded-full font-semibold">{props.status}</button>
                    <button className=" text-white rounded-full py-2 px-2 "><MoveRight size={'20px'} /></button>
                </div>
            </div>
             
        </div>
    </div>
  )
}

export default RightCards

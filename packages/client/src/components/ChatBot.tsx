import {useForm} from "react-hook-form";
import { FaArrowUp } from "react-icons/fa";
type FormData = {
    message: string;
};

const ChatBot = () => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <form
    onSubmit={handleSubmit(data => console.log(data))}
     className="flex flex-col gap-2 items-end border-0 focus:outline-none">
        <textarea
            {...register("message")}
         className="w-full" placeholder="Type your message here..." />
        <button className="bg-black text-white px-4 py-2 rounded-md">
            <FaArrowUp />
        </button>
        
    </form
    >
  )
}
 export default ChatBot
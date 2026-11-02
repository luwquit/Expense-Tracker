import { useStatusMsg } from "@/contexts/StatusMessageContext";

export function StatusMessage() {
  const {statusMsg, setStatusMsg} = useStatusMsg();
  return (
    <div className={`bg-deep-blue dark:bg-bluish-white w-fit text-bluish-white dark:text-deep-blue font-medium px-7 py-4 rounded-full 
    fixed bottom-10 right-1/2 translate-x-1/2 z-100 pointer-events-none opacity-0 ${statusMsg !== null ? 'animate-statusMsg' : 'hidden'}`}
    onAnimationEnd={() => {setStatusMsg(null)}}>
      <p>{statusMsg}</p>
    </div>
  );
}
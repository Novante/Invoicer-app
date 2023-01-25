import {useEffect} from "react";

export const useClickOutsideModal = (ref, handler) => {

    useEffect(() => {
        const listener = (event) => { // 'lyssnar' på event, check om vi klickar inom ref
            if (!ref.current || ref.current.contains(event.target)) {
                console.log(ref.current)
                return;
            }
            handler(event)
        }

        // calla listener varje gång vi clickar
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }
    }, [ref, handler])

}

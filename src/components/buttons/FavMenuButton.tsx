import { motion } from "framer-motion";
import { FavMenuButtonProps } from "../../types/FavMenuProps";

export default function FavMenuButton({onSideBar}: FavMenuButtonProps) {
    const heartPath =
        "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09 \C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5 c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

    function handleSideBar() {
        onSideBar();
    }    

    return (
        <motion.svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            whileHover={{scale: 1.2}}
            whileTap={{scale:0.9}}
            onClick={handleSideBar}
        >
        <motion.path
            d={heartPath}
            fill="red"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />
        </motion.svg>
    );
}

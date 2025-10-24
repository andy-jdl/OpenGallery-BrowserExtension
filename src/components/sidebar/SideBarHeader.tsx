import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface SideBarProps{
    path: string;
    fill: string;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

interface TitleBarProps {
  open: boolean;
}

export default function SideBarHeader({path, fill, open, setOpen}: SideBarProps) {
    return (
        <div className="flex items-center m-4">
          <SideBarButton path={path} fill={fill} open={open} setOpen={setOpen} />
          <SideBarTitle open={open} />
        </div>
    );
}

function SideBarButton({path, fill, open, setOpen}: SideBarProps) {
  return (
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{scale:1.2}}
          whileTap={{scale:0.9}}
          exit={{ opacity: 0, y: -10 }}
          aria-pressed={open}
          className="rounded-full p-2"
          layout
        >
            <motion.svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
            >
                <motion.path
                    d={path}
                    fill={fill}
                    animate={fill}
                    stroke="red"
                    strokeWidth="0.2"
                    transition={{duration:0.3}}
                />
            </motion.svg>
        </motion.button>
  )
}

function SideBarTitle({open}: TitleBarProps) {
  return (
    <div className="flex items-center gap-2">
      {open && (
        <motion.div
          layout
          initial={{opacity: 0, y: 12}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.125}}
        >
          <span className="block text-lg font-semibold">Favorites</span>
        </motion.div>
      )}
    </div>
  )
}
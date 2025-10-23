import { useEffect, useState } from "react";
import { Artwork } from "../../models";
import { motion } from 'framer-motion';
import SideBarHeader from "./SideBarHeader";

interface SidebarProps {
  favoritesList: Artwork[];
}

interface SideBarContentProps {
  open: boolean;
  favoritesList: Artwork[];

}

export default function Sidebar({favoritesList}: SidebarProps) {
  const FILLED_HEART =
    "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
  const OUTLINE_HEART =
    "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55L12 19.35l-.1-.09C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5 18.5 5 20 6.5 20 8.5c0 2.89-3.14 5.74-7.9 10.05z";
  const [open, setOpen] = useState(false);
  const [fill, setFill] = useState("none");
  const [path, setPath] = useState(OUTLINE_HEART);

  useEffect(() => {
    const hasFavorites = favoritesList.length > 0;
    setFill(hasFavorites ? "red" : "none");
    setPath(hasFavorites ? FILLED_HEART : OUTLINE_HEART)
  },[favoritesList])

  return (
    <div className="fixed top-0 left-0">
      <motion.nav 
        className="absolute top-0 left-0 h-screen border-r border-slate-200 bg-white shadow-lg p-2 overflow-auto"
        style={{
          width: open ? "225px" : 'fit-content'
        }}  
        layout
        initial={{opacity: 0}}
        animate={{opacity: 1}}
      >
        <SideBarHeader path={path} fill={fill} open={open} setOpen={setOpen}/>
        <SideBarContents favoritesList={favoritesList} open={open} />
      </motion.nav>
  </div>
  )
};

function SideBarContents({favoritesList, open}: SideBarContentProps) {
  return (
    <div>
      { open && 
        <motion.div
                  layout
            initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.125}}
        >
            <ul className="space-y-4">
              {favoritesList.map((fav) => (
                <li key={fav.id} className="text-sm text-gray-600">
                  <a href={fav.image_url} target="_blank">
                    {fav.title}
                  </a>
                </li>
              ))}
            </ul>
        </motion.div>
      }
    </div>
  )
}

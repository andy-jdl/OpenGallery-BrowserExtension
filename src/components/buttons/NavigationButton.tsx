import SmartButton from "./SmartButtons";
import { NavigationButtonProps } from "../../types/NavigationProps";
import { useNavigate } from "react-router-dom";

export default function NavigationButton({text, icon, route}:NavigationButtonProps) {

    // highlight when active (NavLink style) and support disabled states

    const navigate = useNavigate()

    function handleRoute() {
        if (route) {
            navigate(route);
        }
    }

    return (
        <SmartButton
            text={text}
            onClick={handleRoute}
            icon={icon}
        />
    )
}
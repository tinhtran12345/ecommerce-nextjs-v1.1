import {
    BsPhone,
    BsLaptop,
    BsFillCartPlusFill,
    BsCameraVideo,
    BsCpu,
} from "react-icons/bs";
import { TbDeviceIpadCheck } from "react-icons/tb";
import { AiOutlineApple } from "react-icons/ai";
import { TbCubePlus } from "react-icons/tb";
import { PiComputerTower } from "react-icons/pi";
import { AiOutlineTool } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { AiOutlineMobile, AiOutlineCamera, AiOutlineHdd } from "react-icons/ai";
import { LuScreenShare } from "react-icons/lu";
import { PiComputerTowerLight } from "react-icons/pi";
import { BiChip } from "react-icons/bi";

export const icons = {
    BsPhone,
    BsLaptop,
    TbDeviceIpadCheck,
    AiOutlineApple,
    TbCubePlus,
    PiComputerTower,
    AiOutlineTool,
    GrFormNext,
    GrFormPrevious,
};

export const technicalIcon = [
    {
        content: <AiOutlineMobile className="w-6 h-6" />,
        title: "icon-mobile",
    },
    { title: "icon-cam", content: <AiOutlineCamera className="w-6 h-6" /> },
    {
        title: "icon-front-camera",
        content: <BsCameraVideo className="w-6 h-6" />,
    },
    { title: "icon-cpu", content: <BsCpu className="w-6 h-6" /> },
    { title: "icon-hdd-black", content: <AiOutlineHdd className="w-6 h-6" /> },
    {
        title: "icon-screen-size",
        content: <LuScreenShare className="w-6 h-6" />,
    },
    {
        title: "icon-ram",
        content: <PiComputerTowerLight className="w-6 h-6" />,
    },
    { title: "icon-icon-vga", content: <BiChip className="w-6 h-6" /> },
];

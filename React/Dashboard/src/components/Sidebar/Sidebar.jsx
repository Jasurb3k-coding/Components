import SidebarItem from "./SidebarItem/SidebarItem";
import PremiumContentBanner from "./PremiumContentBanner/PremiumContentBanner";
import {
    HiOutlineChartPie, HiOutlineCog,
    HiOutlineDocumentText,
    HiOutlineFolder,
    HiOutlineHome,
    HiOutlineMail,
    HiOutlineUserGroup
} from "react-icons/hi";
import {useState} from "react";

function SidebarItemGenerator(id, title, icon) {
    return {
        id: id,
        title: title,
        icon: icon
    }
}

const sidebarItems = [
    SidebarItemGenerator(1, 'Overview', HiOutlineHome),
    SidebarItemGenerator(2, 'My Class', HiOutlineFolder),
    SidebarItemGenerator(3, 'Courses', HiOutlineDocumentText),
    SidebarItemGenerator(4, 'Messages', HiOutlineMail),
    SidebarItemGenerator(5, 'Instructors', HiOutlineUserGroup),
    SidebarItemGenerator(6, 'Reports', HiOutlineChartPie),
    SidebarItemGenerator(7, 'Settings', HiOutlineCog),
]

function Sidebar() {
    const [activeSidebarItem, setActiveSidebarItem] = useState(sidebarItems[0]);

    function changeActiveItem(item){
        setActiveSidebarItem(item)
    }

    return (
        <aside className="border-r-2 border-gray-200 hidden md:block md:w-1/4 lg:w-1/5 xl:w-1/6 h-full p-5">
            <img className="" src="https://i.ibb.co/hBJkfNz/image-removebg-preview-3.png" alt=""/>
            <ul className="flex flex-col space-y-2 mt-4">
                {sidebarItems.map(item => (
                    <SidebarItem key={item.id} id={item.id} title={item.title} Icon={item.icon}
                                 active={item === activeSidebarItem} makeActive={()=>changeActiveItem(item)}/>
                ))}
            </ul>
            <hr className="mt-6 w-5/6 mx-auto h-0.5 bg-gray-100 "/>
            <PremiumContentBanner/>
        </aside>
    )
}

export default Sidebar
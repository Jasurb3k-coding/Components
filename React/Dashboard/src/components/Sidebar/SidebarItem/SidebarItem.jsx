function SidebarItem({id, title, Icon, active=false, makeActive}) {
    return (
        <li onClick={makeActive} className={`px-5 py-3 rounded-full cursor-pointer duration-200 flex items-center space-x-2 ${active ? 'bg-blue-600 text-white font-medium' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-900'}`}>
            <Icon className="mr-3 text-xl "/> {title}
        </li>
    )
}

export default SidebarItem

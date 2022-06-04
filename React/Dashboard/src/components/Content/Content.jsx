import {HiOutlineSearch, HiOutlineBookOpen, HiOutlineCheck, HiOutlineBadgeCheck, HiOutlineUserGroup} from "react-icons/hi"
import OverviewCard from "./OverviewCard/OverviewCard";

const overviewCards = [
    {
        id: 1,
        title: 'Courses in Progress',
        number: 18,
        icon: HiOutlineBookOpen,
        color: 'bg-orange-500'
    },
    {
        id: 2,
        title: 'Courses Completed',
        number: 97,
        icon: HiOutlineCheck,
        color: 'bg-green-500'
    },
    {
        id: 3,
        title: 'Certificates Earned',
        number: 62,
        icon: HiOutlineBadgeCheck,
        color: 'bg-blue-700'
    },
    {
        id: 4,
        title: 'Community Support',
        number: 245,
        icon: HiOutlineUserGroup,
        color: 'bg-pink-600'
    },

]

function Content() {
    return (
        <main className="p-9 flex-1">
            <div className="search flex items-center relative group">
                <HiOutlineSearch className="text-xl absolute left-5 text-gray-500 group-focus-within:text-black"/>
                <input className="pl-14 pr-5 py-3 bg-gray-100 rounded-full" type="text" placeholder="Search"/>
            </div>
            <div className="overview mt-10">
                <h2 className="text-xl font-semibold">Overview</h2>
                <div className="cards flex justify-between w-full mt-5">
                    {overviewCards.map(item=>(
                        <OverviewCard key={item.id} id={item.id} title={item.title} color={item.color} number={item.number} Icon={item.icon}/>
                    ))}
                </div>
            </div>
            <div className="courses">
                <table></table>
            </div>
            <div className="recommendations">
                <div className="recommendedCard">

                </div>
            </div>
        </main>
    )
}

export default Content

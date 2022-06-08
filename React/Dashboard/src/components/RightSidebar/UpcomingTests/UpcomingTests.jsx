import {HiOutlineChevronRight} from 'react-icons/hi'

function Test(id, image, title, description, date) {
    return {
        id, image, title, description, date
    }
}

const upcomingTests = [
    Test(1, 'computer-screen.png', 'Basic Computer', 'Class 12', '15 May'),
    Test(2, 'colour.png', 'UI/UX Design', 'Class 45', '22 May'),
    Test(3, 'english.png', 'English Language', 'Class 15', '24 May'),
    Test(4, 'clock.png', 'Time Management', 'Class 05', '29 May'),
]

function UpcomingTests() {
    return (
        <div className="p-2 shadow rounded-xl flex flex-col pb-4">
            <h2 className="text-xl font-semibold p-3">Upcoming Tests</h2>
            <ul className="flex flex-col">
                {upcomingTests.map(test => (
                    <li className="hover:shadow cursor-pointer rounded-xl p-3 hover:bg-gray-50 duration-200">
                        <div className="flex items-center">
                            <div className="img w-12 h-12 p-2 bg-green-100 rounded-xl mr-2">
                                <img src={`/assets/tests/${test.image}`} alt=""/>
                            </div>
                            <div className="info flex-1">
                                <h6 className="font-semibold text-sm">{test.title}</h6>
                                <div className="additional flex justify-between text-sm">
                                    <h6 className="text-gray-400">{test.description}</h6>
                                    <h6 className="text-orange-400">{test.date}</h6>
                                </div>
                            </div>
                            <HiOutlineChevronRight className="ml-4"/>
                        </div>
                    </li>
                ))}
            </ul>
            <button className="font-medium px-5 py-3 text-center bg-black text-white rounded-full mx-auto mt-3">See All Upcoming Tests</button>
        </div>
    )
}

export default UpcomingTests

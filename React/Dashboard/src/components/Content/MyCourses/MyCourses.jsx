function Instructor(id, image, name) {
    return {
        id: id,
        image: image,
        name: name,
    }
}

function Course(id, image, title, completed_lessons, total_lessons, duration, instructor) {
    return {
        id: id,
        image: image,
        title: title,
        completed_lessons: completed_lessons,
        total_lessons: total_lessons,
        percent_completed: Math.floor(completed_lessons / total_lessons * 100),
        duration: duration,
        instructor: instructor,
    }

}

const myCoursesList = [
    Course(1, 'ux-design.png', 'UX Design Certificate', 18, 40, '24h 13m 28s', Instructor(1, 'i1.jpg', 'Sloan')),
    Course(2, 'growth.png', 'SEO Experts from Zero', 21, 23, '10h 0m 0s', Instructor(2, 'i2.jpg', 'Eliza')),
    Course(3, 'clipboard.png', 'Project Management', 7, 35, '17h 59m 0s', Instructor(3, 'i3.jpg', 'Emily')),
]

function MyCourses() {
    return (
        <div className="">
            <h1 className="text-xl font-semibold mt-10">Courses You're Taking</h1>
            <table className="w-full text-left mt-5">
                <tr className="border-b text-gray-400">
                    <th className="font-medium pb-3">Course Title</th>
                    <th className="font-medium pb-3" >Lessons Completed</th>
                    <th className="font-medium pb-3">Duration</th>
                    <th className="font-medium pb-3">Instructor</th>
                </tr>
                {myCoursesList.map(course => (
                    <tr className="font-semibold px-2">
                        <td className="flex items-center p-3 pl-0">
                            <div className="img w-10 h-10 p-2 bg-orange-100 rounded-xl mr-3">
                                <img src={`/assets/courses/${course.image}`} alt={course.title}/>
                            </div>
                            {course.title}
                        </td>
                        <td>{course.completed_lessons}/<span className=" text-gray-400">{course.total_lessons}</span> ({course.percent_completed}%)</td>
                        <td>{course.duration}</td>
                        <td className="flex items-center">
                            <div className="img h-9 w-9 overflow-hidden rounded-full bg-red-400 mr-2">
                                <img className="h-full w-full object-cover"
                                     src={`/assets/instructors/${course.instructor.image}`}
                                     alt=""/>
                            </div>
                            {course.instructor.name}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default MyCourses

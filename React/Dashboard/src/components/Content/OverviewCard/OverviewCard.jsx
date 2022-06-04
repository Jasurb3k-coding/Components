function OverviewCard({id, title, Icon, color, number}) {
    return (
        <div className={`shadow rounded-lg p-5 cursor-pointer duration-300 hover:ring`}>
            <div className="flex text-sm font-medium text-gray-500 items-center">
                <div className={`mr-2 p-1 rounded text-white ${color}`}>
                    <Icon/>
                </div>
                {title}
            </div>
            <h1 className="text-4xl font-bold mt-4">{number}</h1>
            <div className={`w-2/6 h-0.5 mt-2 ${color}`}/>
        </div>
    )
}

export default OverviewCard

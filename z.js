
<div className="flex items-center justify-between">
    <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search" className="w-32 px-4 py-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-purple-400" />
        <button className="px-4 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-lg focus:outline-none focus:ring focus:border-purple-400">Search</button>
    </div>

    <div className="flex items-center space-x-4">
        <div className="relative">
            <button className="px-4 py-2 text-gray-800 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:border-purple-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 hidden">
                <ul className="py-1">
                    <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-purple-500 hover:text-white">Lowest to highest</a></li>
                    <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-purple-500 hover:text-white">Highest to lowest</a></li>
                </ul>
            </div>
        </div>

        <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h4m5 0h10m-9 7h6m-2 5h8m-8 4h4m-3-3h6"></path></svg>
            <span className="text-gray-800">Total Items</span>
        </div>
    </div>
</div>
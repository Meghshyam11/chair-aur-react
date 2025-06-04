export default function TailwindTest() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Tailwind CSS Test
      </h1>
      
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Test Card
          </div>
          <p className="mt-2 text-gray-500">
            If you see styled elements below, Tailwind is working!
          </p>
          
          {/* Test Elements */}
          <div className="mt-6 space-y-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Hoverable Button
            </button>
            
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-red-500 rounded"></div>
              <div className="w-12 h-12 bg-green-500 rounded"></div>
              <div className="w-12 h-12 bg-yellow-500 rounded"></div>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 italic text-purple-700">
              This is a styled border and text
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
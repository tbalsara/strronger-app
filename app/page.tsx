export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-[#00D4B1] p-6 text-center">
        <h1 className="text-4xl font-bold">Strronger</h1>
        <p className="text-lg mt-2">Your Transformation Starts Here</p>
      </header>

      <main className="p-8 max-w-2xl mx-auto">
        <div className="bg-gray-900 rounded-2xl p-8 text-center">
          <h2 className="text-2xl mb-6">Welcome back, Tushar!</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <a href="/checkin" className="bg-[#00D4B1] py-6 rounded-xl text-xl font-bold">30-Day Check-In</a>
            <a href="/progress" className="bg-gray-800 py-6 rounded-xl text-xl font-bold">Progress Photos</a>
            <a href="/workouts" className="bg-gray-800 py-6 rounded-xl text-xl font-bold">Workouts</a>
            <a href="/nutrition" className="bg-gray-800 py-6 rounded-xl text-xl font-bold">Nutrition Plan</a>
          </div>

          <a href="https://wa.me/919833254106" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-5 shadow-2xl text-3xl z-50">
            💬
          </a>
        </div>
      </main>
    </div>
  );
}

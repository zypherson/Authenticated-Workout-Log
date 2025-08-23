export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Workout Log</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
          alt="Weightlifting"
          className="rounded-2xl shadow-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1526406915894-6a9f61b43b5c"
          alt="Running"
          className="rounded-2xl shadow-lg"
        />
        
        
      </div>
    </div>
  );
}

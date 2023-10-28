import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src="/hero-bg.webp"
          alt="Hero Background"
          layout="fill"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-serif">
          Experience Unforgettable Moments: Book Your Next Event Today!
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300 font-serif">
          Book Memorable Experiences Today: Discover{" "}
          <span>
            {" "}
            and Book Your Next Event with Ease on Our Platform - Your One-Stop
            Shop for Unforgettable Adventures.
          </span>
        </p>
        <div className="mt-12">
          <a
            href="https://chat.whatsapp.com/JAZuZjBUhjnKvAiMkam7B8"
            className="inline-block bg-white py-3 px-6 font-bold text-lg text-gray-900 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50"
          >
            <button>Book Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

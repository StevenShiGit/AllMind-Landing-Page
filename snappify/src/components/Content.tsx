import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex-col flex justify-between bg-amber-50 mx-auto text-black">
      {/* Section 1: Get Work Done */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-16">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold">Get work done.</h2>
          <p className="text-gray-700 mt-4">
            Your personalized multilingual AI assistant, with web search, uploads, and data connectors.
          </p>
          <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Discover le Chat →
          </button>
        </div>
        <Image src="/work.webp" alt="Work Chat" width={400} height={300} />
      </section>

      {/* Section 2: Code Faster */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-16">
        <Image src="/code.webp" alt="Code Chat" width={400} height={300} />
        <div className="max-w-md">
          <h2 className="text-3xl font-bold">Code faster.</h2>
          <p className="text-gray-700 mt-4">
            Build faster with coding assistance across 80+ languages.
          </p>
          <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Code with le Chat →
          </button>
        </div>
      </section>

      {/* Section 3: Build AI-powered Apps */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-16">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold">Build AI-powered apps.</h2>
          <p className="text-gray-700 mt-4">
            Build and deploy custom AI solutions with frontier models.
          </p>
          <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Discover la Plateforme →
          </button>
        </div>
        <Image src="/ai.webp" alt="AI Chat" width={400} height={300} />
      </section>
    </div>
  );
}

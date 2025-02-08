import { Instagram } from 'lucide-react';

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Hi there! I’m [Your Name], a passionate photographer who loves capturing the beauty of life's fleeting moments. My journey with photography started as a simple hobby, snapping pictures during travels and everyday adventures. Over time, that passion blossomed into a full-fledged creative pursuit. 
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          I specialize in [portrait, landscape, wedding, or other focus] photography, creating timeless images that tell stories. Whether it's capturing the raw emotion of a special event or the quiet beauty of a landscape, I strive to find the magic in every frame.
        </p>
        <p className="text-gray-600 leading-relaxed">
          My approach is simple: authentic, natural, and creative. I believe the best photos come when people feel comfortable and free to be themselves. I’m here to make that experience effortless and enjoyable.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Let's Create Together</h2>
        <p className="text-gray-600 leading-relaxed">
          Thank you for stopping by! If you're interested in working together or just want to say hello, feel free to get in touch. I’d love to hear from you and help bring your vision to life.
        </p>
        <a
        href="https://www.instagram.com/nhan_tvo/" // Replace with your link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold"
      >
        <Instagram className="mr-2" /> Follow me on Instagram
      </a>
      </div>
    );
  }
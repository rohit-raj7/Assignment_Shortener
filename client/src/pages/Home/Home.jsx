import {Link} from "react-router-dom"
import img from '../../assets/images/home.jpg'

function Home() {
 
  return (
    <div className="">
      
 
  


      {/* ------------ HERO SECTION ------------ */}
      <section
  className="flex justify-center items-center h-screen w-full bg-cover bg-center px-4"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${img})`
  }}
>
  <div
    className="max-w-3xl mx-auto text-center animate-fadeUp"
  >
    <h1 className="typing  text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-white">
      Learn. Build. Grow. with{" "}
      <span className=" text-yellow-300">DevSkills</span>
    </h1>

    <p className="fade-up mt-4 sm:mt-6 text-lg sm:text-xl text-white px-2">
      Gain real-world, job-ready skills through industry-focused internship program. <strong>DevSkills’ internships</strong>, and get certified.
    </p>

    <div className="fade-up mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
      <Link
        to="/course"
        className="fade-up px-8 py-3 rounded-full font-bold bg-gradient-to-r from-red-400 to-red-300 text-white shadow-lg hover:scale-105 transition"
      >
        Explore Skills
      </Link>

      <Link
        to="/verify"
        className="px-8 py-3 rounded-full font-bold border-4 border-yellow-300 text-white hover:bg-yellow-300 hover:text-gray-900 transition"
      >
        Verify Certificate
      </Link>
    </div>
  </div>
</section>


      {/* ------------ FEATURES SECTION ------------ */}
      <section className="py-20 px-4 text-center bg-gray-100">
        <h2 className=" text-4xl font-semibold mb-10">Why Choose DevSkills?</h2>

        <div className="flex justify-center flex-wrap gap-8">
          <div className="p-8 border-2 border-blue-700 rounded-xl w-72 bg-white shadow transition-transform duration-300 hover:scale-103">
            <h3 className="text-2xl mb-2">🎓 Learn Skills</h3>
            <p>Structured learning paths from AppDost experts.</p>
          </div>

          <div className="p-8 border-2 border-blue-700 rounded-xl w-72 bg-white shadow transition-transform duration-300 hover:scale-103">
            <h3 className="text-2xl mb-2">💼 Internships</h3>
            <p>Real-world projects with AppDost.</p>
          </div>

          <div className="p-8 border-2 border-blue-700 rounded-xl w-72 bg-white shadow transition-transform duration-300 hover:scale-103">
            <h3 className="text-2xl mb-2">📜 Certificates</h3>
            <p>AppDost-recognized certifications.</p>
          </div>
        </div>
      </section>

      {/* ------------ CTA SECTION ------------ */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-black to-gray-900 text-white">
        <h2 className="text-4xl font-semibold">
          Start Your Journey with{" "}
          <span className="text-yellow-300">AppDost</span>
        </h2>

        <p className="mt-4 text-xl">
          Join thousands who transformed their careers.
        </p>

        <button className="mt-8 px-10 py-3 rounded-full font-bold bg-gradient-to-r from-yellow-300 to-yellow-200 text-black shadow-lg hover:scale-105 transition">
          Start Learning
        </button>
      </section>

    </div>
  );
}

export default Home;

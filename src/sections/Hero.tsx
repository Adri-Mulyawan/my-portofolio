import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import profileImg from "../assets/profile.jpeg";
import { skills } from "../data/skills";

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col justify-center min-h-[calc(100vh-65px)] overflow-hidden">
      {/* Remove the complex background gradients to match the clean reference */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 lg:py-20">
        
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 max-w-4xl"
        >
          <h1 className="text-5xl font-medium leading-[1.1] tracking-tight text-[var(--heading)] md:text-6xl lg:text-7xl">
            Frontend Developer, React Developer & Web Developer.
          </h1>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          
          {/* Left: Big Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[400px] w-full overflow-hidden rounded-[2rem] lg:h-[500px]"
          >
            <img
              src={profileImg}
              alt="Adri Mulyawan"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            
            {/* Top Right: Reach Out Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#1a1a1a] p-8 text-white shadow-xl dark:bg-[var(--card)] dark:border dark:border-[var(--border)]"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold tracking-wider text-blue-400">REACH OUT</p>
                <ArrowUpRight size={24} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <div className="mt-8">
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">LET'S START.</h2>
                <p className="mt-2 text-lg italic text-gray-400">Ready To Collaborate.</p>
              </div>
              {/* Invisible full-card link */}
              <a href="#contact" className="absolute inset-0 z-10" aria-label="Reach out to me"></a>
            </motion.div>

            {/* Bottom Right: Skills Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 rounded-[2rem] border-2 border-dashed border-[var(--border)] bg-[var(--card)] p-8"
            >
              <div className="flex h-full flex-wrap content-center items-center justify-center gap-4 lg:gap-6">
                {skills.slice(0, 10).map((skill) => (
                  <a 
                    key={skill.name} 
                    href={skill.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-16 w-16 items-center justify-center transition-transform hover:scale-110"
                    title={skill.name}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="h-12 w-12 object-contain filter dark:brightness-90 transition-all group-hover:brightness-100" 
                    />
                  </a>
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front End Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Tasya Khaerani Janubiya</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am Tasya Khaerani Janubiya, a graduate of Information Systems
              from Universitas Nasional with over three years of experience in
              web development. I specialize in Next.js, React.js, Vue.js, and
              Nuxt.js, with a strong focus on building responsive user
              interfaces (UI) and enhancing user experience (UX). Throughout my
              career, I have developed and launched various websites that have
              been praised for their performance, efficiency, and
              user-friendliness. I am passionate about contributing as a Front
              End Developer, bringing a strong commitment to UI/UX best
              practices and Agile methodologies in every project I undertake.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/Resume-Tasya.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 "
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

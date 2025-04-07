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
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Tasya Khaerani Janubiya</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am Tasya Khaerani Janubiya, a graduate of Information Systems
              from Universitas Nasional with over two years of experience in web
              development. I specialize in Next Js, React JS, Vue JS, Nuxt JS,
              and full-stack development with Express.js, Node.js, and MySQL.
              I’ve successfully launched several websites praised for their
              efficiency and user-friendly design. I am eager to contribute as a
              Front End Developer or Full Stack, with a focus on UI/UX and Agile
              methodologies.
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

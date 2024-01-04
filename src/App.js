export default function App() {
  const links = [
    {
      color: "bg-red-400",
      text: "Portfolio",
      link: "https://dilip-nayak.web.app",
    },
    {
      color: "bg-sky-400",
      text: "Github",
      link: "https://github.com/Dilip86",
    },
    {
      color: "bg-red-400",
      text: "Linkedin",
      link: "https://www.linkedin.com/in/dilip-nayak-/",
    },
    {
      color: "bg-sky-400",
      text: "Instagram",
      link: "https://www.instagram.com/stories/___dilip.nayak___/",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-yellow-300">
        <div className="max-w-2xl mx-auto pt-10 pb-10 flex flex-col items-center">
          <div className="h-48 w-48 mx-auto">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.pexels.com/photos/19745364/pexels-photo-19745364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="rounded-full object-cover object-center"
                alt="Profile"
              />
            </div>
          </div>
          <div className="text-center w-96 mt-2"> {/* Adjusted spacing */}
            <h1 className="text-4xl font-bold mt-0  pt-0">Dilip Nayak</h1> {/* Removed margin-top */}
            <p className="text-lg mt-3">
              Hi, I'm Dilip Nayak, a graduate from GIET University, excelling in MERN Stack & Front End Development.
            </p>
          </div>
          <div className="flex flex-col gap-10 my-2">
            {links.map(({ text, color, link }, index) => {
              return (
                <a href={link} key={index} target="_blank">
                  <div className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}>
                    {text}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
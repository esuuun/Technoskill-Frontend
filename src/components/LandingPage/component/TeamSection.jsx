// ini team section di landing page
// animation pake framer motion

import { motion } from "framer-motion";

function TeamSection() {
  const teams = [
    {
      name: "Ikhsan",
      avatar:
        "https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436202.jpg?size=626&ext=jpg&ga=GA1.1.2126674172.1722491212",
      github: "https://github.com/esuuun",
    },
    {
      name: "Ditya",
      avatar:
        "https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436199.jpg?w=740&t=st=1722491743~exp=1722492343~hmac=005a40b0f46ddca5202a83dfbc0d2ecd2470236af8c43a1422f3ec01496a3c2e",
      github: "https://github.com/dityalif",
    },
    {
      name: "Rivi",
      avatar:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.2126674172.1722491212&semt=ais_hybrid",
      github: "https://github.com/ssantario",
    },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 0.8 }}
    >
      <section className="bg-background " id="teams">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="block w-full bg-gradient-to-b from-foreground to-primary bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Our team
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
              Meet our gentlemen skibidi team
            </p>
          </div>
          <div className="flex flex-wrap gap-20 justify-center">
            {teams.map((team, index) => (
              <motion.div
                whileHover={{scale:1.2}}
                className="text-center text-gray-500 dark:text-gray-400 cursor-pointer"
                key={index}
              >
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src={team.avatar}
                  alt="Bonnie Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span>{team.name}</span>
                </h3>
                <p>CEO/Co-founder</p>
                <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                    <a
                      href={team.github}
                      className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default TeamSection;

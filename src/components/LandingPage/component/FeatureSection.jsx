import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRoundMinus, UserRoundPen, UserRoundPlus } from "lucide-react";
import { motion } from "framer-motion";

function FeatureSection() {
  const features = [
    {
      title: "Add your employee",
      icon: UserRoundPlus,
      desc: "Quickly and easily integrate new employees into your system with just a few clicks.",
    },
    {
      title: "Edit your employee",
      icon: UserRoundPen,
      desc: "Update and manage employee details efficiently, ensuring up-to-date records.",
    },
    {
      title: "Delete your employee",
      icon: UserRoundMinus,
      desc: "Seamlessly remove employees from the system, keeping your list current.",
    },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 0.8 }}
      className="bg-background"
    >
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-foreground to-primary bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Manage your employee with ease
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            Tailor your employee management system to fit your company&apos;s
            unique needs, from scheduling to performance tracking.
          </p>
        </div>

        <div className="relative content-center mx-auto max-w-7xl z-10 flex flex-wrap gap-10 pt-14 justify-center">
          {features.map((feature, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={index}
              className="flex-initial w-full sm:w-[calc(50%-2.5rem)] lg:w-[calc(33.333%-2.5rem)]"
            >
              <Card className="text-center cursor-pointer">
                <CardHeader>
                  <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-primary">
                    <feature.icon />
                  </div>
                  <CardTitle>
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </section>
    </motion.div>
  );
}

export default FeatureSection;

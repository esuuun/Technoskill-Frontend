import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRoundMinus, UserRoundPen, UserRoundPlus } from "lucide-react";

function FeatureSection() {
    const features = [
        { title: "Add your employee", icon: UserRoundPlus, desc: 'Easily integrate new employees into your system with a simple and intuitive interface. Just a few clicks, and your new team member is ready to go.' },
        { title: "Edit your employee", icon: UserRoundPen, desc:'Easily integrate new employees into your system with a simple and intuitive interface. Just a few clicks, and your new team member is ready to go.'},
        { title: "Delete your employee", icon: UserRoundMinus , desc:'Remove employees from the system seamlessly, keeping your employee list current and relevant.'}];

  return (
    <div className="bg-background">
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
          Tailor your employee management system to fit your company&apos;s unique needs, from scheduling to performance tracking.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card className="text-center" key={index}>
              <CardHeader>
                <div
                  className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-primary"
                >
                  <feature.icon/>
                </div>
                <CardTitle><span>{feature.title}</span></CardTitle>
              </CardHeader>
              <CardContent>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FeatureSection;

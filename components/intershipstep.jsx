import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Inter from "@/assets/internship.svg";
import ship from "@/assets/internship1.svg";

const steps = [
  {
    number: 1,
    title: "Create an account with SCEF",
    description:
      "Create an account with SCEF with your details and navigate to the internship page to explore",
  },
  {
    number: 2,
    title: "Explore best option for you",
    description:
      "Gain valuable experience and enhance skills by working in a structured and high-performing environment.",
  },
  {
    number: 3,
    title: "Apply for internship",
    description:
      "Gain valuable experience and enhance skills by working in a structured and high-performing environment.",
  },
  {
    number: 4,
    title: "Wait for acceptance letter 💌",
    description:
      "Gain valuable experience and enhance skills by working in a structured and high-performing environment.",
  },
  {
    number: 5,
    title: "Make payment for internship 💸",
    description:
      "Gain valuable experience and enhance skills by working in a structured and high-performing environment.",
  },
  {
    number: 6,
    title: "Prepare for your first day 😎",
    description:
      "Gain valuable experience and enhance skills by working in a structured and high-performing environment.",
  },
];

export default function InternshipSteps() {
  return (
    <div className="max-w-7xl mx-auto px-30 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Steps to Intern with SCEF</h2>
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Image
            src={Inter}
            alt="Team working"
            className="w-full h-[300px] object-cover rounded-2xl"
          />
          <Image
            src={ship}
            alt="Office workspace"
            className="w-full h-[300px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Beyond Expectation
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          Our revolutionary AI SEO tools have transpormed our clients strategies
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] ">
          <motion.div
            initial={{
              translateX: "0%",
            }}
            animate={{
              translateX: "-50%",
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className=" flex gap-5 pr-5 flex-none"
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 md:p-10 rounded-xl bg-gradient-to-bl from-[rgb(140,69,255,.3)] to-black max-w-xs md:max-w-md flex-none"
              >
                <p className="text-lg md:text-2xl tracking-tight">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg ">
                    <Image
                      src={testimonial.avatarImg}
                      alt=""
                      className="size-11 rounded-lg grayscale "
                    />
                  </div>
                  <div className="">
                    <p>{testimonial.name} </p>
                    <p className="text-white/50 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;

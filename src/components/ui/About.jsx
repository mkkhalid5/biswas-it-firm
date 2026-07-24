"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

import aboutLogo from "@/assests/about_logo.png";

const About = () => {
    return (
        <section className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

                    {/* ================= Left Content ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-8"
                    >

                        {/* Badge */}
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#2563EB]">
                                <GoDotFill />
                                আমাদের সম্পর্কে
                            </span>
                        </div>
                        {/* Heading */}
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#0F172A]">
                                Biswas IT Firm —
                                <br />
                                <span className="text-[#2563EB]">
                                    আমাদের গল্প
                                </span>
                            </h2>
                            <p className="text-[#64748B] leading-8">
                                ২০১৯ সালে প্রতিষ্ঠিত Biswas IT Firm আজ বাংলাদেশের অন্যতম
                                বিশ্বস্ত সফটওয়্যার কোম্পানি। আমরা বিশ্বাস করি প্রযুক্তি
                                মানুষের জীবন পরিবর্তন করতে পারে — এই বিশ্বাস নিয়েই আমাদের
                                যাত্রা শুরু।
                            </p>
                        </div>

                        {/* Mission & Vision */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 hover:shadow-lg transition">
                                <h3 className="font-bold text-lg text-[#0F172A] mb-3">
                                    আমাদের মিশন
                                </h3>

                                <p className="text-[#64748B] leading-7">
                                    বাংলাদেশের প্রতিটি ব্যবসাকে ডিজিটাল যুগে এগিয়ে নিয়ে
                                    যাওয়া।
                                </p>
                            </div>
                            <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 hover:shadow-lg transition">
                                <h3 className="font-bold text-lg text-[#0F172A] mb-3">
                                    আমাদের ভিশন
                                </h3>
                                <p className="text-[#64748B] leading-7">
                                    দক্ষিণ এশিয়ার অন্যতম বিশ্বস্ত Software Company হিসেবে
                                    প্রতিষ্ঠিত হওয়া।
                                </p>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="flex items-center gap-1 shrink-0 font-bold text-[#2563EB]">
                                        2019
                                        <GoDotFill />
                                    </span>
                                    <p className="text-[#475569]">
                                        কোম্পানি প্রতিষ্ঠা — ঢাকায় ৩ জন টিম নিয়ে যাত্রা শুরু
                                    </p>
                                </li>

                                <li className="flex items-start gap-4">
                                    <span className="flex items-center gap-1 shrink-0 font-bold text-[#2563EB]">
                                        2021
                                        <GoDotFill />
                                    </span>
                                    <p className="text-[#475569]">
                                        ১০০+ ক্লায়েন্ট মাইলস্টোন অর্জন
                                    </p>
                                </li>

                                <li className="flex items-start gap-4">
                                    <span className="flex items-center gap-1 shrink-0 font-bold text-[#2563EB]">
                                        2023
                                        <GoDotFill />
                                    </span>
                                    <p className="text-[#475569]">
                                        আন্তর্জাতিক বাজারে প্রসারিত — UAE ও UK
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">

                                    <span className="flex items-center gap-1 shrink-0 font-bold text-[#2563EB]">
                                        2024
                                        <GoDotFill />
                                    </span>
                                    <p className="text-[#475569]">
                                        ISO সার্টিফিকেশন ও ৩০+ টিম মেম্বার
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* ============== Right Section Part 2 ============== */}
                    {/* ================= Right Image ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative w-full lg:w-1/2 max-w-xl mx-auto"
                    >
                        {/* Main Image */}
                        <Image
                            src={aboutLogo}
                            alt="About Biswas IT Firm"
                            priority
                            className="w-full h-auto rounded-3xl object-cover"
                        />

                        {/* CEO Card */}
                        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-white">
                            <h3 className="text-xl font-bold">
                                Sami Biswas
                            </h3>
                            <p className="mt-1 text-sm text-white/80">
                                CEO & Founder, Biswas IT Firm
                            </p>
                            <p className="mt-3 text-sm leading-7 text-white/80">
                                প্রযুক্তি দিয়ে মানুষের জীবন সহজ করাই আমার লক্ষ্য।
                            </p>
                        </div>

                        {/* Experience Card */}
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                 absolute
                                 top-4
                                 right-4
                                 md:-top-5
                                 md:-right-5
                                 rounded-3xl
                                 bg-white
                                 border
                                 border-slate-200
                                 shadow-xl
                                 p-5">
                            <h2 className="text-4xl font-extrabold text-[#2563EB]">
                                5+
                            </h2>
                            <p className="text-sm text-[#64748B]">
                                Years of
                            </p>
                            <p className="font-bold text-[#0F172A]">
                                Experience
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default About;
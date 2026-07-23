import Image from 'next/image';
import logo from '@/assests/biswasitfirm.png';
import { LuFacebook } from "react-icons/lu";
import { VscTwitter } from 'react-icons/vsc';
import { FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const Footer = () => {
    const socialIcons = [
        LuFacebook,
        VscTwitter,
        FiLinkedin,
        FaWhatsapp,
    ];
    return (
        <div className='bg-[#0F172A] px-8 py-16'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-white'>
                {/* company details */}
                <div className='space-y-4'>
                    <div className='flex items-center gap-1 '>
                        <Image  src={logo} alt='biswasitfirm' height={36} width={36} className='bg-white rounded-full w-9 h-9' />
                        <p className='font-bold text-xl'>Biswas<span className='text-blue-500'>IT</span> Firm</p>
                    </div>
                    <p className='text-[#FFFFFF]/50'>আধুনিক সফটওয়্যার সমাধানে বাংলাদেশের বিশ্বস্ত অংশীদার।</p>
                    <div className="flex gap-2">
                        {socialIcons.map((Icon, index) => (
                            <div
                                key={index}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-primary hover:scale-110"
                            >
                                <Icon className="text-white text-lg" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* quick links */}
                <div>
                    <h2 className='font-bold text-[#ffffff]/90'>Quick Links</h2>
                    <ul className='text-[#ffffff]/50 mt-5 space-y-2 cursor-pointer'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Team</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                {/* service */}
                <div>
                    <h2 className='font-bold text-[#ffffff]/90'>সার্ভিস</h2>
                    <ul className='text-[#ffffff]/50 mt-5 space-y-2 cursor-pointer'>
                        <li>ওয়েব ডেভেলপমেন্ট</li>
                        <li>মোবাইল অ্যাপ</li>
                        <li>ডিজিটাল মার্কেটিং</li>
                        <li>ক্লাউড সমাধান</li>
                        <li>সাইবার সিকিউরিটি</li>
                    </ul>
                </div>

                {/* contact info */}
                <div className="space-y-5">
                    <div className="space-y-3">
                        <h2 className="text-lg font-bold text-white/90"> Newsletter </h2>
                        <p className="text-sm leading-6 text-white/50"> আমাদের আপডেট সরাসরি আপনার ইনবক্সে পান। </p>
                    </div>
                    <form className="flex items-center gap-3">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 h-12 rounded-full border border-white/10 bg-white/5 px-5 text-white placeholder:text-white/40 outline-none transition-all focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] transition-all duration-300 hover:bg-[#1D4ED8]"
                        > 
                        <span className="sr-only">Subscribe</span>
                        <IoPaperPlaneOutline className="text-xl text-white" aria-label="Submit form" /> </button>
                    </form>
                </div>

            </div>
            <div className='mt-12 border-t border-gray-600 pt-8'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <p className='text-[#ffffff]/50 text-center md:text-start'>© 2024 Biswas IT Firm. সর্বস্বত্ব সংরক্ষিত।</p>
                    <p className='text-[#ffffff]/50 text-center md:text-start'>Privacy Policy Terms of Service</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
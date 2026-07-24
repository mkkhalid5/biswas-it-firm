import { Button, FieldError, Input, Label, TextArea, TextField } from '@heroui/react';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { GoDotFill } from 'react-icons/go';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const ContactForm = () => {
    const contactInfo = [
        {
            icon: <FiPhone size={22} />,
            title: "ম্যানেজার (ফোন)",
            value: "+880 1XXX-XXXXXX",
        },
        {
            icon: <FiMail size={22} />,
            title: "CEO (ইমেইল)",
            value: "ceo@biswasit.com",
        },
        {
            icon: <FiMapPin size={22} />,
            title: "অফিস",
            value: "ঢাকা, বাংলাদেশ",
        },
        {
            icon: <FiClock size={22} />,
            title: "অফিস সময়",
            value: "রবি-বৃহস্পতিবার: ৯টা–৬টা",
        },
    ];

    return (
        <div className='space-y-24 bg-[#F8FAFC]'>
            <div className='px-8'>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <p className='flex justify-center items-center bg-[#EFF6FF] w-max px-4 rounded-2xl py-2 border text-[#2563EB]'>
                        <GoDotFill /> <span>যোগাযোগ করুন</span>
                    </p>
                    <h2 className='font-extrabold text-3xl md:text-5xl'>{"Let's"} <span className='text-[#2563EB]'> Work Together</span></h2>
                    <p className='text-[#64748B] text-center md:text-start'>আজই আমাদের সাথে যোগাযোগ করুন এবং আপনার প্রজেক্ট নিয়ে কথা বলুন।</p>
                </div>
                <div className='pt-16 flex flex-col md:flex-row justify-around'>
                    <div className="space-y-8">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center">
                                    {item.icon}
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        {item.title}
                                    </p>

                                    <h4 className="text-lg font-semibold text-gray-900 mt-1">
                                        {item.value}
                                    </h4>
                                </div>
                            </div>
                        ))}

                        <div className="flex items-center gap-3 pt-4 mb-4">
                            <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white duration-300">
                                <FaFacebookF />
                            </button>
                            <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white duration-300">
                                <FaTwitter />
                            </button>
                            <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white duration-300">
                                <FaLinkedinIn />
                            </button>
                            <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white duration-300">
                                <FaInstagram />
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-3xl border border-default-200 bg-white p-6 md:p-8 shadow-lg mb-4">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <TextField
                                        isRequired
                                        name="name"
                                        type="text"
                                    >
                                        <Label>আপনার নাম *</Label>
                                        <Input placeholder="আপনার পূর্ণ নাম" />
                                        <FieldError />
                                    </TextField>

                                    <TextField
                                        isRequired
                                        name="email"
                                        type="email"
                                    >
                                        <Label>Email</Label>
                                        <Input placeholder="john@example.com" />
                                        <FieldError />
                                    </TextField>
                                </div>
                                <TextField
                                    isRequired
                                    name="phone"
                                    type="phone"
                                >
                                    <Label>ফোন নম্বর</Label>
                                    <Input placeholder="+880 1XXX-XXXXXX" />
                                    <FieldError />
                                </TextField>
                                <TextField
                                    isRequired
                                    name="phone"
                                    type="textfield"
                                >
                                    <Label>আপনার বার্তা *</Label>
                                    <TextArea
                                        aria-label="Quick project update"
                                        className="h-32 w-96"
                                        placeholder="আপনার প্রজেক্ট সম্পর্কে বলুন..."
                                    />
                                </TextField>
                                <Button
                                    type="submit"
                                    color="primary"
                                    radius="full"
                                    size="lg"
                                    startContent={<IoPaperPlaneOutline size={20} />}
                                    className="w-full font-semibold shadow-lg"
                                >
                                    বার্তা পাঠান
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
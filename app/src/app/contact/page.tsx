'use client';
import React from 'react';
import Image from 'next/image';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ToastErrorHandler } from "@/components/ToastErrorHandler";
import  {sendEmail} from "@/app/utils/sendEmail";

const Contact: React.FC = () => {

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must be at most 50 characters'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        description: Yup.string().required('Message is required'),
    });

    const FormContent = () => (
        <Formik
            initialValues={{ name: '', email: '', description: '' }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
            validateOnChange
            validateOnBlur={false}
        >
            <Form className="flex flex-col gap-3 sm:gap-4">
                <ToastErrorHandler />
                <Field
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="px-3 sm:px-4 py-2 md:py-3 rounded-xl sm:rounded-2xl bg-[#E3E3E3]/40 placeholder-white text-white outline-none
                     focus:ring-2 focus:ring-[#eff1c5] text-sm sm:text-base"
                />

                <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="px-3 sm:px-4 py-2 md:py-3 rounded-xl sm:rounded-2xl bg-[#E3E3E3]/40 placeholder-white text-white outline-none
                     focus:ring-2 focus:ring-[#eff1c5] text-sm sm:text-base"
                />

                <Field
                    name="description"
                    as="textarea"
                    placeholder="Message"
                    rows="6"
                    className="px-3 sm:px-4 py-2 md:py-3 rounded-xl sm:rounded-2xl bg-[#E3E3E3]/40 placeholder-white text-white outline-none
                     focus:ring-2 focus:ring-[#eff1c5] text-sm sm:text-base resize-none"
                />

                <button
                    type="submit"
                    className="bg-[#EFF1C5] text-black orbitronBold fs-20 py-2  rounded-full hover:scale-105
                     transition-transform mx-auto w-3/4 cursor-pointer">
                    Submit
                </button>
            </Form>
        </Formik>
    );

    const PageTitle = () => (
        <div className="orbitronBold whitespace-pre-line">
            {`LET'S BUILD\nSOMETHING\nBRILLIANT.`}
        </div>
    );

    const ProfileSection = () => (
        <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#EFF1C5]">
                <Image src="/images/profile.jpg" alt="Profile" width={100} height={100} className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
                <div className="orbitronBold fs-24 mb-1 color-eff1c5">Atakan Akin</div>
                <div className="orbitron fs-14 hover:[color:#EFF1C5]">
                    <a href="mailto:atakan.akindev@gmail.com">
                        atakan.akindev@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            {/* Desktop */}
            <div className="grid grid-cols-2 mx-auto hidden lg:grid gap-8">
                <div className="mr-5">
                    <div className="orbitronBold fs-64 mb-7">
                        <PageTitle />
                    </div>
                    <ProfileSection />
                </div>
                <div className="bg-[#ffffff10] backdrop-blur-md p-5 rounded-4xl w-[400px] mx-auto shadow-lg">
                    <FormContent />
                </div>
            </div>

            {/* Tablet */}
            <div className="hidden md:grid lg:hidden space-y-6 px-4">
                <div className="orbitronBold fs-48 text-center">
                    <PageTitle />
                </div>
                <div className="bg-[#ffffff10] backdrop-blur-md p-4 rounded-3xl max-w-md mx-auto shadow-lg">
                    <FormContent />
                </div>
                <div className="flex justify-center">
                    <ProfileSection />
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden space-y-4 px-4">
                <div className="orbitronBold fs-48 text-center">
                    <PageTitle />
                </div>
                <div className="bg-[#ffffff10] backdrop-blur-md p-3 rounded-2xl shadow-lg">
                    <FormContent />
                </div>
                <div className="flex justify-center">
                    <ProfileSection />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;

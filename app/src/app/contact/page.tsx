'use client';
import React from 'react';
import Image from 'next/image';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ToastErrorHandler } from "@/components/ToastErrorHandler";

const Contact: React.FC = () => {

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters')
            .max(10, 'Name must be at most 10 characters'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        description: Yup.string().required('Message is required'),
    });

    const FormContent = () => (
        <Formik
            initialValues={{ name: '', email: '', description: '' }}
            validationSchema={validationSchema}
            onSubmit={() => {
                toast.success('Demand submitted!');
            }}
            validateOnChange
            validateOnBlur={false}
        >
            <Form className="flex flex-col gap-4">
                <ToastErrorHandler />
                <Field
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="px-4 py-2 md:py-3 rounded-2xl bg-[#E3E3E3]/40 placeholder-white text-white outline-none
                     focus:ring-2 focus:ring-[#eff1c5]"
                />

                <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 md:py-3 rounded-2xl bg-[#E3E3E3]/40 placeholder-white text-white outline-none
                     focus:ring-2 focus:ring-[#eff1c5]"
                />

                <Field
                    name="description"
                    as="textarea"
                    placeholder="Message"
                    rows="7"
                    className="px-4 py-2 md:py-3 rounded-2xl bg-[#E3E3E3]/40 placeholder-white text-white outline-none
                     focus:ring-2 focus:ring-[#eff1c5]"
                />

                <button
                    type="submit"
                    className="bg-[#EFF1C5] text-black orbitronBold fs-20 py-1 rounded-full hover:scale-105
                     transition-transform mx-auto w-1/2 cursor-pointer">
                    Submit
                </button>
            </Form>
        </Formik>
    );

    const PageTitle = () => (
        <div className="orbitronBold whitespace-pre-line">
            {`LET’S BUILD\nSOMETHING\nBRILLIANT.`}
        </div>
    );


    return (
        <React.Fragment>
            {/* Desktop */}
            <div className="grid grid-cols-2 mx-auto hidden md:grid">
                <div className="mr-5">
                    <div className="orbitronBold fs-64 mb-7">
                        <PageTitle />
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-22 h-22 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#EFF1C5]">
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
                </div>
                <div className="bg-[#ffffff10] backdrop-blur-md p-5 rounded-4xl w-[400px] mx-auto shadow-lg">
                    <FormContent />
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden space-y-4">
                <div className="orbitronBold fs-48 text-center">
                    <PageTitle />
                </div>
                <div className="bg-[#ffffff10] backdrop-blur-md p-3 rounded-4xl w-[300px] mx-auto shadow-lg">
                    <FormContent />
                </div>
               <div className="flex items-center justify-center gap-6">
                        <div className="w-15 h-15 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#EFF1C5]">
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
            </div>
        </React.Fragment>
    );
};

export default Contact;

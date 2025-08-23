import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { FormikHelpers } from 'formik';

interface EmailValues {
    name: string;
    email: string;
    description: string;
}

export const sendEmail = async (values: EmailValues, { resetForm }: FormikHelpers<EmailValues>) => {
    const valuesWithTime = { ...values, time: new Date().toLocaleString() };
    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_GMAIL_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_GMAIL_TEMPLATE_ID!,
            valuesWithTime,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        toast.success('Mail başarıyla gönderildi!');
        resetForm();
    } catch (error) {
        toast.error('Mail gönderilemedi!');
        console.error(error);
    }
};

import { useEffect, useRef } from 'react';
import { useFormikContext } from 'formik';
import { toast } from 'react-toastify';

type FormValues = {
    name: string;
    email: string;
    description: string;
};

export const ToastErrorHandler = () => {
    const { errors, submitCount } = useFormikContext<FormValues>();
    const lastShownSubmitCount = useRef<number>(0);

    useEffect(() => {
        if (submitCount > lastShownSubmitCount.current) {
            lastShownSubmitCount.current = submitCount;

            const errorKeys = Object.keys(errors) as (keyof typeof errors)[];
            for (const key of errorKeys) {
                const errorMessage = errors[key];
                if (errorMessage) {
                    toast.dismiss();
                    toast.error(errorMessage, { toastId: key });
                    break;
                }
            }
        }
    }, [submitCount, errors]);

    return null;
};

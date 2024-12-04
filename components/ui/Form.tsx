import { FormState } from '@/hooks/useForm';
import React, { createContext, HTMLAttributes, ReactNode } from 'react';

export interface FormProps<FormEntity> extends HTMLAttributes<HTMLFormElement> {
    formState: FormState<FormEntity>;
    children: ReactNode;
}

type FormContextType<T> = T | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormContext = createContext<FormContextType<any>>({ formData: {} });

type FormProviderProps<T> = {
    children: React.ReactNode;
    value: {
        formData: T;
    };
};

const FormProvider = <T,>({ children, value }: FormProviderProps<T>) => {
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const Form = <FormEntity,>({ formState, children, ...rest }: FormProps<FormEntity>) => {
    return (
        <form {...rest}>
            <FormProvider<FormEntity>
                value={{
                    formData: formState[0],
                }}
            >
                {children}
            </FormProvider>
        </form>
    );
};

export default Form;

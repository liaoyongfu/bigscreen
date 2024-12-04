import { useMemo, useState } from 'react';

export interface FormApi<FormEntity> {
    getFieldValue: (field: keyof FormEntity) => any;
}

const useForm = <FormEntity>(initFormData: FormEntity = {} as FormEntity): [FormEntity, FormApi<FormEntity>] => {
    const [formData, setFormData] = useState<FormEntity>(initFormData);

    const formApi: FormApi<FormEntity> = useMemo(() => {
        return {
            getFieldValue: (field: keyof FormEntity) => {
                return formData[field];
            },
        };
    }, [formData]);

    return [formData, formApi];
};

export type FormState<FormEntity> = ReturnType<typeof useForm<FormEntity>>;

export default useForm;

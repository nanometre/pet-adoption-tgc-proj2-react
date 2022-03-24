import * as yup from 'yup'

export const addAnimalSchema = yup.object().shape({
    name: yup.string()
        .required(),
    img_url: yup.string()
        .url()
        .required(),
    gender: yup.string()
        .matches(/^(?:Male|Female)$/,
            "gender must be Male or Female")
        .required(),
    date_of_birth: yup.string()
        .matches(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/,
            "date_of_birth is not valid ISO datetime")
        .required("date_of_birth is required"),
    species: yup.object({
        species_name: yup.string()
            .required("species_name is required")
            .typeError("species_name must be a string"),
        breed: yup.string()
            .required("breed is required")
            .typeError("breed must be a string"),
    }),
    description: yup.string()
        .required("description is required")
        .typeError("description must be a string"),
    status_tags: yup.array().of(yup.string().typeError("status_tags must be a string")),
    adopt_foster: yup.array().of(yup.string()
        .required("adopt_foster is required")
        .typeError("adopt_foster must be a string")
    ),
    current_caretaker: yup.object({
        caretaker_name: yup.string()
            .required("caretaker_name is required")
            .typeError("caretaker_name must be a string"),
        email: yup.string()
            .email("current_caretaker email is not valid")
            .required("current_caretaker email is required"),
    })
})
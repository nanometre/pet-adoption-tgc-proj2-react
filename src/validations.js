import * as yup from 'yup'

export const addAnimalSchema = yup.object().shape({
    newName: yup.string()
        .required("Name is required")
        .typeError("Name must be in alphabets"),
    newImgUrl: yup.string()
        .url("Image URL is not a valid URL")
        .required("Image URL of animal is required"),
    newDateOfBirth: yup.string()
        .matches(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/,
            "Date of birth must be in YYYY-MM-DD format")
        .required("Date of birth is required"),
    newBreed: yup.string()
        .required("Breed is required")
        .typeError("Breed must be in alphabets"),
    newDescription: yup.string()
        .required("Description is required")
        .typeError("Description must be in alphabets"),
    newAdoptFoster: yup.array()
        .min(1, "At least one have to be selected")
        .required("At least one have to be selected")
        .typeError("At least one have to be selected"),
    newCaretakerName: yup.string()
        .required("Caretaker name is required")
        .typeError("Caretaker name must be in alphabets"),
    newCaretakerEmail: yup.string()
        .email("Email is not a valid email address")
        .required("Caretaker email is required"),
})

export const manageListingSchema = yup.object().shape({
    userEmail: yup.string()
        .email("Email is not a valid email address")
        .required("Email is required"),
})

export const editListingSchema = yup.object().shape({
    editName: yup.string()
        .required("Name is required")
        .typeError("Name must be in alphabets"),
    editBreed: yup.string()
        .required("Breed is required")
        .typeError("Breed must be in alphabets"),
    editDateOfBirth: yup.string()
        .matches(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/,
            "Date of birth must be in YYYY-MM-DD format")
        .required("Date of birth is required"),
    editAdoptFoster: yup.array()
        .min(1, "At least one have to be selected")
        .required("At least one have to be selected")
        .typeError("At least one have to be selected"),
    editDescription: yup.string()
        .required("Description is required")
        .typeError("Description must be in alphabets"),
    editImgUrl: yup.string()
        .url("Image URL is not a valid URL")
        .required("Image URL of animal is required")
})

export const commentSchema = yup.object().shape({
    commentName: yup.string()
        .required("Name is required")
        .typeError("Name must be in alphabets"),
    commentContent: yup.string()
        .required("Comment is required")
        .typeError("Comment must be in alphabets")
})
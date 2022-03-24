import { toBeRequired } from '@testing-library/jest-dom/dist/matchers'
import * as yup from 'yup'

const addAnimalSchema = yup.object().shape({
    newName: yup.string()
                .required(),
    newImgUrl: yup.string()
                  .url()
                  .required(),
    newGender: yup.string()
                  .matches(/^(?:Male|Female)$/, 
                  "gender must be Male or Female")
                  .required(),
    newDateOfBirth: yup.string()
                       .matches(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/,
                        "date_of_birth is not valid ISO datetime")
                       .required("date_of_birth is required"),
    newSpecies: yup.string()
                   .required("species_name is required")
                   .typeError("species_name must be a string"),
    newBreed: yup.string()
                 .required("breed is required")
                 .typeError("breed must be a string"),
    newDescription: "",
    newStatusTags: [],
    newAdoptFoster: [],
    newCaretakerName: "",
    newCaretakerEmail: "",
})
import { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";
import Profile from "../types/Profile";
import { createDemoProfile, getAllDemoProfile } from "../api/DemoProfileReq";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is a required!"),
    about: yup.string()
    // .test('fileType', 'Only text files are allowed', function (value) {
    //   console.log("about: ", value);
    //   return typeof value === 'string' && value.length > 0;
    // })
    .required("About is a required!")
    .min(10, "Minimum 3 character enter!")
    .max(1000, "Maximum 10 character enter!"),
    image: yup
    .mixed()
    .test('fileType', 'Only image files are allowed', (value) => {
      const file = (value as FileList)?.[0];
      // console.log(value);
      return file && ['image/jpeg', 'image/png', 'image/gif'].includes(file.type);
    })
    .required('Image is required'),
  coverImage: yup
  .mixed()
  .test('fileType', 'Only image files are allowed', (value) => {
    const file = (value as FileList)?.[0];
    // console.log(value);
    return file && ['image/jpeg', 'image/png', 'image/gif'].includes(file.type);
  })
  .required('Image is required'),
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  email: yup.string().required("email is a required field"),
  country: yup.string().required("Country is a required field"),
  street: yup.string().required("Street is a required field"),
  city: yup.string().required("City is a required field"),
  state: yup.string().required("State is a required field"),
  postalCode: yup
    .string()
    .required("Zipcode is a required field")
    .matches(/^\d{5}(?:[-\s]\d{4})?$/, "Invalid zipcode format"),
  notifications: yup
  .array()
  .of(yup.string().required('Notification must not be empty'))
  .required('Notifications array is required'),
  pushNotifications: yup.string().required("Push Notifications is a required field"),
});

export default function Registration() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Profile>({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    
    new Promise(() => {
      getAllDemoProfile()
        .then((response) => {
          if (response) {
            const profiles: Profile[] = response?.data?.data;
            console.log("all: ",profiles);
          }
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    });

    new Promise(() => {
      createDemoProfile(data)
        .then((response) => {
          if (response)
          {
            const profiles: Profile = response?.data?.data;
            console.log("create: ", profiles);
          } 
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    });
  } 
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      setValue('coverImage', file);
      setSelectedFile(file);
      // document.querySelector('[name="coverImage"]').set;

    }
  };

  const optionsMap = new Map<string, string>();
  optionsMap.set("", "Select your country");
  optionsMap.set("Bangladesh", "Bangladesh");
  optionsMap.set("United States", "United States");
  optionsMap.set("Canada", "Canada");
  optionsMap.set("Mexico", "Mexico");

  const radioMap = new Map<string, string>();
  optionsMap.set("", "Select your country");
  radioMap.set("Everything", "Everything");
  radioMap.set("Same as email", "Same as email");
  radioMap.set("No push notifications", "No push notifications");

  const checkboxMap = new Map<string, string>();
  checkboxMap.set("Comments", "Comments");
  checkboxMap.set("Candidates", "Candidates");
  checkboxMap.set("Offers", "Offers");

  return (
    <div className="grid items-center justify-center w-full">
      <form onSubmit={onSubmit} >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <Input
                  label="Username: "
                  placeholder="Enter your username"
                  type="text"
                  required={true}
                  error={errors?.username?.message}
                  {...register("username")}
                />
              </div>

              <div className="col-span-full">
                {/* <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div> */}
                <Textarea
                  label="About: "
                  placeholder="Write here..."
                  required={true}
                  error={errors?.about?.message}
                  {...register("about")}
                />
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  {/* <UserCircleIcon
                    className="h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  /> */}
                  {
                      !selectedImage ?
                      <UserCircleIcon
                      className="h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    :
                    <div
                      className="h-12 w-12 text-gray-300"
                      style={{
                        backgroundImage: selectedImage? `url(${URL.createObjectURL(selectedImage)})`: '',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      aria-hidden="true"
                    />
                    }
                  <label
                    htmlFor="image-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Change
                    </span>
                    <input
                      id="image-upload"
                      type="file"
                      className="sr-only"
                      {...register("image")}
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                  {errors?.image && (<span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" >
                    {errors?.image?.message as React.ReactNode}
                  </span>) }
              </div>

              <div className="col-span-full"
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
              >
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cover photo
                </label>
                <div
                  className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                  style={{
                    backgroundImage: selectedFile
                      ? `url(${URL.createObjectURL(selectedFile)})`
                      : "",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div className="text-center">
                    {
                      !selectedImage ?
                      <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    :
                    <div
                      className="mx-auto h-12 w-12 text-gray-300"
                      style={{
                        backgroundImage: selectedImage? `url(${URL.createObjectURL(selectedImage)})`: '',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      aria-hidden="true"
                    />
                    }
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          type="file"
                          className="sr-only"
                          {...register("coverImage")}
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
                  {errors?.coverImage && (<span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {errors?.coverImage?.message as React.ReactNode}
                  </span>) }
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Input
                  label="First Name: "
                  placeholder="Enter your first name"
                  type="text"
                  required={true}
                  error={errors?.firstName?.message}
                  {...register("firstName")}
                />
              </div>

              <div className="sm:col-span-3">
                <Input
                  label="Last Name: "
                  placeholder="Enter your last name"
                  type="text"
                  required={true}
                  error={errors?.lastName?.message}
                  {...register("lastName")}
                />
              </div>

              <div className="sm:col-span-4">
                <Input
                  label="Email address: "
                  placeholder="Enter your email address"
                  type="text"
                  required={true}
                  error={errors?.email?.message}
                  {...register("email")}
                />
              </div>

              <div className="sm:col-span-3">
                <Select
                  options={optionsMap}
                  label="Country: "
                  placeholder="Enter your email address"
                  error={errors?.country?.message}
                  required={true}
                  {...register("country")}
                />
              </div>

              <div className="col-span-full">
                <Input
                  label="Street address: "
                  placeholder="Enter your street address"
                  type="text"
                  required={true}
                  error={errors?.street?.message}
                  {...register("street")}
                />
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <Input
                  label="City: "
                  placeholder="Enter your city"
                  type="text"
                  required={true}
                  error={errors?.city?.message}
                  {...register("city")}
                />
              </div>

              <div className="sm:col-span-2">
                <Input
                  label="State / Province: "
                  placeholder="Enter your State / Province"
                  type="text"
                  required={true}
                  error={errors?.state?.message}
                  {...register("state")}
                />
              </div>

              <div className="sm:col-span-2">
                <Input
                  label="ZIP / Postal code: "
                  placeholder="Enter your ZIP / Postal code"
                  type="text"
                  required={true}
                  error={errors?.postalCode?.message}
                  {...register("postalCode")}
                />
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Notifications
            </h2>
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  By Email
                </legend>
                <div className="mt-6 space-y-6">
                  <CheckboxGroup
                    options={checkboxMap}
                    label="Notifications"
                    // paragraph="We'll always let you know about important changes, but you pick what else you want to hear about."
                    required={true}
                    error={errors?.notifications?.message}
                    {...register("notifications")}
                  />
                </div>
              </fieldset>
              <fieldset>
                <div className="mt-6 space-y-6">
                  <RadioGroup
                    options={radioMap}
                    label="Push Notifications"
                    paragraph="These are delivered via SMS to your mobile phone."
                    required={true}
                    error={errors?.pushNotifications?.message}
                    {...register("pushNotifications")}
                  />
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

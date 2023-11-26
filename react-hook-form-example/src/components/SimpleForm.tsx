import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName && values.lastName ? values : {},
    errors: {
      ...(values.firstName ? {} : { firstName: { required: true, message: 'First name is required.' } }),
      ...(values.lastName ? {} : { lastName: { required: true, message: 'Last name is required.' } }),
    },
  };
};

function SimpleForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register("firstName")} placeholder="Bill" />
      {errors?.firstName && <p>{errors.firstName.message}</p>}
      
      <input {...register("lastName")} placeholder="Luo" />
      {errors?.lastName && <p>{errors.lastName.message}</p>}

      <input type="submit" />
    </form>
  );
}


export default SimpleForm
import Button from "./Button";
import Input from "./Input";

import { useForm } from "react-hook-form";
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseName, choosePhone, chooseEmail, chooseAddress, chooseDescription } from "../redux/slices/RootSlice";

interface ContactFormProps {
  id: string[];
  onClose: () => void;
}

const ContactForm = (props: ContactFormProps) => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(`ID: ${props.id}`);
    console.log(data);
    if(props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000)
      event.target.reset()
    } else {
      dispatch(chooseName(data.name));
      dispatch(choosePhone(data.phone_number));
      dispatch(chooseEmail(data.email));
      dispatch(chooseAddress(data.address));
      dispatch(chooseDescription(data.description));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Full Name</label>
          <Input {...register('name')} name="name" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Input {...register('phone_number')}  name="phone_number" placeholder="Phone Number" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input {...register('email')} name="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Input {...register('address')} name="address" placeholder="Address" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Input {...register('description')} name="description" placeholder="Description" />
        </div>
        <div>
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

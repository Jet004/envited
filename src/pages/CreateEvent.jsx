import React from 'react';
import { useForm } from 'react-hook-form' ;
import { useOutletContext, useNavigate } from 'react-router';

const CreateEvent = () => {

    const { setEvent } = useOutletContext();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const onSubmit = (data) => {
        setEvent(data);
        navigate("/event")
    };

  return (
    <div className={ styles.page }>
        <div className={ styles.container }>
            <div className={ styles.heading }>
                Create an event!
            </div>
            <form className={ styles.form } onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="event" 
                    className={ styles.input } 
                    type="text" 
                    placeholder="Event Name"
                    {...register("event")}
                />
                {errors.event && (errors.event.message)}
                <input 
                    name="host" 
                    className={ styles.input } 
                    type="text" 
                    placeholder="Host Name"
                    {...register("host")}
                />
                {errors.host && (errors.host.message)}
                <input 
                    name="start" 
                    className={ styles.input } 
                    type="datetime-local" 
                    placeholder="Start"
                    {...register("start")}
                />
                {errors.start && (errors.start.message)}
                <input 
                    name="end" 
                    className={ styles.input } 
                    type="datetime-local" 
                    placeholder="End"
                    {...register("end")}
                />
                {errors.start && (errors.start.message)}
                <input 
                    name="location" 
                    className={ styles.input } 
                    type="text" 
                    placeholder="Location"
                    {...register("location")} 
                />
                {errors.end && (errors.end.message)}
                <input 
                    name="image" 
                    className={ styles.input } 
                    type="file" 
                    accept="image/png, image/jpg, image/jpeg" 
                    placeholder="Image"
                    {...register("image")}
                />
                {errors.image && (errors.image.message)}
                <input 
                    className={ styles.submit } 
                    type="submit" 
                    value="Next!" 
                />
            </form>
        </div>
    </div>
  );
}

export default CreateEvent

const styles = {
    page: "flex justify-center w-full pt-20",
    container: "flex flex-col items-center w-[90%] md:w-[60%] lg:w-[600px]",
    heading: "w-200px heading-text",
    form: "min-w-[360px] w-full mt-[48px]",
    input: "w-full py-1 px-3 mb-4",
    submit: "mt-[36] rounded-[10px] highlight px-[21] sm:px-[70] py-[16] text-white font-bold hover:drop-shadow-lg"
};
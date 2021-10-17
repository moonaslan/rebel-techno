import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import ProfileImg from './ProfileImg';

export default function Register_form() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
    });
    // console.log(errors)
    const onSubmit = data => {
        console.log(data);
    }
    
    const[show,setShow]= useState(false);

    return (
        <>
            <div className="main-section">
                <div className="container">
                    <div className="register-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <ul>
                                <li className="full center">
                                    <ProfileImg/>
                                </li>
                                <li>
                                    <label>Email</label>
                                    <input type="email" {...register("email", { required: "This field is required", })} placeholder="info@polinate.com" />
                                    {errors.email && <p className="error">{errors.email.message}</p>}
                                </li>
                                <li>
                                    <label>Phone <span>(Optional)</span></label>
                                    <input type="text" {...register("phone", { required: false, })} placeholder="Your Phone" />
                                </li>
                                <li>
                                    <label>First Name <small>*</small></label>
                                    <input type="text" {...register("fname", { required: "Please enter first name", })} placeholder="Your First Name" />
                                    {errors.fname && <p className="error">{errors.fname.message}</p>}
                                </li>
                                <li>
                                    <label>Last Name <small>*</small></label>
                                    <input type="text" {...register("lname", { required: "Please enter first name", })} placeholder="Your Last Name" />
                                    {errors.lname && <p className="error">{errors.lname.message}</p>}
                                </li>
                                <li className="full">
                                    <label className="company_select" htmlFor="company"><input onClick={()=>setShow(!show)} type="checkbox" {...register("company", { required: false, })} id="company"/> I have a Company or Represent a Company</label>
                                </li>
                                {
                                    show?<li>
                                    <label>Company Name <small>*</small></label>
                                    <input type="text" {...register("cname", { required: "Please enter company name", })} placeholder="Enter Company Name" />
                                    {errors.cname && <p className="error">{errors.cname.message}</p>}
                                </li>:null
                                }
                                {
                                    show?<li>
                                        <label>Comapny Website <span>(Optional)</span></label>
                                        <input type="text" {...register("cweb", { required: false, })} placeholder="Enter Company Website" />
                                    </li>:null
                                }
                                <li className="full">
                                    <label>I am a <small>*</small></label>
                                    <div className="yourself">
                                        <span><label className="company_select" htmlFor="fan"><input type="checkbox"{...register("self", { required: "Please select this field", })} id="fan" /> Fan</label></span>
                                        <span><label className="company_select" htmlFor="seeder"><input type="checkbox"{...register("self", { required: "Please select this field", })} id="seeder" /> Seeder</label></span>
                                        <span><label className="company_select" htmlFor="investor"><input type="checkbox"{...register("self", { required: "Please select this field", })} id="investor" /> Investor</label></span>
                                        <span><label className="company_select" htmlFor="patron"><input type="checkbox"{...register("self", { required: "Please select this field", })} id="patron" /> Patron</label></span>
                                        <span><label className="company_select" htmlFor="creator"><input type="checkbox"{...register("self", { required: "Please select this field", })} id="creator" /> Creator</label></span>
                                    </div>
                                    {errors.self && <p className="error">{errors.self.message}</p>}
                                </li>
                                <li className="full">
                                    <label>Tell us more about yourself <span>(Optional)</span></label>
                                    <textarea {...register("about", { required: false, })} id="about" cols="30" rows="10" placeholder="Describe something about you"></textarea>
                                </li>
                                <li className="full center"><input className="submit-btn" type="submit" value="Accept & Signup" /></li>
                            </ul>
                        </form>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

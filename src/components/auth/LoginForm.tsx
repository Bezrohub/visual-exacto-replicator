
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      onSubmit?.(data);
      // In a real application, you would handle authentication here
      console.log("Form submitted:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(submitHandler)}
      className="w-full max-w-[358px] flex flex-col gap-[25px] mt-[45px] max-md:max-w-xs max-sm:max-w-[280px]"
    >
      <input
        type="email"
        placeholder="Endereço de e-mail"
        className="w-full h-[65px] text-xl text-[rgba(0,0,0,0.54)] bg-white px-5 py-0 rounded-[20px_0] border-[none] max-sm:h-[55px] max-sm:text-lg"
        {...register("email", { 
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      
      <input
        type="password"
        placeholder="Senha"
        className="w-full h-[65px] text-xl text-[rgba(0,0,0,0.54)] bg-white px-5 py-0 rounded-[20px_0] border-[none] max-sm:h-[55px] max-sm:text-lg"
        {...register("password", { 
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters"
          }
        })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      
      <div className="flex flex-col items-center gap-[5px] mt-2">
        <a href="#" className="text-white text-base underline">
          Esqueceu a senha?
        </a>
        <a href="#" className="text-white text-base underline">
          Termos de serviço
        </a>
      </div>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="animate-button w-[226px] h-[87px] text-white text-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] cursor-pointer mx-auto my-5 rounded-[27px] border-[none] bg-gradient-to-b from-[#040479] to-[#8484F0] hover:opacity-90 transition-all relative overflow-hidden max-sm:w-[200px] max-sm:h-[70px] max-sm:text-xl"
      >
        <span className="relative z-10">CADASTRAR</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#8484F0] to-[#040479] opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
      </button>
    </form>
  );
};


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
      className="w-full max-w-[358px] flex flex-col gap-[20px] mt-[30px] md:mt-[45px] px-4 md:px-0 max-w-[90%] md:max-w-[358px]"
    >
      <input
        type="email"
        placeholder="Endereço de e-mail"
        className="w-full h-[55px] md:h-[65px] text-lg md:text-xl text-[rgba(0,0,0,0.54)] bg-white px-5 py-0 rounded-[20px_0] border-[none]"
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
        className="w-full h-[55px] md:h-[65px] text-lg md:text-xl text-[rgba(0,0,0,0.54)] bg-white px-5 py-0 rounded-[20px_0] border-[none]"
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
        <a href="#" className="text-[#000077] font-medium text-base underline">
          Esqueceu a senha?
        </a>
        <a href="#" className="text-[#000077] font-medium text-base underline">
          Termos de serviço
        </a>
      </div>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-[200px] h-[70px] md:w-[226px] md:h-[87px] text-white text-xl md:text-2xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] cursor-pointer mx-auto my-5 rounded-[27px] border-[none] bg-[#4a4a4a] hover:bg-[#3a3a3a] transition-colors"
      >
        CADASTRAR
      </button>
    </form>
  );
};

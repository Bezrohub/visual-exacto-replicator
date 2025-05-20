import React from "react";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

const Index: React.FC = () => {
  const handleLoginSubmit = (data: { email: string; password: string }) => {
    // In a real application, you would handle authentication here
    console.log("Login submitted:", data);
  };

  return (
    <AuthLayout>
      <LoginForm onSubmit={handleLoginSubmit} />
    </AuthLayout>
  );
};

export default Index;

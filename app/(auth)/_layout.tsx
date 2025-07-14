import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import GuestOnly from "../../components/auth/GuestOnly";
import { useUser } from "../../hooks/useUser";

const AuthLayout = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <GuestOnly>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </GuestOnly>
  );
};

export default AuthLayout;

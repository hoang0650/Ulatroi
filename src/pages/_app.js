import "../styles/globals.css";
import "../../firebaseConfig";
import { AuthProvider } from "../auth/auth";
import AuthStateChanged from "../auth/AuthStateChanged";
import AppLayout from "../layouts/app-layout";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthStateChanged>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AuthStateChanged>
    </AuthProvider>
  );
}

export default MyApp;

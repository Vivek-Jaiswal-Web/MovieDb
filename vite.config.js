import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["md33ng-5173.csb.app"], // Allow the host
    host: "0.0.0.0", // Allow external access
    port: 5173, // Set the port
  },
});

import { toastr } from "react-redux-toastr";

export const flashError = (message: string) => toastr.error("Error", message);

export const flashSuccess = (message: string, options?: any) =>
  toastr.success("Success", message, { ...options });

export const flashWarning = (message: string) =>
  toastr.warning("Warning", message);

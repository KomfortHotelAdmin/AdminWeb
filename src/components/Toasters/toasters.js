import toast from "react-hot-toast";

// AUTH TOASTERS
export const notifyErrorLogin = () =>
  toast.error(
    "Something went wrong, please check your email and password are entered correctly"
  );
export const notifyFulfilledLogin = () => toast.success("Welcome");

// FOR WORK WITH CONTACT TOASTERS
export const notifyCreacteNewEvent = () =>
  toast.success("Successfully created!");

export const notifyDeleteEvent = () => toast.success("Successfully deleted!");

export const notifyUpdateEvent = () => toast.success("Successfully update!");

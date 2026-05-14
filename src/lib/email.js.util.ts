import { CONFIG } from "@/data/data";
import emailjs from "@emailjs/browser";
import { ContactFormData } from "./../types/hero.types";

emailjs.init(CONFIG.EMAIL_JS.PUBLIC_KEY);

export const sendQuoteEmail = async (formData: ContactFormData) => {
  const templateParams = {
    to_name: "Recipient Name",
    from_name: formData.name.trim(),
    from_email: formData.email.trim(),
    phone: formData.phone.trim(),
    shipping_mode: formData.shippingMode,
    weight: formData.weight,
    volumetric_weight: formData.volumetricWeight,
    cbm: formData.cbm,
    message: formData.message.trim(),
  };

  return await emailjs.send(
    CONFIG.EMAIL_JS.SERVICE_ID,
    CONFIG.EMAIL_JS.TEMPLATE_ID,
    templateParams,
    CONFIG.EMAIL_JS.PUBLIC_KEY
  );
};

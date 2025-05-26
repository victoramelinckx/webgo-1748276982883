"use client";

import { Element } from "react-scroll";
import { Boton } from "./boton";
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

// Notificaciones en español
const notifySuccess = () =>
  toast.success(
    "¡Sus datos han sido enviados exitosamente!\nNos pondremos en contacto pronto.😁"
  );
const notifyError = () =>
  toast.error(
    "Lo sentimos 😕, hubo un error al enviar sus datos. Por favor, intente más tarde."
  );

// Interfaz para los props del componente
interface BookAppointmentProps {
  heading?: string;
  description?: string;
}

export const BookAppointment: React.FC<BookAppointmentProps> = ({
  heading = "Contáctenos",
  description = "Estamos aquí para ayudarle con sus necesidades.",
}) => {
  const [enviando, setEnviando] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const mensajeRef = useRef<HTMLTextAreaElement>(null);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      mensaje: mensajeRef.current?.value,
    };

    try {
      const res = await fetch("/api/sendForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.error) {
        notifyError();
      } else {
        formRef.current?.reset();
        notifySuccess();
      }
    } catch (error) {
      notifyError();
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Element name="contacto" className="w-full">
      <section className="bg-primary-500 w-full flex flex-col justify-center items-center z-20 h-full py-10">
        <div className="flex gap-6 px-8 rounded-lg w-full max-w-6xl text-white h-full">
          <div className="flex flex-col justify-center lg:max-xl:w-7/12 gap-4 max-sm:py-10 lg:w-1/2">
            <h2>{heading}</h2>
            <p>{description}</p>
            <form
              ref={formRef}
              onSubmit={handleForm}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  ref={nameRef}
                  placeholder="Nombre y apellido"
                  className="py-2 sm:py-3 rounded-lg max-w-96 text-black"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone">Número de teléfono</label>
                <input
                  id="phone"
                  ref={phoneRef}
                  placeholder="+7868901911"
                  className="py-2 sm:py-3 rounded-lg max-w-96 text-black"
                  type="tel"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  ref={emailRef}
                  placeholder="contacto@example.com"
                  className="py-2 sm:py-3 rounded-lg max-w-96 text-black"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  ref={mensajeRef}
                  placeholder="Cuéntenos sobre su consulta"
                  className="py-2 sm:py-3 rounded-lg w-full text-black"
                  rows={2}
                />
              </div>
              <Boton
                variant="normal"
                className="sm:col-span-2 xs:max-w-56 mt-4 text-base"
                type="submit"
                disabled={enviando}
              >
                {enviando ? "Enviando..." : "Enviar mensaje"}
              </Boton>
            </form>
          </div>
          <div className="flex grow justify-end items-end h-[37rem] max-lg:hidden lg:w-1/2">
            <img
              src="vacio.jpg"
              alt="Mapa de ubicación"
              className="h-[95%] w-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

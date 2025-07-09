"use client";
import React, { useRef, useEffect } from "react";
import styles from "./form-contact.module.scss";
import { Box } from "../BoxProject/Box";
import { Button } from "@/components/forms/button";
import { useFormStatus, useFormState } from "react-dom";
import postSendEmail from "@/actions/send-email";
import ErrorMessage from "../helper/error-message";
import clsx from "clsx";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} color="#E13A4B">
      {pending ? "...Enviando" : "Enviar"}
    </Button>
  );
}

export const Contact = () => {
  const [state, action] = useFormState(postSendEmail, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <section className={styles.contact} id="contact">
      <h3>Contatos</h3>
      <div className={styles.wrapper}>
        <Box>
          <form action={action}>
            <label htmlFor="name">
              Nome:{" "}
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isPending}
              />
            </label>

            <label htmlFor="email">
              Email:{" "}
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isPending}
              />
            </label>

            <label htmlFor="subject">
              Assunto:{" "}
              <input
                type="text"
                id="subject"
                name="subject"
                required
                disabled={isPending}
              />
            </label>

            <label htmlFor="message">
              Mensagem:{" "}
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                disabled={isPending}
                style={{ resize: "none" }}
              ></textarea>
            </label>

            <ErrorMessage error={state.error} />

            {state.ok && (
              <p className={clsx(styles.success, "fade-in")}>
                ✅ Mensagem enviada com sucesso!
              </p>
            )}

            <FormButton />
          </form>
        </Box>
      </div>
    </section>
  );
};

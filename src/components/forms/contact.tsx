"use client";
import React from "react";
import styles from "./form-contact.module.scss";
import { Box } from "../BoxProject/Box";
import { Button } from "@/components/forms/button";
import { useFormStatus, useFormState } from "react-dom";
import postSendEmail from "@/actions/send-email";
import ErrorMessage from "../helper/error-message";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending} color="#E13A4B">
          ...Enviando
        </Button>
      ) : (
        <Button color="#E13A4B">Enviar</Button>
      )}
    </>
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
              Nome: <input type="text" id="name" name="name" required />
            </label>

            <label htmlFor="email">
              Email: <input type="email" id="email" name="email" required />
            </label>

            <label htmlFor="subject">
              Assunto:{" "}
              <input type="text" id="subject" name="subject" required />
            </label>

            <label htmlFor="message">
              Mensagem:{" "}
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                style={{ resize: "none" }}
              ></textarea>
            </label>
            <ErrorMessage error={state.error} />
            <FormButton />
          </form>
        </Box>
      </div>
    </section>
  );
};

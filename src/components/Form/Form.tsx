import styles from "./Form.module.css";
import { IForm } from "./Form.interface";
import { FC, useState } from "react";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ErrorText } from "./ErrorText/ErrorText";
import { useNavigate } from "react-router-dom";

const myPromise = (data: FieldValues): FieldValues => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const Form: FC<IForm> = ({ AuthArray }) => {
  const [loadAuth, setLoadAuth] = useState(false);
  const [errorAuth, setErrorAuth] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const AuthSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoadAuth(true);
    myPromise(data).then((data: FieldValues) => {
      const okkey = AuthArray?.find(
        (obj) => obj.mail === data.mail && obj.password === data.password
      );
      if (okkey) {
        navigate(`/client/${okkey.id}`)
      } else {
        setErrorAuth(true);
        setTimeout(() => setErrorAuth(false), 2500);
      }
      setLoadAuth(false);
    });

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(AuthSubmit)}>
      <Input
        error={errors.mail?.message as string | undefined}
        register={{
          ...register("mail", {
            required: "Заполните поле",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Поле заполнено не корректно",
            },
          }),
        }}
        label="Введите почту:"
        type="text"
        placeholder="mailName@yandex.ru"
      />
      {errors.mail && <ErrorText>{errors.mail.message as string}</ErrorText>}
      <Input
        error={errors.password?.message as string | undefined}
        register={{
          ...register("password", {
            required: "Заполните поле",
            minLength: {
              value: 5,
              message: "Минимальное количество символов: 5",
            },
          }),
        }}
        label="Введите пароль:"
        type="password"
        placeholder="...."
      />
      {errors.password && (
        <ErrorText>{errors.password.message as string}</ErrorText>
      )}
      <Button loading={loadAuth}>Войти</Button>
      {errorAuth && (
        <ErrorText>Такого пользователя нету, введи правильно данные</ErrorText>
      )}
    </form>
  );
};

import { FC, useEffect } from "react";
import { Popup } from "../../components/PopupWindow/Popup";
import { useParams } from "react-router-dom";
import { useGetOneAuthQuery } from "../../services/auth";
import { ErrorText } from "../../components/Form/ErrorText/ErrorText";
import { BeatLoader } from "react-spinners";

export const ClientPage: FC = () => {
    const params = useParams();
    const {data, isError, isLoading, error} = useGetOneAuthQuery(parseInt(params.id as string));

    useEffect(() => {
        console.log(data)
    }, [])

    return (
        <Popup>
            {data && <p>Спасибо за регистрацию, добро пожаловать {data.surname} {data.name} {data.lastname} </p>}
            {isLoading && <BeatLoader />}
            {isError && <ErrorText>Ошибка сервера {error.message}</ErrorText>}
        </Popup>
    )
}
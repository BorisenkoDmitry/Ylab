import { Form } from "../../components/Form/Form";
import { Popup } from "../../components/PopupWindow/Popup";
import { useGetAuthQuery } from "../../services/auth";
import { BeatLoader } from 'react-spinners';

export const AuthPage = () => {
    const { data, isLoading, isError, error } = useGetAuthQuery();
  
    return (
      <>
        <div>
          <Popup>
            {isLoading && <BeatLoader />}
            {data && <Form AuthArray={data} />}
            {isError && <p style={{textAlign: "center"}}>Ошибка сервера, статус: {error.status}.<br /> Скоро всё поправим</p>}
          </Popup>
        </div>
      </>
    );
}
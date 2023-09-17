import { useEffect, useState } from "react";
import { deleteEvents, getEvents, updateEvents } from "../../services/event";
import { EventCard } from "../../components/EventCard";
import { CardListWrap, EventWrap } from "./MainPage.styled";
import CreateEventForm from "../../components/CreateEvents/CreateEvent";
import UpdateEventForm from "../../components/UpdateEvent/UpdateEvent";
import { logOut } from "../../services/auth";
import { useUser } from "../../context/auth/context";
import { Toaster } from "react-hot-toast";
import {
  notifyDeleteEvent,
  notifyFulfilledLogin,
} from "../../components/Toasters/toasters";

const initialStateCard = {
  id: "",
  img: "",
  text: "",
};

const MainPage = () => {
  const [data, setData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [updatedCardData, setUpdatedCardData] = useState(initialStateCard);
  const [isUpdateModal, setIsUpdateModal] = useState(false);

  const context = useUser();

  const getData = async () => {
    const data = await getEvents();
    setData(data);
    return data;
  };

  useEffect(() => {
    getData();
    notifyFulfilledLogin();
  }, []);

  const deleteCard = async (id) => {
    const isDelete = await deleteEvents(id);

    if (isDelete.status === 200) {
      setData((prevState) => prevState.filter((item) => item.id !== id));
      notifyDeleteEvent();
    }
  };

  const updateCard = async (id, formData) => {
    const data = await updateEvents(id, formData);
    data.status === 200 && getData();
    return data;
  };

  const toggleModal = () => {
    setIsModal((prev) => !prev);
    setIsUpdateModal(false);
  };

  const toggleUpdateModal = () => {
    setIsUpdateModal((prev) => !prev);
    setIsModal(false);
  };

  const onLogout = async () => {
    try {
      await logOut();
      context.logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster />
      <button type="button" onClick={onLogout}>
        LogOut
      </button>
      {isModal && (
        <CreateEventForm getData={getData} toggleModal={toggleModal} />
      )}
      {isUpdateModal && (
        <UpdateEventForm
          updatedCardData={updatedCardData}
          toggleUpdateModal={toggleUpdateModal}
          updateCard={updateCard}
        />
      )}

      {!isUpdateModal && !isModal && (
        <button type="button" onClick={toggleModal}>
          Add New Event
        </button>
      )}

      {data.length > 0 ? (
        <EventWrap>
          <h1>My Events</h1>
          <CardListWrap>
            {data.map((item) => (
              <EventCard
                item={item}
                key={item.id}
                deleteCard={deleteCard}
                updateCard={setUpdatedCardData}
                toggleUpdateModal={toggleUpdateModal}
              />
            ))}
          </CardListWrap>
        </EventWrap>
      ) : (
        <div>
          <h1>No Events Now</h1>
        </div>
      )}
    </>
  );
};

export default MainPage;

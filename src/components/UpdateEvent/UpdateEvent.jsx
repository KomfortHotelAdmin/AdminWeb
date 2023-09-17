/* eslint-disable react/prop-types */
import { Field, Formik } from "formik";
import {
  EventFormBody,
  EventFormItem,
  EventFormList,
  EventFormInfo,
  EventFormBtnWrap,
  CloseBtn,
} from "./UpdateEvent.styled";

import { useEffect, useState } from "react";
import { getEventsById } from "../../services/event";
import AddPhoto from "../addPhoto/AddPhoto";
import { notifyUpdateEvent } from "../Toasters/toasters";

const UpdateEventForm = ({
  updateCard,
  toggleUpdateModal,
  updatedCardData,
}) => {
  const [eventPhoto, setEventPhoto] = useState(null);
  const [initialText, setInitialText] = useState("");

  const getElement = async (id) => {
    const data = await getEventsById(id);
    setEventPhoto(data.img);
    setInitialText(data.text);
  };

  useEffect(() => {
    getElement(updatedCardData.id);
  }, [updatedCardData]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();

      if (eventPhoto !== updatedCardData.img) {
        formData.append("img", eventPhoto || "");
      }

      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const data = await updateCard(updatedCardData.id, formData);
      if (data?.status === 200) {
        resetForm();
        setEventPhoto(null);
        toggleUpdateModal();
        notifyUpdateEvent();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ text: initialText }}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <EventFormBody>
          <AddPhoto setEventPhoto={setEventPhoto} eventPhoto={eventPhoto} />
          <EventFormInfo>
            <EventFormList>
              <EventFormItem>
                <Field
                  as="textarea"
                  type="text"
                  name="text"
                  id="text"
                  autoComplete="off"
                  placeholder={"event text"}
                />
              </EventFormItem>
            </EventFormList>
            <EventFormBtnWrap>
              <button type="submit">Update</button>
            </EventFormBtnWrap>
          </EventFormInfo>
          <CloseBtn type="button" onClick={toggleUpdateModal}>
            Close
          </CloseBtn>
        </EventFormBody>
      </Formik>
    </>
  );
};

export default UpdateEventForm;

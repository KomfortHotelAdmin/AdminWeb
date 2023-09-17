/* eslint-disable react/prop-types */
import { Field, Formik } from "formik";
import {
  EventFormBody,
  EventFormItem,
  EventFormList,
  EventFormInfo,
  EventFormBtnWrap,
  CloseBtn,
} from "./CreateEvent.styled";

import { useState } from "react";
import { addEvents } from "../../services/event";
import AddPhoto from "../addPhoto/AddPhoto";
import { notifyCreacteNewEvent } from "../Toasters/toasters";

const initialValues = {
  text: "",
};

const CreateEventForm = ({ getData, toggleModal }) => {
  const [eventPhoto, setEventPhoto] = useState(null);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();

      formData.append("img", eventPhoto || "");

      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const data = await addEvents(formData);
      data.status === 201 && getData();
      resetForm();
      setEventPhoto(null);
      toggleModal();
      notifyCreacteNewEvent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
              <button type="submit">Create</button>
            </EventFormBtnWrap>
          </EventFormInfo>
          <CloseBtn type="button" onClick={toggleModal}>
            Close
          </CloseBtn>
        </EventFormBody>
      </Formik>
    </>
  );
};

export default CreateEventForm;

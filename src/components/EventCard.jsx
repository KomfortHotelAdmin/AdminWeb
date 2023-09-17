/* eslint-disable react/prop-types */

import { BtnDelete, BtnUpdate, CardWrap } from "./EventCard.styled";

const base_url = "https://komfort-hotel-admin-backend.onrender.com/";

export const EventCard = ({
  item,
  deleteCard,
  updateCard,
  toggleUpdateModal,
}) => {
  return (
    <CardWrap>
      <img src={`${base_url}${item.img}`} />
      <p>{item.text}</p>
      <BtnDelete type="button" onClick={() => deleteCard(item.id)}>
        delete
      </BtnDelete>
      <BtnUpdate
        type="button"
        onClick={() => {
          updateCard(item);
          toggleUpdateModal();
        }}
      >
        update
      </BtnUpdate>
    </CardWrap>
  );
};

import axios from "axios";

export const getEvents = async () => {
  try {
    const { data } = await axios("/events");
    return data;
  } catch (error) {
    return;
  }
};

export const getEventsById = async (id) => {
  try {
    const { data } = await axios(`/events/${id}`);
    return data;
  } catch (error) {
    return;
  }
};

export const addEvents = async (formData) => {
  try {
    const data = await axios.post(`/events`, formData);
    return data;
  } catch (error) {
    return;
  }
};

export const deleteEvents = async (id) => {
  try {
    const data = await axios.delete(`/events/${id}`);
    return data;
  } catch (error) {
    return;
  }
};

export const updateEvents = async (id, formData) => {
  try {
    const data = await axios.patch(`/events/${id}`, formData);

    return data;
  } catch (error) {
    return;
  }
};

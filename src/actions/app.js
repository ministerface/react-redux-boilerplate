import { CLOSE_MODAL, OPEN_MODAL } from '../constants/app';

export const openModal = (modal) => ({
    type: OPEN_MODAL,
    modal
});

export const closeModal = (modal) => ({
  type: CLOSE_MODAL,
  modal
});

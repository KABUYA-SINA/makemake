import http from '../axios/axios';

export const getRealisationImages = () => http.get(process.env.REACT_APP_API_REALISATION_ONE);
export const getOnerealisationImage = (id) => http.get(`${process.env.REACT_APP_API_REALISATION_TWO}${id}`)
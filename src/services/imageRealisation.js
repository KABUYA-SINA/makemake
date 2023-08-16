import http from '../axios/axios';

export const getDragAndDrop = () => http.get(process.env.REACT_APP_API_BOUTIQUE)
export const getHomeImages = () => http.get(process.env.REACT_APP_API_MAGASIN);
export const getRealisationImages = () => http.get(process.env.REACT_APP_API_REALISATION_BRIDGE);
export const getOnerealisationImage = (id) => http.get(`${process.env.REACT_APP_API_REALISATION_ROAD}${id}`)
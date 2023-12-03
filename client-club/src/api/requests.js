import axios from "axios";

const create = import.meta.env.VITE_FETCH_RESERVATION
const comment = import.meta.env.VITE_FETCH_COMMENTS
const currentClima = import.meta.env.VITE_FETCH_CURRENT
const logoutUrl = import.meta.env.VITE_FETCH_LOGOUT
const urlCreate = import.meta.env.VITE_FETCH_CREATE;
const allRoomsUrl = import.meta.env.VITE_FETCH_ROOMS
const oneRoomUrl = import.meta.env.VITE_FETCH_ONE_ROOMS
const editRoomUrl = import.meta.env.VITE_FETCH_EDIT_ROOMS
const deleteRoomUrl = import.meta.env.VITE_FETCH_DELETE_ROOMS
const allSalonsUrl = import.meta.env.VITE_FETCH_SALONS
const getOneSalonUrl = import.meta.env.VITE_FETCH_ONE_SALONS
const getAllSportsUrl =  import.meta.env.VITE_FETCH_SPORTS

export const getAllSalons = () => axios.get(allSalonsUrl)
export const getOneSalon = (id) => axios.get(getOneSalonUrl + id, id)
export const formReq = (reservation, id) =>  axios.post(create + id, reservation) // Función que recibe el url y la reservación.
export const comments = () => axios.get(comment)
export const current = () => axios.get(currentClima)
export const logout = () => axios.post(logoutUrl)
export const sendDataUrl = (roomData) => axios.post(urlCreate, roomData, {headers: {'Content-Type': 'multipart/form-data'}})
export const allRooms = () => axios.get(allRoomsUrl)
export const oneRoom = (id) => axios.get(oneRoomUrl + id)
export const editRoom = (id, roomData) => axios.put(editRoomUrl + id, roomData)
export const deleteRoom = (id) => axios.delete(deleteRoomUrl + id)
export const getAllSports = () => axios.get(getAllSportsUrl)
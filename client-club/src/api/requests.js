import axios from "axios";

// Reservations
const create = import.meta.env.VITE_FETCH_RESERVATION // Crear

export const formReq = (reservation, id) =>  axios.post(create + id, reservation) // Función que recibe el url y la reservación.

// Clima API
const currentClima = import.meta.env.VITE_FETCH_CURRENT

export const current = () => axios.get(currentClima)

// LOGIN
const logoutUrl = import.meta.env.VITE_FETCH_LOGOUT

export const logout = () => axios.post(logoutUrl)

//SALON
const allSalonsUrl = import.meta.env.VITE_FETCH_SALONS
const getOneSalonUrl = import.meta.env.VITE_FETCH_ONE_SALONS
const createaSalonUrl = import.meta.env.VITE_CREATE_SALONS 
const updateSalonUrl = import.meta.env.VITE_UPDATE_SALONS 
const daleteSalonUrl = import.meta.env.VITE_DELETE_SALONS

export const getAllSalons = () => axios.get(allSalonsUrl)
export const getOneSalon = (id) => axios.get(getOneSalonUrl + id, id)
export const createaSalon = (body) => axios.post(createaSalonUrl, body)
export const updateSalon = (id, body) => axios.post(updateSalonUrl + id, body)
export const daleteSalon = (id) => axios.delete(daleteSalonUrl + id)


//SPORT
const getAllSportsUrl =  import.meta.env.VITE_FETCH_SPORTS
const createaSportUrl = import.meta.env.VITE_CREATE_SPORTS
const updateSportUrl = import.meta.env.VITE_UPDATE_SPORTS
const daleteSportUrl = import.meta.env.VITE_DELETE_SPORTS

export const getAllSports = () => axios.get(getAllSportsUrl)
export const createaSport = (body) => axios.post(createaSportUrl, body)
export const updateSport = (id, body) => axios.post(updateSportUrl + id, body)
export const daleteSport = (id) => axios.delete(daleteSportUrl + id)

//RESTAURANT
const getAllRestUrl =  import.meta.env.VITE_FETCH_REST
const getOneRestUrl = import.meta.env.VITE_FETCH_ONE_REST
const createaRestUrl = import.meta.env.VITE_CREATE_REST
const updateRestUrl = import.meta.env.VITE_UPDATE_REST
const daleteRestUrl = import.meta.env.VITE_DELETE_REST

export const getAllRest = () => axios.get(getAllRestUrl)
export const getOneRest = (id) => axios.get(getOneRestUrl + id, id)
export const createaRest = (body) => axios.post(createaRestUrl, body)
export const updateRest = (id, body) => axios.post(updateRestUrl + id, body)
export const daleteRest = (id) => axios.delete(daleteRestUrl + id)

//ENVENTS
const getAllEventsUrl =  import.meta.env.VITE_FETCH_EVENTS
const getOneEventsUrl = import.meta.env.VITE_FETCH_ONE_EVENTS
const createaEventsUrl = import.meta.env.VITE_CREATE_EVENTS
const updateEventsUrl = import.meta.env.VITE_UPDATE_EVENTS
const daleteEventsUrl = import.meta.env.VITE_DELETE_EVENTS

export const getAllEvents = () => axios.get(getAllEventsUrl)
export const getOneEvents = (id) => axios.get(getOneEventsUrl + id, id)
export const createaEvents = (body) => axios.post(createaEventsUrl, body)
export const updateEvents = (id, body) => axios.post(updateEventsUrl + id, body)
export const daleteEvents = (id) => axios.delete(daleteEventsUrl + id)
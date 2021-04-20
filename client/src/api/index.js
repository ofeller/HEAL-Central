import axios from 'axios'
//var baseUrl = process.env.baseURL || "http://localhost:3001/api"

const api = axios.create({
    baseURL: 'https://ufheal.herokuapp.com/api',
})

export const insertAttendee = payload => api.post(`/attendee`, payload)
export const getAllAttendees = () => api.get(`/attendees`)
export const updateAttendeeById = (id, payload) => api.put(`/attendee/${id}`, payload)
export const deleteAttendeeById = id => api.delete(`/attendee/${id}`)
export const getAttendeeById = id => api.get(`/attendee/${id}`)

const apis = {
    insertAttendee,
    getAllAttendees,
    updateAttendeeById,
    deleteAttendeeById,
    getAttendeeById,
}

export default apis
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
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
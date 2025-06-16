import axios from "axios";

const API = axios.create({
  baseURL: "https://student-teacher-appointment-booking-3c00.onrender.com",
});

export default API;
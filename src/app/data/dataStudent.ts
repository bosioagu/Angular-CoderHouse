import { Student } from "../interfaces/Student";

export class DataStudents{
    static students: Student[] = [
    {
        id: 1, 
        name: "Francisco", 
        lastname: "Perez", 
        age: 19, 
        cellPhoneNumber: "3513535353",
        languagePrefer: "Angular",
        username: "fPerez",
        password: "123456" 
    },
    {
        id: 2, 
        name: "Esteban", 
        lastname: "Garcia", 
        age: 22, 
        cellPhoneNumber: "3513535353",
        languagePrefer: "React",
        username: "estebanGa",
        password: "123456" 
        },
    {
        id: 3, 
        name: "Mauricio", 
        lastname: "Fernandez", 
        age: 21, 
        cellPhoneNumber: "3513535353",
        languagePrefer: "Angular", 
        username: "mFernandez",
        password: "123456" 
    },
    {
        id: 4, 
        name: "Diego", 
        lastname: "Diaz", 
        age: 34, 
        cellPhoneNumber: "3513535353",
        languagePrefer: "Angular", 
        username: "DiazD",
        password: "123456" 
    },
    {
        id: 5, 
        name: "Santiago", 
        lastname: "Morales", 
        age: 47, 
        cellPhoneNumber: "3513535353",
        languagePrefer: "Java", 
        username: "sanMorales",
        password: "123456" 
    }
  ]
}
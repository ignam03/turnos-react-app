import React from 'react'
import { useEffect } from 'react';

const Patient = ({ patient, setPatient, deletePatient }) => {

    useEffect(() => {
    }, []);

    const { name, owner, email, date, cause, id } = patient;

    const handleDelete = () => {

        const response = confirm('Delete this patient?')

        if (response) {
            deletePatient(id);
        }
    }

    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 upp
                '>Name: {''}
                <span className='font-normal normal-case'>{name}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 upp
                '>Owner: {''}
                <span className='font-normal normal-case'>{owner}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 upp
                '>Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 upp
                '>Date: {''}
                <span className='font-normal normal-case'>{date}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 upp
                '>Causes: {''}
                <span className='font-normal normal-case'>{cause}</span>
            </p>
            <div className='flex justify-between mt-10'>
                <button
                    type='button'
                    className='bg-indigo-600 py-2 px-10 hover:bg-indigo-700 text-white font-bold uppercase rounded-md'
                    onClick={() => {
                        setPatient(patient);
                    }}
                >
                    Edit
                </button>
                <button
                    type='button'
                    className='bg-red-600 py-2 px-10 hover:bg-red-700 text-white font-bold uppercase rounded-md'
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Patient

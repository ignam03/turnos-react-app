import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';

const Form = ({ patients, setPatients, patient, setPatient }) => {

    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [cause, setCause] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(patient).length) {
            setName(patient.name)
            setOwner(patient.owner);
            setEmail(patient.email);
            setDate(patient.date);
            setCause(patient.cause);
        }
    }, [patient]);


    const generateId = () => {
        const date = Date.now().toString(36);
        const random = Math.random().toString().substring(2);
        return date + random;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //validation of  form

        if ([name, owner, email, date, cause].includes('')) {
            setError(true);
            return;
        }
        setError(false);

        //object patient
        const patientObj = {
            name,
            owner,
            email,
            date,
            cause,
        }

        if (patient.id) {
            //edit document
            patientObj.id = patient.id
            const patientsUpdate = patients.map(patientState =>
                patientState.id === patient.id ? patientObj : patientState
            );
            setPatients(patientsUpdate);
            setPatient({});
        } else {
            patientObj.id = generateId();
            setPatients([...patients, patientObj]);
        }


        //restart form
        setName('');
        setOwner('');
        setEmail('');
        setDate('');
        setCause('');
    }

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center' >Form</h2>
            <p className='text-xl mt-5 text-center text-bold mb-10'>
                Added patients and {''}
                <span className='text-indigo-600 font-bold'>Administrate</span>
            </p>
            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-lg py-10 px-5'>

                {error && <Error><p>Todos los campos son necesarios</p></Error>}
                <div className='mb-5'>
                    <label htmlFor='name' className='block text-gray-700 uppercase font-bold'>Name pet</label>
                    <input
                        id='name'
                        type='text'
                        placeholder='Name of pet'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='owner' className='block text-gray-700 uppercase font-bold'>Name Owner</label>
                    <input
                        id='owner'
                        type='text'
                        placeholder='Name of owner'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={owner}
                        onChange={(e) => {
                            setOwner(e.target.value)
                        }}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email </label>
                    <input
                        id='email'
                        type='email'
                        placeholder='email of owner'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='createDate' className='block text-gray-700 uppercase font-bold'>Date</label>
                    <input
                        id='createDate'
                        type='date'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value)
                        }}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='cause' className='block text-gray-700 uppercase font-bold'>Causes</label>
                    <textarea
                        id='cause'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='write the cause'
                        value={cause}
                        onChange={(e) => {
                            setCause(e.target.value)
                        }}
                    />
                </div>
                <input
                    type='submit'
                    className='bg-indigo-600 w-full p-3 text-white uppercase
                    font-bold rounded-sm hover:bg-indigo-700 cursor-pointer transition-colors'
                    value={patient.id ? 'edit' : 'add patient'}
                />
            </form>
        </div>
    )
}

export default Form

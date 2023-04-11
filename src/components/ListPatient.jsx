import React from 'react'
import Patient from './Patient'

const ListPatient = ({ patients, setPatient, deletePatient }) => {

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            {patients && patients.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>List of Patients</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Administrate your {''}
                        <span className='text-indigo-600 font-bold '>Patients and Turns</span>
                    </p>
                    {patients.map((patient) =>
                        <Patient
                            key={patient.id}
                            patient={patient}
                            setPatient={setPatient}
                            deletePatient={deletePatient}
                        />
                    )}
                </>
            ) : (
                <>
                    <h2 className='font-black text-3xl text-center'>No patients</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        add patients {''}
                        <span className='text-indigo-600 font-bold '>and see in this place</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListPatient


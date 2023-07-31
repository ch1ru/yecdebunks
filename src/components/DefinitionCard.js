import React from 'react'

function DefinitionCard() {
  return (
        <div className=" p-4 lg:mx-72 shadow-2xl mt-16 rounded-lg">
            <div className="flex justify-center gap-2 content-center items-center">
                <h2 className="text-center text-2xl text-blue-800">Fundamentalism</h2>
                <h3 className="italic text-xl text-gray-800">Noun</h3>
            </div>
            <h2 className="text-gray-600 text-center">fun·​da·​men·​tal·​ism</h2>
            <p className="mt-3 text-center text-gray-600">Fundamentalism is a tendency among certain groups and individuals that is characterized by the application of a strict literal interpretation to scriptures, dogmas, or ideologies, along with a strong belief in the importance of distinguishing one's ingroup and outgroup, which leads to an emphasis on some conception of "purity", and a desire to return to a previous ideal from which advocates believe members have strayed.</p>
            <p className="mt-4 text-center italic text-gray-800">source: Wikipedia</p>
        </div>
    )
}

export default DefinitionCard
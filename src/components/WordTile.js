import React from 'react'
  
  export const WordTile = (props) => {

    return (
        <p className=" cursor-pointer hover:text-blue-500 hover:scale-105 transition-all text-2xl">{props.item}</p>
    );
  };
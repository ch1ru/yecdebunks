import React, { useEffect, useState } from 'react'
import axios from 'axios';
import axiosClient from '../Axios/AxiosClient';

function Concordance(props) {

    const [word, setWord] = useState(props.word)
    const [html, setHtml] = useState("")

    const grabHTML = async (url) => {
        axiosClient.get(url).then(res => {
            setHtml(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        //grabHTML(`/?sl=iw&tl=en&text=${word}&op=translate`)
    })

  return (
    <div>{html}</div>
  )
}

export default Concordance
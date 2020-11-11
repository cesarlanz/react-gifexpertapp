import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        (async () => {
            setState({
                data: await getGifs(category),
                loading: false
            })
        })();
    }, [category])

    return state;
    
}

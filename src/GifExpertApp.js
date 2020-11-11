import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = () => {
        setCategories([...categories, 'Puou de Perro']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories={setCategories} />

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))}
            </ol>
        </>
    );
}

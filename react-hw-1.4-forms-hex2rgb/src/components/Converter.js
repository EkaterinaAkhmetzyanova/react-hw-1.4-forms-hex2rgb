import { useState } from 'react';

export default function Converter() {
    const [color, setColor] = useState('');
    const handleChange = ({ target }) => {
        const hex = target.value;
        if (hex.length !== 7) {
            return;
        };
        const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        const result = rgb === null ? 'Ошибка' : `RGB(${parseInt(rgb[1], 16)}, ${parseInt(rgb[2], 16)}, ${parseInt(rgb[3], 16)})`
        setColor(result);
    }
    return (
        <div className='ConverterBox' style={{ background: color }}>
            <input className='HexInput' onChange={ handleChange }></input>
            <div className='RgbResult'>{color}</div>
        </div>
    );
    
}
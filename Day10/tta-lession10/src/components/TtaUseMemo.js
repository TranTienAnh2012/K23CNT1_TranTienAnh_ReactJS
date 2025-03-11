import React, { useMemo, useRef, useState } from 'react'

function TtaUseMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]); // Sửa tên và kiểu

    const nameRef = useRef();

    const TtaHandelSubmit = () => {
        setProducts([
            ...products,
            {
                name: name,
                price: +price, // Ép kiểu số
            }
        ]);
        setName('');
        setPrice('');
        nameRef.current.focus(); // Focus lại input name
    };

    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log('Tính toán lại...');
            return result + prod.price;
        }, 0);
        return result;
    }, [products]); // Chỉ tính lại khi mảng thay đổi

    return (
        <div className='alert alert-info'>
            <input
                type='text'
                ref={nameRef}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Nhập Name'
            />
            <br />
            <input
                type='text'
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder='Nhập Price'
            />
            <br />
            <button className='btn btn-primary my-2' onClick={TtaHandelSubmit}>
                Add
            </button>
            <h3>Total:  {total }</h3>
            <ul>
                {products.map((prod, index) => (
                    <li key={index}>
                        {prod.name} - {prod.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TtaUseMemo;

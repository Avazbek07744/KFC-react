import { useState, useEffect } from 'react';
import data from '../data/data.json';
import img1 from '../assets/search.svg';
import ItemCard from './ItemCart';

const Main = () => {
    const [inpute, setInpute] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setInpute(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const renderCategory = (title, items) => (
        <div>
            <h2 className='text-center xl:text-left font-bold text-2xl my-10'>{title}</h2>
            <div className='grid grid-cols-1 xl:grid-cols-2  gap-8 mb-10'>
                {items.length > 0 && items.map((v, i) => (
                    <ItemCard
                        key={i}
                        image={v.image}
                        name={v.name}
                        description={v.description}
                        price={v.price}
                        onPriceClick={() => openModal(v)}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <div className='max-w-[1130px] mx-auto mt-6 pb-10'>
            {inpute && (
                <div className='max-w-[460px] sm:mx-auto xl:mx-0 xl:max-w-[320px] shadow shadow-[#E5E5E5] rounded-full flex gap-1 px-4 transition-opacity duration-500 ease-in-out opacity-100'>
                    <img src={img1} width={23} height={23} alt="search icon" />
                    <input type="text" className="border-none outline-none p-2 bg-white" />
                </div>
            )}

            {renderCategory("Burgerlar", data.burgers)}
            {renderCategory("Tvisterlar", data.otherItems)}
            {renderCategory("Basketlar", data.boxesAndBaskets)}
            {renderCategory("Suvli tovuq", data.chickenItems)}
            {renderCategory("Lanchbokslar", data.lunchBoxes)}
            {renderCategory("Kartoshka va sneklar", data.frenchFries)}
            {renderCategory("Qaylalar va doplar", data.sauces)}
            {renderCategory("Sovuq ichimliklar", data.beverages)}
            {renderCategory("Issiq ichimliklar", data.coffee)}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg">
                        <div className='flex justify-between max-w-[800px] mx-auto items-center'>
                            <img src={selectedProduct.image} alt="" />
                            <div className='w-96'>
                                <h3 className="text-xl font-bold mb-4">{selectedProduct.name}</h3>
                                <p>{selectedProduct.description}</p>
                                <p className="mt-2 font-bold">{selectedProduct.price}</p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div></div>
                            <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded text-right">
                                Yopish
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;

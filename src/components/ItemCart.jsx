import img1 from '../assets/pen.svg'

const ItemCard = ({ image, name, description, price, onPriceClick }) => {
    return (
        <div className='cart max-w-[460px] mx-auto md:max-w-[730px] lg:max-w-[692px] xl:max-w-[565px] w-full  shadow-[#d9d9d9]'>
            <img className='max-w-[122px] md:max-w-[130px] xl:max-w-[125px] w-full pl-3' src={image} width={125} alt="" />
            <div className='py-4 pe-4 lg:max-w-[532px] xl:max-w-[376px] w-full'>
                <h3 className='mb-2 text-[#2f322c] font-bold text-[16px]'>{name}</h3>
                <p className='max-w-[290px] md:max-w-[522px] xl:max-w-[392px] line-clamp-2 mb-3'>{description}</p>
                <div className='flex gap-4 '>
                    <button className='hidden md:block max-w-[75px] w-full h-10 color-pink rounded-full'>
                        <img src={img1} width={30} className='mx-auto' alt="pen icon" />
                    </button>
                    <button
                        onClick={onPriceClick}
                        className='flex justify-center max-w-[290px] md:max-w-[150px] w-full h-10 text-xl px-4 pt-1 button color-red border-red hover-b'
                    >
                        {price}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;

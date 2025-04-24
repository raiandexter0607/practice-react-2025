
function CardItem ({ image, name, price, onAdd}) {

    return(
        <div className="w-64 rounded-2xl shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 h-80 flex flex-col">
            <img src={image} alt={name} className="w-full h-40 object-cover"/>
            <div className="p-4 flex flex-col justify-between flex-grow">
            <div className="mt-auto">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">{price}</p>
            </div>
            <div className="mt-auto">
            <button onClick={onAdd} className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200">Add to cart</button>
            </div>
            </div>
        </div>
    )
}

export default CardItem
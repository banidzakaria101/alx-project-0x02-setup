import { CardProps } from "@/interfaces"

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="w-2xl m-2 border gap border-gray-300 p-4 rounded-lg shadow hover:shadow duration-300 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
            <p className="text-gray-700 text-base">{content}</p>
        </div>
    );
};

export default Card;
import { CardProps } from "@/interfaces";
import { useState } from "react";

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: CardProps) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, content });
        setTitle('');
        setContent('');
        onClose();
    };


return (
    <div className="fixsed inset-0 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold">New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border p-1 rounded" required/>
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="w-fill border p-2 rounded" required/>
                <div className="flex justify-end gap-2">
                    <button type="button" onClick={onClose} className="bg-gray-400 text white px-4 py-2 rounded-2xl">close</button>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-2xl">Submet</button>
                </div>
            </form>
        </div>
    </div>
)

};

export default PostModal;
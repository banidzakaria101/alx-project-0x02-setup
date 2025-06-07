import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import { useState } from "react";


export default function Home() {
    const [posts, setPosts] = useState<CardProps[]>([]);
    const [modalOpen, setModalOpen] = useState(false);

    const handleAddPost = (post: CardProps) => {
        setPosts([...posts, post]);
    };
    return (
        <>
            <Header />
            <h1 className="text-2xl p-4 font-bold">Welcom to Home page</h1>
            <button onClick={() => setModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-2xl"> Create Post</button>
            <PostModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
            <div className="grid gap-4 mt-6">
                {posts.map((post, index) => (
                    <Card key={index} title={post.title} content={post.content} />
                ))}
            </div>
        </>
    );
};


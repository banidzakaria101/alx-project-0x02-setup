import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home = () => {
    return (
        <>
            <Header />
            <h1 className="text-2xl font-bold">Welcom to Home page</h1>
            <div className="p-4 m-1 flex ">
                <Card title="Card 1" content="This is the content of the first card"></Card>
                <Card title="Card 2" content="This is the content of the second card"></Card>
                <Card title="Card 3" content="This is the content of the third card"></Card>
            </div>
        </>
    );
};

export default Home;
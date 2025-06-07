import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About = () => {
    return (
        <>
            <Header />
            <div className="text-2xl font-bold">About page</div>
            <Button size="small" shape="rounded-sm" label="Small Button" />
            <Button size="medium" shape="rounded-md" label="Medium Button" />
            <Button size="large" shape="rounded-full" label="Large Button" />
        </>
    );
};

export default About;
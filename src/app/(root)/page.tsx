import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";

export default function Home() {
    return (
        <div className="min-h-screen lg:h-screen p-4">
            <Header />

            <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4">
                <EditorPanel />
                <OutputPanel />
            </div>
        </div>
    );
}
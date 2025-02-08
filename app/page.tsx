import NavigationBar from "@/components/navigation-bar";
export default function Home() {
  return (
    <><NavigationBar />
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to homepage
        </h1>
      </main></>
  );
}

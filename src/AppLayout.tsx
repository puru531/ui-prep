import ThemeToggle from "./ui/ThemeToggle";

const AppLayout = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white flex flex-col min-h-screen">
      {/* Your header */}
      <header className="bg-gray-800 text-white py-4 flex">
        <div className="container mx-auto">Your Header</div>
        <ThemeToggle />
      </header>

      {/* Main content */}
      <main className="flex-grow">Hello</main>

      {/* Your footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">Your Footer</div>
      </footer>
    </div>
  );
};

export default AppLayout;

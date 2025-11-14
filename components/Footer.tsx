export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="text-gray-400">
            Copyright &copy; UNSW Computer Enthusiasts Society {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}

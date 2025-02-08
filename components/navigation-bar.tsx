export default function NavigationBar() {
    return (
      <nav className="p-4 bg-gray-200">
        <ul className="flex space-x-4">
          <li>
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Active
            </a>
          </li>
          <li>
            <a className="text-blue-500 hover:text-blue-800" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Link
            </a>
          </li>
          <li>
            <a className="text-gray-400 cursor-not-allowed" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  
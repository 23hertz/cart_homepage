export default function SubMenu() {
  return (
    <div className="p-4 w-64 bg-white rounded-lg shadow space-y-4">
      <h2 className="font-semibold">Settings</h2>
      <ul className="text-sm text-gray-600 space-y-2">
        <li className="mb-5 text-blue-600 font-semibold">My Profile</li>
        <li className="mb-5">Security Options</li>
        <li className="mb-5">Chat</li>
        <li className="mb-5">Preferences</li>
        <li>Notifications</li>
      </ul>
    </div>
  );
}

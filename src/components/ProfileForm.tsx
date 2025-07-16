import type { ProfileProps } from "../types/IProfile"

const ProfileForm: React.FC<ProfileProps> = ({}) => {
  return (
    <div className="p-6 w-full bg-white rounded-lg shadow">
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold">Profile Information</h2>
          <p className="text-sm text-gray-500">Leslie Alexander</p>
        </div>
        <button className="px-4 py-0 h-10 text-white bg-gray-600 rounded">Edit</button>
      </div>

      <h3 className="mb-2 font-semibold">Personal Details</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input className="p-2 border-gray-300 border rounded" placeholder="First Name" defaultValue="" />
        <input className="p-2 border-gray-300 border rounded" placeholder="Last Name" defaultValue="" />
        <input className="p-2 border-gray-300 border rounded" placeholder="Email" defaultValue="" />
        <input className="p-2 border-gray-300 border rounded" placeholder="Phone" defaultValue="" />
        <input className="p-2 border-gray-300 border rounded" placeholder="Bio" defaultValue="" />
        <input className="p-2 border-gray-300 border rounded" placeholder="Gender" defaultValue="" />
        <input className="p-2 border-gray-300 border rounded" placeholder="DOB" defaultValue="" />
        <input className="p-2 border-gray-300 border rounded" placeholder="National ID" defaultValue="" />
      </div>

      <h3 className="mb-2 font-semibold">Address</h3>
      <div className="grid grid-cols-2 gap-4">
        <input className="p-2 border-gray-300 border rounded" placeholder="Country" defaultValue="" />
        <input className="p-2 border-gray-300 border rounded" placeholder="City/State" defaultValue="" />
        <input className="p-2 border-gray-300 border rounded" placeholder="Postal Code" defaultValue="" />
        <input className="p-2 border-gray-300 border rounded" placeholder="TAX ID" defaultValue="" />
      </div>
    </div>
  );
}
export default ProfileForm
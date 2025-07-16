import SubMenu from '../components/SubMenu';
import ProfileForm from '../components/ProfileForm';

export default function Settings() {
  return (
    <div className="flex gap-6">
      <SubMenu />
      <ProfileForm title={''} price={''} image={''} />
    </div>
  );
}

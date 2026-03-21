export interface User {
  id: number;
  name: string;
  email: string;
  role?: 'admin' | 'viewer';
}

export interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const badgeStyles =
    user.role === 'admin'
      ? 'bg-purple-100 text-purple-700'
      : 'bg-gray-100 text-gray-600';
  return (
    <div className="border rounded-xl shadow-md p-4 w-fit">
      <div>
        <p className="font-bold text-lg capitalize">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
        {user.role && (
          <span
            className={`${badgeStyles} text-xs px-2 py-1 rounded-full font-medium`}>
            {user.role}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserCard;

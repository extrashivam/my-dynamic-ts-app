import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>User ID: {id}</h1>;
};

export default User;

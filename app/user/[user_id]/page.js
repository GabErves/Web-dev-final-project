import Profile from "../../../pages/Profile";

const Page = ({ params: { user_id } }) => {
  return <Profile user_id={user_id} />;
};

export default Page;

import Profile from "../../../pages/Profile";

//The page that appears at user/[user_id]:
const Page = ({ params }) => {
  const { user_id } = params;
  return <Profile user_id={user_id} />;
};

export default Page;

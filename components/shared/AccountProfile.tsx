"use client";

type AccountProfileProps = {
  user: {
    id: string;
    objectId: string;
    username: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
};

const AccountProfile = ({ user, btnTitle }: AccountProfileProps) => {
  return <div>Hello</div>;
};

export default AccountProfile;

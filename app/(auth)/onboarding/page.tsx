import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

async function Page() {
  const user = await currentUser();
  const userInfo = {};
  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="mx-auto flex flex-w-3xl flex-col justify-start px-10 py-20 items-center">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to complete signup
      </p>

      <section className="mt-9 bg-dark-2 p-10 max-w-xl rounded-lg">
        <AccountProfile user={userData} btnTitle="continue" />
      </section>
    </main>
  );
}

export default Page;

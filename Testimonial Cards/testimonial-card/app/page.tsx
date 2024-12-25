import Credits from "@/components/Credits";
import Image from "next/image";

export default function Home() {
  const data = {
    name: "Sarah Dole",
    userName: "@sarahdole",
    bio: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    avatar: "/img/profile-thumbnail.png",
  };

  return (
    <div className="h-[768px] w-[1440px] flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] py-[200px]">
      <main className="w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg">
        <div className="flex items-center gap-4 self-stretch">
          {/* Avatar section */}
          <section className="w-12 h-12">
            <Image
              src={data?.avatar}
              width={48}
              height={48}
              className="w-12 h-12 object-cover"
              alt={`${data?.name}'s Avatar`}
            />
          </section>
          {/* Name & Username section */}
          <section className="flex flex-col gap-px grow">
            <span className="font-semibold text-lg text-justify text-neutral-900">
              {data?.name}
            </span>
            <span className="font-normal text-sm text-neutral-600">
              {data?.userName}
            </span>
          </section>
        </div>
        {/* Bio section */}
        <span className="font-normal text-base text-neutral-600">
          {data?.bio}
        </span>
      </main>
      <footer>
        <Credits />
      </footer>
    </div>
  );
}

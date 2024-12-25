import Image from "next/image";

type TestimonialProps = {
  userName: string;
  avatar: string;
  testimonial: string;
  name: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  userName,
  avatar,
  testimonial,
  name,
}: TestimonialProps) => {
  return (
    <section className="w-full h-full flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] pt-[200px]">
      <div className="max-w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
        <section className="flex w-full justify-center items-center gap-4 ">
          {/* Avatar section */}
          <figure className="w-12 h-12">
            <Image
              src={avatar}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              alt={`${name}'s Avatar`}
            />
          </figure>
          {/* Name & Username section */}
          <section className="flex flex-col gap-px">
            <span className="font-semibold text-lg text-justify text-neutral-900 ">
              {name}
            </span>
            <span className="font-normal text-sm text-neutral-600">
              {userName}
            </span>
          </section>
        </section>
        {/* testimonial section */}
        <p className="font-normal text-base text-neutral-600">{testimonial}</p>
      </div>
    </section>
  );
};

export default TestimonialCard;

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
    <article className="w-full h-full flex flex-col items-center pt-[200px]">
      <h2 id="testimonial-title" className="sr-only hidden" aria-labelledby="testimonial-title">
        User Testimonial
      </h2>
      <div className="max-w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
        <section className="flex w-full gap-4 ">
          {/* Avatar section */}
          <figure className="w-12 h-12">
            <Image
              quality={65}
              placeholder="blur"
              priority={true}
              src={avatar}
              width={48}
              height={48}
              objectFit="cover"
              alt={`Avatar of ${name}`}
            />
          </figure>
          {/* Name & Username section */}
          <section className="flex flex-col gap-px text-pretty w-full">
            <span className="font-semibold text-lg text-justify text-neutral-900 w-full">
              {name}
            </span>
            <span className="font-normal text-sm text-neutral-600 w-full">
              {userName}
            </span>
          </section>
        </section>
        {/* testimonial section */}
        <blockquote>
          <p className="font-normal text-base text-neutral-600">
            {testimonial}
          </p>
        </blockquote>
      </div>
    </article>
  );
};

export default TestimonialCard;



interface ImageClipBoxProps {
  src: string;
  alt: string;
  clipClass?: string;
}

const ImageClipBox = ({ src, alt, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} alt={alt} />
  </div>
);

export const Contact = () => {
  return (
    <section id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="https://cdn.glitch.global/a476a7e5-1e4c-4e94-b54e-501f93553604/image-removebg-preview%20(23).png?v=1742534536360"
            alt="Contact bg 1"
            clipClass="contact-clip-path"
          />

          <ImageClipBox
            src="https://cdn.glitch.global/a476a7e5-1e4c-4e94-b54e-501f93553604/download%20(2).png?v=1742534361059"
            alt="Contact bg 2"
            clipClass="contact-clip-path lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          

          <ImageClipBox
            src="https://cdn.glitch.global/a476a7e5-1e4c-4e94-b54e-501f93553604/367-3677238_branding-brand-awareness.png?v=1742534769401"
            alt="Swordman"
            clipClass="clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Partner with Lightworkz Media</p>

          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Let&apos;s b<b>u</b>ild 
            <br /> the Brand <br /> From y<b>o</b>ur Busin<b>e</b>ss 
          </p>
        </div>

        {/* Embedded Form */}
        <div className="mt-10 flex justify-center">
          <iframe
            style={{ border: "none", width: "100%", height: "650px", maxWidth: "600px" }}
            id="contact-us-cgbtfp"
            src="https://opnform.com/forms/contact-us-cgbtfp"
          ></iframe>
        </div>
      </div>
    </section>
  );
};


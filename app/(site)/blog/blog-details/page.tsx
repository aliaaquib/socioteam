import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
  // other metadata
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">News</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      alt="Transforming Ideas into Reality with Socio"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Transforming Ideas into Reality with Socio
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Socio Team
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: July 22, 2024
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>
                    Digital Agency
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    In today’s fast-paced digital world, having a strong online presence is more important than ever. Whether you're a small business owner, an entrepreneur, or a large corporation, the way you present yourself online can make all the difference. This is where Socio comes in. Socio is a digital agency dedicated to bringing your ideas to life through top-notch IT services.
                  </p>

                  <h3 className="pt-8">
                    What is Socio?
                  </h3>
                  
                  <p>
                   Socio is a one-stop-shop for all your digital needs. We specialize in web development, app development, social media marketing, logo design, and brand identity. Our mission is to provide our customers with the best IT services possible, delivering a "Wow" factor in every project we undertake. Our vision is to be the top IT service provider internationally.
                  </p>

                  {/* <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div> */}

                  <h3 className="pt-8">
                  Why Choose Socio?
                  </h3>

                  <ol> 1. Expertise in Multiple Areas:
                    <li><b>Web Development: </b>We create stunning, user-friendly websites that are not only visually appealing but also functional and responsive. Your website will look great on any device, from desktops to smartphones.</li>
                    <li><b>App Development: </b>We develop mobile applications that are both intuitive and powerful. Whether you need an app for iOS, Android, or both, we've got you covered.</li>
                    <li><b>Social Media Marketing: </b>Our team knows how to make your brand shine on social media. We create engaging content and manage your social media profiles to help you connect with your audience and grow your following.</li>
                    <li><b>Logo Design and Brand Identity: </b>Your brand’s identity is crucial. We design logos and create brand identities that reflect your values and make you stand out in the crowded marketplace.</li>
                  </ol>

                  <ol> 2. Customer-Centric Approach 
                    <p>At Socio, our customers are at the heart of everything we do. We listen to your ideas, understand your goals, and work closely with you to create solutions that meet your needs. We believe in building long-term relationships with our clients based on trust and mutual respect.</p>
                  </ol>

                  <ol> 3. Innovative Solutions 
                    <p>Our portfolio is filled with successful projects across various industries. From small businesses to large enterprises, we've helped many clients achieve their digital goals. Our testimonials speak for themselves, with clients praising our professionalism, creativity, and dedication.</p>
                  </ol>

                  <ol> 4. Proven Track Record
                    <p>We stay ahead of the curve by constantly exploring new technologies and trends. This allows us to provide innovative solutions that help our clients stay competitive in their industries.</p>
                  </ol>

                  <h3>How Socio Brings Ideas to Life</h3>

                  <p>Every project at Socio starts with a simple idea. Our team of experts works tirelessly to transform that idea into a reality. Here’s how we do it:</p>
                  
                  <ol>2. Planning:: 
                  <p>Once we have a clear understanding of your goals, we create a detailed plan outlining the steps needed to achieve them. This includes timelines, milestones, and deliverables.</p>
                  </ol>
                  
                  <ol>1. Consultation: 
                  <p>We begin by understanding your needs and objectives. We listen to your ideas and offer insights based on our experience and expertise.</p>
                  </ol>

                  <ol>3. Execution:: 
                  <p>Our talented team of designers, developers, and marketers get to work. We keep you informed at every stage of the project, ensuring that everything is on track and meets your expectations.</p>
                  </ol>
                  
                  <ol>4. Launch:: 
                  <p>After rigorous testing and quality assurance, we launch your project. But our job doesn’t end there. We provide ongoing support to ensure your continued success.</p>
                  </ol>
                  
                  <ol>5. Evaluation:: 
                  <p>We believe in continuous improvement. After the launch, we evaluate the project’s performance and gather feedback to make any necessary adjustments.</p>
                  </ol>

                  <h3>Conclusion</h3>

                  <p>
                  In a digital world, having a reliable partner like Socio can make all the difference. We are committed to helping you succeed by providing top-quality digital solutions tailored to your needs. Whether you need a new website, a mobile app, or a comprehensive social media strategy, Socio is here to help. Let's bring your ideas to life!
                  </p>

                  <p>For more information, visit our website or contact us today. Let’s get started on your digital journey!</p>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;

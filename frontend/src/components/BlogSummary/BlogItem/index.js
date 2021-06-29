import React from 'react';

const BlogItem = () => {
  const imgUrl = process.env.PUBLIC_URL + '/assets/images/';

  return (
    <>
      <div className="flex flex-row">
        <div>
          <div className="flex flex-col">
            <span className="text-7xl">2021</span>
            <span className="pl-20 text-5xl">23/06</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col px-14">
            <div className="pb-16">
              <div className="flex flex-row justify-around">
                <div className="h-96 w-96">
                  <img
                    src={imgUrl + `blog-image-1.png`}
                    alt=""
                    className="base-image"
                  />
                </div>
                <div className="h-96 w-96">
                  <img
                    src={imgUrl + `blog-image-1.png`}
                    alt=""
                    className="base-image"
                  />
                </div>
              </div>
            </div>
            <div className="mb-16 px-12 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
              deserunt eum eligendi doloribus vero reprehenderit veritatis, rem
              beatae quae sint modi tenetur ipsam laboriosam aut, iure
              praesentium commodi accusamus quisquam. Perspiciatis dolore
              impedit, architecto, nemo ipsam at accusantium non vitae
              exercitationem aliquid incidunt reiciendis, quas eum. Blanditiis
              nemo omnis nesciunt! Nisi quam labore eum, numquam amet esse animi
              ex incidunt! Illo quisquam quasi nostrum odio. Amet similique
              nihil itaque suscipit, beatae corrupti eos modi vitae impedit
              velit nam eveniet debitis, magni maiores? Quo vel incidunt
              blanditiis tenetur tempora atque sint. Laborum expedita laudantium
              rem eligendi tempore a modi necessitatibus ullam ut quae? Ratione
              iure atque odio explicabo, reiciendis odit voluptate aut,
              praesentium iste neque sapiente vitae fugiat officiis, laborum
              maxime. Enim sunt itaque maxime dignissimos? Dolor quidem
              consectetur blanditiis, dolores iusto maiores accusantium
              exercitationem molestias necessitatibus veniam. Numquam soluta
              amet autem vero deserunt eius rerum alias officia laboriosam,
              saepe adipisci?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;

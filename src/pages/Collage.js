import React from "react";
import axios from "axios";
import loading from "../assets/loading.gif";
import "./Collage.css";
import InfiniteScroll from "react-infinite-scroll-component";
import UnsplashImage from "../components/unsplashImage";
import Modal from "../components/postModal";
let Collage = () => {
  React.useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // showing a modal post
  const showPost = (index) => {
    setShow(index);
  };

  // hiding a modal post
  const hidePost = () => {
    setShow(-1);
  };

  // Fetching list of images from unsplash api
  const fetchImages = () => {
    // Access keys provided for preview purposes, real world scenarios will instead involve environment variables
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "t399RRtebCtVr_arrzNshV3xF9cXaviuCkmR-zbC1RA";

    axios
      .get(
        `${apiRoot}/photos?page=${page}&client_id=${accessKey}&per_page=20&order_by=latest`
      )
      .then((res) => {
        setImages([...images, ...res.data]);
        setIsLoaded(true);
        setPage(page + 1);
      });
  };
  // Initialising state
  const [images, setImages] = React.useState([]);
  const [loaded, setIsLoaded] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [show, setShow] = React.useState(-1);
  return (
    <div className="hero is-fullheight is-bold is-info">
      <div className="hero-body">
        <div className="container">
          <InfiniteScroll
            dataLength={images}
            next={() => fetchImages()}
            hasMore={true}
            loader={<img src={loading} alt="loading" className="loader" />}
          >
            <div className="container">
              <div className="cards">
                {loaded
                  ? images.map((image, index) => (
                      <div key={image.id + index}>
                        <Modal
                          show={show}
                          handleClose={hidePost}
                          image={image}
                          index={index}
                        />
                        <UnsplashImage
                          url={image.urls.regular}
                          index={index}
                          username={image.user.username}
                          profilePicture={image.user.profile_image.small}
                          desc={image.description || image.alt_description}
                          created_at={image.created_at}
                          bordered={true}
                          likes={image.likes}
                          showPost={() => showPost(index)}
                        />
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default Collage;

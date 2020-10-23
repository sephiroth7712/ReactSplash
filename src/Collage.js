import React from "react";
import axios from "axios";
import loading from "./assets/loading.gif";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import UnsplashImage from "./components/unsplashImage";
import Modal from "./components/postModal";
let Collage = () => {
  React.useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const showPost = (index) => {
    setShow(index);
  };

  const hidePost = () => {
    setShow(-1);
  };
  const fetchImages = () => {
    // Access keys provided for preview purposes
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "t399RRtebCtVr_arrzNshV3xF9cXaviuCkmR-zbC1RA";

    axios
      .get(
        `${apiRoot}/photos?page=${page}&client_id=${accessKey}&per_page=5&order_by=latest`
      )
      .then((res) => {
        setImages([...images, ...res.data]);
        setIsLoaded(true);
        setPage(page + 1);
      });
  };
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
                      <div>
                        <Modal
                          show={show}
                          handleClose={hidePost}
                          content={image}
                          key={index}
                          index={index}
                        />
                        <UnsplashImage
                          url={image.urls.regular}
                          index={index}
                          key={index}
                          desc={image.alt_description}
                          bordered={true}
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

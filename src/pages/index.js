import styles from "../styles/Home.module.css";
import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";
import Skeleton from "@/components/Skeleton";
import Card from "@/components/Card";
import MyDialog from "@/components/Modal";
import InfiniteScroll from "react-infinite-scroll-component";
import Axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { withProtected } from "../hook/route";

const Home = (props) => {
  const [lstPost, setLstPost] = useState([]);
  const [hasMore, setHasmore] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentPostView, setCurrentPostView] = useState({});
  const [domain, setDomain] = useState("");
  const [defaultImage, setDefaultImage] = useState(0);
  const modalRef = useRef(null);
  const { getPost } = props;
  useEffect(() => {
    const fetchData = async () => {
      const dataBody = new FormData();
      dataBody.append("server_key", "83f0fa958d10392fd10bc8bb377a044c");
      dataBody.append("type", "get_news_feed");
      dataBody.append("limit", "10");

      const response = await Axios.post(
        `https://ulatroi.net/api/posts?access_token=848dcbdc3953ec076f7ad68515388e6572aa2c80020ea9ce56c762037fe8e11eba98958b38768046a883bbca3f8bc8814ff676cb0e91829a`,
        dataBody
      );
      const data = response?.data?.data;
      setLstPost(data);
    };
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    const lastPost = lstPost[lstPost.length - 1];
    const dataBody = new FormData();
    dataBody.append("server_key", "83f0fa958d10392fd10bc8bb377a044c");
    dataBody.append("type", "get_news_feed");
    dataBody.append("get_news_feed", "10");
    dataBody.append("after_post_id", lastPost.post_id);
    const response = await Axios.post(
      "https://ulatroi.net/api/posts?access_token=848dcbdc3953ec076f7ad68515388e6572aa2c80020ea9ce56c762037fe8e11eba98958b38768046a883bbca3f8bc8814ff676cb0e91829a",
      dataBody
    );
    const data = response?.data?.data;
    if (data.length === 0) {
      setHasmore(false);
    }
    setLstPost([...lstPost, ...data]);
  };

  const onOpenPostView = (postData, defaultImage) => {
    setCurrentPostView(postData);
    setIsOpenModal(true);
    setDefaultImage(defaultImage);
  };

  useEffect(() => {
    setDomain(window.location.origin);
  }, []);

  return (
    <Main meta={<Meta title="Ulatroi" description="Ulatroi description" />}>
      <div className="flex justify-center gap-6">
        <div className="sm:w-full">
          <InfiniteScroll
            dataLength={lstPost.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<Skeleton />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {lstPost?.map((item) => (
              <div key={item.post_id} className="flex justify-center">
                <Card
                  postType={item.postType}
                  postFile={item.postFile}
                  postId={item.post_id}
                  postText={item.postText}
                  publisher={item.publisher}
                  time={item.time}
                  postYoutube={item.postYoutube}
                  postLink={item.postLink}
                  postLinkImage={item.postLinkImage}
                  postLinkContent={item.postLinkContent}
                  postLinkTitle={item.postLinkTitle}
                  postFileName={item.postFileName}
                  fund_data={item.fund_data}
                  shared_info={item.shared_info}
                  photo_multi={item.photo_multi}
                  postData={item}
                  onOpenPostView={onOpenPostView}
                />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
      <MyDialog
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        postData={currentPostView}
        domain={domain}
        defaultImage={defaultImage}
      />
    </Main>
  );
};

export default withProtected(Home);

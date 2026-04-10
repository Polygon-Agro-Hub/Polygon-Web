import newsImg from "../images/newImg/NewsTestImg.png";

export const newsItems = Array.from({ length: 9 }).map((_, idx) => {
  const id = idx + 1;
  return {
    id,
    title: "Polygon Agro Holdings Launched GoViCare User Training in Jaffna",
    date: "Oct 08, 2024",
    image: newsImg,
    excerpt:
      "Polygon Agro Holdings is a leading name in agricultural innovation, has launched its GoViCare user training program in Jaffna.",
    content: [
      "Polygon Agro Holdings is a leading name in agricultural innovation, has launched its GoViCare user training program in Jaffna. Designed for farmers, GoViCare is a cutting-edge mobile application that empowers users to monitor crop health, receive tailored farming advice, and access real-time weather updates.",
      "The training session in Jaffna attracted a large number of local farmers eager to adopt digital solutions to modernize their farming practices. Participants were introduced to the app's features, including pest and disease diagnosis, soil condition assessments, and customized planting schedules.",
      "Polygon Agro Holdings representatives emphasized the importance of leveraging technology to address challenges in agriculture, especially in regions prone to climatic variability.",
    ],
  };
});

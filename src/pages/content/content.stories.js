import "./content.css";
import "../../components/pop-events/pop-events.css";
import "../../components/all-events/all-events.css";
import contentPage from "./content.html";

export default {
  title: "Pages/Content",
  parameters: { layout: "fullscreen" },
};

export const Content = () => contentPage;

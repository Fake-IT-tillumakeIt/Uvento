import "./content.css";
import "../../components/pop-events/pop-events.css";
import "../../components/all-events/all-events.css";
import contentPage from "./content.html";

export default {
  title: "Pages/Content",
  parameters: { layout: "centered" },
};

export const Content = () => contentPage;

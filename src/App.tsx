import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import StartHomepage from "./pages/StartHomepage";
import Page1Intro from "./pages/Page1Intro";
import Page2Logo from "./pages/Page2Logo";
import Page3Colors from "./pages/Page3Colors";
import Page4Typography from "./pages/Page4Typography";
import Page5GraphicElements from "./pages/Page5GraphicElements";
import Page6BrandStory from "./pages/Page6BrandStory";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "bld.ai Start";
        metaDescription = "";
        break;
      case "/page-4-typography":
        title = "bld.ai Brand Identity Guide";
        metaDescription = "";
        break;
      case "/page-3-colors":
        title = "bld.ai Brand Identity Guide";
        metaDescription = "";
        break;
      case "/page-2-logo":
        title = "bld.ai Brand Identity Guide";
        metaDescription = "";
        break;
      case "/page-1-intro":
        title = "bld.ai Brand Identity Guide";
        metaDescription = "";
        break;
      case "/page-5-graphic-elements":
        title = "bld.ai Brand Identity Guide";
        metaDescription = "";
        break;
      case "/page-6-brand-story":
        title = "bld.ai Brand Identity Guide"
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<StartHomepage />} />
      <Route path="/page-1-intro" element={<Page1Intro />} />
      <Route path="/page-2-logo" element={<Page2Logo />} />
      <Route path="/page-3-colors" element={<Page3Colors />} />
      <Route path="/page-4-typography" element={<Page4Typography />} />
      <Route
        path="/page-5-graphic-elements"
        element={<Page5GraphicElements />}
      />
    </Routes>
  );
}
export default App;

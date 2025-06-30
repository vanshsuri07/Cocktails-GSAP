import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center">
      <h1 className="text-4xl font-bold text-indigo-300 text-center mt-10">
        Mojito Cocktail Recipe
      </h1>
    </div>
  );
};

export default App;

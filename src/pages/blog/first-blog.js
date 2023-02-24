import PostLayout from "../../components/post/PostLayout";
import Heading1 from "@/components/post/Heading1";

const Home = () => {
  return (
    <PostLayout>
      <Heading1>Introduction to C++</Heading1>
      <p>
        C++ is a programming language created by{" "}
        <span className="font-bold">Bjarne Stroustrup</span> and his team at
        Bell Laboratories in 1979. Forty years later, it is one of the most
        widely used languages in the world; we can find C++ applications
        everywhere, from the bottom of the oceans to the surface of Mars.
      </p>
    </PostLayout>
  );
};

export default Home;

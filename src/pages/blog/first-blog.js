import PostLayout from "../../components/post/PostLayout";
import Heading1 from "@/components/post/Heading1";
import Heading2 from "@/components/post/Heading2";
import List from "@/components/post/List";
import Note from "@/components/post/Note";
import Highlight from "@/components/post/Highlight";

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
      <p>
        As the name implies, C++ was derived from the C language; Bjarne’s goal
        was to add object-oriented programming into C, a language well-respected
        for its portability and low-level functionality.
      </p>
      <p>So why learn C++? Among many other things:</p>
      <List>
        <li>It is fast and flexible.</li>
        <li>It is well-supported.</li>
        <li>It forces you to think in new and creative ways.</li>
      </List>
      <Note>
        <span className="font-bold">Note:</span> Don’t worry if some words don’t
        make much sense right now. We’ll learn about them in a bit!
      </Note>
      <Heading2>Hello World!</Heading2>
      <p>
        The terminal is the black panel on the right. It should be blank right
        now. The code in the text editor will print text out onto the terminal.
        More specifically, it will print the phrase{" "}
        <Highlight>Hello World!</Highlight>.
      </p>
      <p>
        The code inside our C++ file is a classic first step all new programmers
        take — they greet the world through the terminal!
      </p>
    </PostLayout>
  );
};

export default Home;

import Head from "next/head";
import PostLayout from "../../components/post/PostLayout";
import Heading1 from "@/components/post/Heading1";
import List from "@/components/post/List";
import Note from "@/components/post/Note";
import Highlight from "@/components/post/Highlight";
import CodeBlock from "@/components/post/CodeBlock";
import { code } from "@/components/codesnippets/first-blog";
import ScrollToTop from "@/components/post/ScrollToTop";

const Home = () => {
  return (
    <>
      <PostLayout>
        <Head>
          <title>Learn C++ | Hemanta Sundaray</title>
          <meta name="description" content="" key="desc" />
        </Head>
        <Heading1 publishedDate="25th Feb, 2023" updatedDate="25th Feb, 2023">
          Introduction to C++
        </Heading1>
        <h2 className="heading-2" id="Creator">
          Creator
        </h2>
        <p>
          C++ is a programming language created by{" "}
          <span className="font-bold">Bjarne Stroustrup</span> and his team at
          Bell Laboratories in 1979. Forty years later, it is one of the most
          widely used languages in the world; we can find C++ applications
          everywhere, from the bottom of the oceans to the surface of Mars.
        </p>
        <p>
          As the name implies, C++ was derived from the C language; Bjarne’s
          goal was to add object-oriented programming into C, a language
          well-respected for its portability and low-level functionality.
        </p>
        <p>So why learn C++? Among many other things:</p>
        <List>
          <li>It is fast and flexible.</li>
          <li>It is well-supported.</li>
          <li>It forces you to think in new and creative ways.</li>
        </List>
        <Note>
          Don’t worry if some words don’t make much sense right now. We’ll learn
          about them in a bit!
        </Note>
        <h2 className="heading-2" id="Hello World!">
          Hello World!
        </h2>
        <p>
          Take a look at the hello.cpp file in the code editor that is placed in
          the middle of the screen. It’s a C++ program!
        </p>
        <p>
          C++ programs are stored in files which usually have the file extension
          .cpp, which simply stands for “C Plus Plus”.
        </p>
        <p>
          The code inside our C++ file is a classic first step all new
          programmers take — they greet the world through the terminal!
        </p>
        <p>
          The terminal is the black panel on the right. It should be blank right
          now. The code in the text editor will print text out onto the
          terminal. More specifically, it will print the phrase{" "}
          <Highlight>Hello World!</Highlight>.
        </p>
        <p>
          The code inside our C++ file is a classic first step all new
          programmers take — they greet the world through the terminal!
        </p>
        <h2 className="heading-2" id="Output">
          Output
        </h2>
        <p>High five! We just got your first program to run.</p>
        <p>
          C++, like most programming languages, runs line by line, from top to
          bottom. Here is the structure of a C++ program:
        </p>
        <p>
          In between the curly braces is what we are going to focus on for now.
        </p>
        <CodeBlock language="jsx" highlight={[3, 4]}>
          {code}
        </CodeBlock>
        <List>
          <li>
            <Highlight>std::cout</Highlight> is the “character output stream”.
            It is pronounced “see-out”.
          </li>
        </List>
      </PostLayout>
      <ScrollToTop />
    </>
  );
};

export default Home;

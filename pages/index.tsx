import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [text, changeText] = useState("");

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    changeText(e.target.value);
  }

  function isUpperCase(char: string): boolean {
    return char === char.toUpperCase();
  }

  function prunoPernandesifyText(text: string): string {
    return text
      .split(/\s/)
      .filter((char) => char !== " ")
      .map(
        (word) =>
          `${isUpperCase(word.charAt(0)) ? "P" : "p"}${word.substring(
            1,
            word.length
          )}`
      )
      .join(" ");
  }

  return (
    <div>
      <Head>
        <title>Finished Player In My Book</title>
        <meta name="description" content="Finished Player In My Book" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={"centered-div vertical-stack"}>
          <textarea
            style={{
              minHeight: "200px",
              minWidth: "400px",
            }}
            value={text}
            onChange={(e) => handleTextChange(e)}
          ></textarea>
          <button onClick={() => changeText(prunoPernandesifyText(text))}>
            Finished player in my book.
          </button>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;

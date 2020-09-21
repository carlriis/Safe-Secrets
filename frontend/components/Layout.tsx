import Head from "next/head";
import Header from "./Header";
interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="contianer">
      <Head>
        <title>🔒 Safe Secrets</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Martel&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <style global jsx>
        {`
          div {
            font-size: 30px;
          }
          .text {
            font-family: "Martel", serif;
            font-size: 1em;
          }
          .button {
            font-family: "Martel", serif;
            color: black;
            font-size: 0.75em;
            border: black 2px solid;
            background-color: #ebebeb;
            padding: 1px 5px;
            margin: 30px;
            border-radius: 10px;
            box-shadow: 0px 11px 24px -8px rgba(0, 0, 0, 0.3);
          }
          .button:hover {
            box-shadow: 0px 11px 24px -8px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default Layout;

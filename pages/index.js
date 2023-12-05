import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hack Night @ UCLA</title>
        <meta name="description" content="get hacking @ ucla—code, art, music, and more!" />
        <meta name="og:image" content="https://hacknight-neelr.vercel.app/static/og.png" />
        <meta name="og:title" content="Hack Night @ UCLA" />
        <meta name="og:description" content="get hacking @ ucla—code, art, music, and more!" />
        <meta name="image" content="https://hacknight-neelr.vercel.app/static/og.png" />
      </Head>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 8px;
          background-color: hsl(10, 10%, 98%);
          display: flex !important;
          flex-direction: column !important;
        }
        body {
          margin-left: auto !important;
          margin-right: auto !important;
          max-width: 800px !important;
        }
        p,
        h1,
        h2 {
          color: hsl(10, 10%, 20%);
        }
        a {
          color: hsl(10, 80%, 50%);
        }
        img {
          max-width: 100%;
          width: 300px;
        }
      `}</style>
      <h1>Hack Night @ UCLA</h1>
      <img src="/static/og.png" />
      <p>
        Hack Night @ UCLA is a collective that aims to connect ambitious, kind,
        and nerdy young people through shared interests and values. Hopefully
        this could be a place to promote regular, consistent, and accessible
        gatherings for IRL interaction where members can forge low-pressure
        friendships and work collaboratively on projects. Members would ideally
        be encouraged to work on passion projects across various fields such as
        engineering, science, art, and more, with the support of a small,
        high-trust community.
      </p>
      <p>Free food + fun makers (cs+art+music+literally anything cool) ={">"} Saturday Nights @ UCLA</p>

      <h2>Sign Up!</h2>
      <form
        action="javascript:void(0);"
        onSubmit={async () => {
          await fetch("/api/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: document.querySelector("input[type=email]").value,
            }),
          });

          document.body.innerHTML =
            "<b>Thanks for signing up! We'll follow up winter quarter :)</b>";
        }}
      >
        <input type="email" placeholder="Email" />
        <input type="submit" value="Join the Email List!" />
      </form>

      <p>
        <i>
          <a target="_blank" href="https://www.socratica.info/">
            based off socratica.
          </a>{" "}
          |{" "}
          <a target="_blank" href="https://neelr.dev">
            me! (the organizer :o)
          </a>{" "}
          |{" "}
          <a target="_blank" href="https://linktr.ee/uclamakerspace">
            partnered w/ the makerspace @ ucla
          </a>
        </i>
      </p>
    </div>
  );
}

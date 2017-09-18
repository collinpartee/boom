export default {
    siteMap: [
        {
          name: "Home",
          pathname: "/home"
        },
        {
          name: "Screen1",
          pathname: "/screen1",
          children: [
            {
              name: "Link A",
              pathname: "screen1/a"
            },
            {
              name: "Link B",
              pathname: "screen1/b"
            },
            {
              name: "Link C",
              pathname: "screen1/c"
            }
          ]
        },
        {
          name: "Screen2",
          pathname: "/screen2"
        },
        {
          name: "Screen3",
          pathname: "/screen3"
        }
      ]
  };
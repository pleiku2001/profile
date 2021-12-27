// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    // {
    //   "userId": 1,
    //   "id": 1,
    //   "link": "/",
    //   "source": "/img1.svg"
    // },
    {
      userId: 2,
      id: 2,
      link: "/",
      source: "/img2.svg",
      name: "Diego Maradona",
    },
    {
      userId: 3,
      id: 3,
      link: "/",
      source: "/img3.svg",
      name: "Lionel Messi",
    },
    {
      userId: 4,
      id: 4,
      link: "/",
      source: "/img4.svg",
      name: "Johan Cruyff",
    },
    {
      userId: 5,
      id: 5,
      link: "/",
      source: "/img5.svg",
      name: "Cristiano Ronaldo",
    },
    {
      userId: 6,
      id: 6,
      link: "/",
      source: "/img6.svg",
      name: "Alfredo Di Stefano",
    },
    {
      userId: 7,
      id: 7,
      link: "/",
      source: "/img7.svg",
      name: "Franz Beckenbauer",
    },
  ]);
}

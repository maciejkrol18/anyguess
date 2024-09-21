<div align="center">

# anyguess

<br>

  ![nextjs 14](https://img.shields.io/badge/Next%2Ejs_14-black?logo=nextdotjs)
  ![threejs](https://img.shields.io/badge/Three%2Ejs-black?logo=threedotjs)
  ![leaflet](https://img.shields.io/badge/Leaflet-black?logo=leaflet&color=%2327591d)
  ![tailwind](https://img.shields.io/badge/Tailwind_CSS-turquoise?logo=tailwindcss&color=%230d6675)
  ![postgres](https://img.shields.io/badge/PostgreSQL-white?logo=postgresql&color=%23293247)
  ![typescript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&color=%2322548c)
  ![biome](https://img.shields.io/badge/Biome-blue?logo=biome&color=%23324c6b)

</div>

## 💡 About
anyguess will be a web app that allows you to create your own "geoguessr" style challenges with custom maps and landmarks from video games, for example

## 👷‍♂️ Architecture
I plan to develop this app using the **Layered Architecture** pattern. I was planning to use lucia-auth for authentication, but in the process of refactoring another app (which used next-auth and xata) to use drizzle, i managed to setup a fully working auth system using next-auth, drizzle-kit and xata in this repository (though ultimately i ditched xata). Next-auth is a great library which is very quick to setup at the cost of high levels of abstraction, so I'm not sure if it's the right fit for layered architecture, but I'm going to try it out.

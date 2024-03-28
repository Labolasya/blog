---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Labolasya's blog"
  text: "nice to meet you"
  tagline: Trying to learn to become a full-stack programmer
  image:
    src: /avatar.png
    alt: avatar
  actions:
    - theme: brand
      text: vitepress
      link: /vitepress/
    - theme: alt
      text: Nothing Here
      link: /

features:
  - title: 暂时还没有
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 想好
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 写些什么
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
@keyframes wiggle {
  0% {
    transform: translate(0, 0);
  }
  1% {
    transform: translate(-4px, 4px);
  }
  2% {
    transform: translate(0, 0);
  }
  3% {
    transform: translate(4px, -4px);
  }
  4% {
    transform: translate(0, 0);
  }

  10% {
    transform: translate(0, 0);
  }
  11% {
    transform: translate(-4px, -4px);
  }
  12% {
    transform: translate(0, 0);
  }
  13% {
    transform: translate(4px, 4px);
  }
  14% {
    transform: translate(0, 0);
  }
}
.image {
  animation: wiggle 2s infinite;
}
</style>
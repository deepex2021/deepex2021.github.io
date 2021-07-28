module.exports = {
  base: "/deepex-api/",
  markdown: {
    lineNumbers: true,
  },
   title: "API文档管理",
  head: [
    [
      "link",
      {
        rel: "icon",
        href:
          "https://deepexweb.s3-ap-northeast-1.amazonaws.com/upload/20210701185016801.png",
      },
    ],
  ],
  
  themeConfig: {
    logo: "/images/logo.png",
    // nav: [
    //   { text: "现货", link: "/" },
    // ],
    // 其它配置
    activeHeaderLinks: true,
    smoothScroll: true,
    sidebar: [
      {
        title: "介绍",
        collapsable: false,
        path: "/Introduction/",
      },
      {
        title: "快速开始",
        collapsable: true,
        path: "/Quickstart/",
        // children: ['/quickstart/'],
      },
      {
        title: "API接入说明",
        collapsable: false,
        path: "/apiintro/",
      },
      {
        title: "账户相关",
        collapsable: false,
        path: "/accounts/",
      },
      {
        title: "订单相关",
        collapsable: false,
        path: "/order/",
      },
      {
        title: "行情相关",
        collapsable: false,
        path: "/market/",
      },
      {
        title: "Websocket行情数据",
        collapsable: false,
        path: "/websocket/",
      },
    ],
  },
  // themeConfig: {
  //     sidebarDepth: 2,
  //     sidebar: 'auto'
  //   }
};

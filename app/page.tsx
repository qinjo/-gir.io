import Image from "next/image";

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border text-neutral-100 border-neutral-300 bg-neutral-100 p-2 text-base leading-4 underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function Tag({ name }: { name: string }) {
  return (
    <span className="items-center rounded border border-neutral-300 text-neutral-100 p-1">
      {name}
    </span>
  );
}

export default function Home() {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-8 mt-8 text-xl font-medium tracking-tighter">
        欢迎来到我的个人数字花园，很高兴遇见你！🤝
      </h1>
      <section>
        <div>
          <h1 className="text-xl">🏠 关于本站</h1> <br />
          这是用Hugo发布的博客，也是我开始长期维护的博客，我是想将其打造成个人数字花园，存放我的笔记、想法、见闻。
          我会不定期的更新有关于
          <Tag name={"我的生活"} />、<Tag name={"所见所闻"} />
          、涉及的
          <Tag name={"领域资讯"} />
          等等博客，我不是一个专业的写手，所以不见得博客会有深度，都是些个人浅薄的思考及经验，希望大家多多包函。
          同时也说一下自己为什么要开这个博客，最主要的原因是希望自己能通过写博客增长见闻、扩宽知识面，把自己学到东西分享出去，这既能帮助到别人，也能让自己的知识更牢固，这是通过
          <Badge href="https://book.douban.com/subject/35806965/">
            输出式阅读法
          </Badge>
          这本书学到的技巧。大家有兴趣可以去看一下，不一定每个人都能有效果，但至少多了解一种方式去学习知识，也是一种收获。
        </div>
        <div className="my-8 flex flex-row h-auto justify-between max-sm:flex-col">
          <div className="bg-gradient-to-tl from-[#C4F0FF] to-[#4881FF] p-0.5 flex-1 h-auto rounded mr-5 max-sm:mb-4">
            <div className="relative p-4 box-border rounded border-neutral-700 bg-neutral-800 h-full">
              <h1 className="text-xl mb-4">博主是谁</h1>
              <p>
                我是一名🎨设计师，也是一名💻前端工程师，目前是在职的。针对职业规划，正在往全栈工程师发展，目前还在努力中。
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-tl from-[#C4F0FF] to-[#4881FF] p-0.5 flex-1 h-auto rounded mr-5">
            <div className="relative p-4 box-border rounded border-neutral-700 bg-neutral-800 h-full">
              <h1 className="text-xl mb-4">兴趣爱好</h1>
              <ul>
                <li>
                  -
                  曾经是英雄联盟端游的玩家，但是年纪大了，就少了在电脑前玩耍的时间了，目前都在手游上玩；
                </li>
                <li>- 动漫爱好者；</li>
                <li>- 摄影关注者</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-xl mb-4">后续补充</h1>
        <p>
          对于规划，不久前在即刻上看到一个贴，是分享出一个针对开发者路线学习或者发展的工具网站--
          <Badge href="https://roadmap.sh">Roadmaps</Badge>
          网站介绍的是社区努力创建的路线图、指南和其他教育内容，以帮助指导开发人员选择路径并指导他们的学习。大家有兴趣，可以去看看。
          目前我的学习路线都是按照上面指引的路线，毕竟有指引好的路线，也好过比没有更好。
        </p>
      </section>
      <section>
        <h1 className="text-xl mb-4 my-5">联系我呀</h1>
        <p>随时欢迎大家来找我, 多跟我提提意见, 多交流。</p>
        <ul>
          <li className="my-2">
            <Badge href="https://m.okjike.com/users/3E16199A-C337-48DA-B5D9-6B6C60248BFE?ref=PROFILE_CARD&utm_source=user_card">
              即刻
            </Badge>
          </li>
          <li className="my-2">
            <Badge href="https://github.com/qinjo">Github</Badge>
          </li>
        </ul>
      </section>
    </div>
  );
}

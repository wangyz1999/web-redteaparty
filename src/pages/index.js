import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Advantage from '../components/advantage'
import Posts from '../components/posts'
import Record from '../components/record'
import {Helmet} from 'react-helmet';

import "./index.css"
import { Link } from 'gatsby'


function toggleDark() {
  const dark = document.querySelector("#dark");
  const html = document.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    document.body.style = 'background-color: rgb(250 250 249);';
  }
  else {
    html.classList.add("dark");
    document.body.style = 'background-color: rgb(64 64 64)';
  }
}

function getPlayers() {
  return fetch('https://api.mcsrvstat.us/2/mc.redteaparty.cn')
  .then((response) => response.json())
  .then((responseJson) => {
    var player_count = document.getElementById("online-count")
    player_count.textContent = responseJson['players']['online'];
    for (var i=0; i<responseJson['players']['list'].length; i++) {
      const para = document.createElement("div");
      para.className = 'player-head text-xl grid place-items-center'
      const node = document.createTextNode(responseJson['players']['list'][i]);
      para.appendChild(node);
      var img = document.createElement('img');
      img.src = 'https://mc-heads.net/avatar/' + responseJson['players']['list'][i] + '/50.png/';
      para.appendChild(img);
      const element = document.getElementById("online-player");
      element.appendChild(para);
  }
  })
  .catch((error) => {
    console.error(error);
  });
}

const IndexPage = () => {
  return (
    <div className='text-neutral-700 bg-stone-50 dark:bg-neutral-700 dark:text-stone-50'>
      <Helmet>
          <style>{'body { background-color: rgb(250 250 249); }'}</style>
      </Helmet>
      <Parallax pages={7} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={1}>
          <main>
            <div className='bg-stone-50 dark:bg-neutral-700 dark:text-stone-50 header flex flex-col justify-center items-center h-screen text-left'>
              <div className='relative space-y-6 px-4'>
                <img id='dark' className="h-10 w-10 lg:h-14 lg:w-14 absolute top-0 left-80 lg:left-xxl dark:invert" style={{transform: 'scaleX(-1)'}} src='./moon.webp' alt='' onClick={toggleDark}></img>
                <h1 className='text-8xl lg:text-xxl font-chi'>红茶会</h1>
                <p className='text-left text-2xl lg:text-4xl font-noto'>1.18.X 原版多人生存 | 高度自由 | 娱乐养老 | 精英怪</p>
                <p className='text-left text-2xl lg:text-4xl font-noto'>QQ群: 170912922</p>
              </div>
            </div>
          </main>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.9} >
        <section>
          <div class="skewed dark:invert"></div>
        </section>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} factor={3}>
        <section>
          <div class="skewed2 dark:brightness-50"></div>
        </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className='h-screen flex'>
            <div className='m-auto space-y-20'>
              <div className='online flex justify-center items-center space-x-3 text-white'>
                <p className='tracking-wider text-3xl'>服务器当前在线</p>
                <p className='text-2xl' id='online-count'>-</p>
                <p className='text-3xl'>人</p>
              </div>
              <div id='online-player' className='flex justify-center items-center space-x-10 space-y-5'></div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <div className='sec-adv mt-40 '>
            <h2 className='tracking-wider text-4xl md:text-6xl font-noto flex justify-center'>为什么选择红茶会</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 content-center mt-20 xl:mt-40 2xl:mx-56 xl:mx-40 lg:mx-20 md:mx-10 gap-y-20 gap-x-10'>
              <Advantage dscpt="专业"><p className='text-lg'>采用腾讯云VPS，专业主机Linux系统，完全自主搭建。10兆网络供您流畅低延迟游戏</p></Advantage>
              <Advantage dscpt="安全"><p>圈地系统供您自定义领地规则，如遭到破坏可用 CoreProtect 插件针对个人回档</p></Advantage>
              <Advantage dscpt="自由"><p>没有严格建造限制，可在主城边上造火柴屋，大范围领地，允许红石（前提是不卡服）</p></Advantage>
              <Advantage dscpt="活跃"><p>我们有最活跃的群聊，欢迎分享生活、游戏、学业日常。服务器只是个幌子，构建网友交流群才是真正目的</p></Advantage>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={1}>
          <div className='sec-records mt-xxl xl:mt-32 bg-stone-50 dark:bg-neutral-700 dark:text-stone-50'>
            <h2 className='tracking-wider text-4xl md:text-6xl font-noto flex justify-center'>记录你的生存瞬间</h2>
            <div className='flex flex-col items-center mt-20 xl:mt-40 space-y-32'>
              <Record text={"服务器平面地图帮您寻找理想地形"} image_src={"./map.webp"}>
                <Link to='https://map.redteaparty.cn'>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    卫星地图
                  </button>
                </Link>
              </Record>
              <Record text={"将你的截图分享给大家"} image_src={"./map.webp"}>
                <Link to='https://map.redteaparty.cn'>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    摄影展示
                  </button>
                </Link>
              </Record>
              <Record text={"用第一视角查看自己的建筑"} image_src={"./street.webp"}>
                <Link to='https://www.redteaparty.cn/street'>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    沉浸街景
                  </button>
                </Link>
              </Record>
              </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1}>
          <div className='sec-posts grid grid-cols-1 lg:grid-cols-2 content-center 2xl:mx-72 xl:mx-64 lg:mx-32 md:mx-10 gap-y-32 lg:gap-y-64 gap-x-72 bg-stone-50 dark:bg-neutral-700 dark:text-stone-50'>
            <Link to='https://docs.qq.com/doc/p/16c1f3992260daae4ef1024e2b9fd56744b9e871'><Posts dscpt="新手指南" img_src={"./book.webp"}></Posts></Link>
            <Link to='https://docs.qq.com/sheet/DVkhSZGJ6ck96a3lH'><Posts dscpt="禁封记录" img_src={"./barrier.webp"}></Posts></Link>
            <Link to='https://www.mcbbs.net/thread-1197683-1-1.html'><Posts dscpt="MCBBS中文论坛" img_src={"./wolf.webp"}></Posts></Link>
            <Link to='https://play.mcmod.cn/sv20184925.html'><Posts dscpt="MC百科" img_src={"./diamond.webp"}></Posts></Link>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
getPlayers()
export default IndexPage
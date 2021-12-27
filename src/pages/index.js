import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Advantage from '../components/advantage'
import Posts from '../components/posts'
import Record from '../components/record'

import "./index.css"
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div className='text-neutral-700 bg-stone-50'>
      <Parallax pages={7} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={1}>
          <main>
            <div className='header flex flex-col justify-center items-center h-screen text-left'>
              <div className='space-y-6 px-4'>
                <h1 className='text-8xl lg:text-xxl font-chi'>红茶会</h1>
                <p className='text-left text-2xl lg:text-4xl font-noto'>1.18.X 原版多人生存 | 高度自由 | 娱乐养老 | 精英怪</p>
                <p className='text-left text-2xl lg:text-4xl font-noto'>QQ群: 170912922</p>
              </div>
            </div>
          </main>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
        <section>
          <div class="skewed"></div>
        </section>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2}>
        <section>
          <div class="skewed2"></div>
        </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className='online flex justify-center items-center h-screen space-x-3 text-white'>
            <p className='tracking-wider text-3xl'>服务器当前在线</p>
            <p className='text-2xl'>-</p>
            <p className='text-3xl'>人</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <div className='sec-adv mt-40'>
            <h2 className='tracking-wider text-4xl md:text-6xl font-noto flex justify-center'>为什么选择红茶会</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 content-center mt-20 xl:mt-40 2xl:mx-56 xl:mx-40 lg:mx-20 md:mx-10 gap-y-20 gap-x-10'>
              <Advantage dscpt="专业"><p className='text-lg'>采用腾讯云VPS，专业主机Linux系统，完全自主搭建。10兆网络供您稳定低延迟</p></Advantage>
              <Advantage dscpt="安全"><p>圈地系统供您自定义领地规则，如遭到破坏可用CoreProtect针对个人回档</p></Advantage>
              <Advantage dscpt="自由"><p>没有严格建造限制，可在主城边上造火柴屋，允许红石（前提是不卡服）</p></Advantage>
              <Advantage dscpt="活跃"><p>游戏只是个幌子，构建网友交流群才是</p></Advantage>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={1}>
          <div className='sec-records mt-xxl xl:mt-32'>
            <h2 className='tracking-wider text-4xl md:text-6xl font-noto flex justify-center'>记录你的生存瞬间</h2>
            <div className='flex flex-col items-center space-y-32'>
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
          <div className='sec-posts grid grid-cols-1 lg:grid-cols-2 content-center 2xl:mx-72 xl:mx-64 lg:mx-32 md:mx-10 gap-y-32 lg:gap-y-64 gap-x-72'>
            <Posts dscpt="新手指南" img_src={"./wolf.webp"}></Posts>
            <Posts dscpt="更新日志" img_src={"./book.webp"}></Posts>
            <Posts dscpt="历来活动" img_src={"./diamond.webp"}></Posts>
            <Posts dscpt="禁封记录" img_src={"./barrier.webp"}></Posts>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default IndexPage
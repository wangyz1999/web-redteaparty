// Step 1: Import React
import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Advantage from '../components/advantage'
import Posts from '../components/posts'
import Record from '../components/record'

import "./index.css"
// Step 2: Define your component

const IndexPage = () => {
  return (
    <div className='text-neutral-700 bg-stone-50'>
      <Parallax pages={3} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={2}>
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
        <ParallaxLayer offset={1} speed={2}>
          <div className='online flex justify-center items-center h-screen space-x-3'>
            <p className='text-3xl'>服务器当前在线</p>
            <p className='text-2xl'>-</p>
            <p className='text-3xl'>人</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2}>
          <div className='sec-adv mt-40'>
            <h2 className='text-4xl md:text-6xl font-noto flex justify-center'>为什么选择我们</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 content-center mt-20 xl:mt-40 2xl:mx-56 xl:mx-40 lg:mx-20 md:mx-10 gap-y-20 gap-x-10'>
              <Advantage dscpt="专业"><p>采用腾讯云VPS，专业主机Linux系统，完全自主搭建。10兆网络供您稳定低延迟</p></Advantage>
              <Advantage dscpt="安全"><p>圈地系统供您自定义领地规则，如遭到破坏可用CoreProtect针对个人回档</p></Advantage>
              <Advantage dscpt="自由"><p>没有严格建造限制，可在主城边上造火柴屋，允许红石（前提是不卡服）</p></Advantage>
              <Advantage dscpt="活跃"><p>游戏只是个幌子，构建网友交流群才是</p></Advantage>
            </div>
          </div>
          <div className='sec-records h-screen mt-40'>
            <h2 className='text-6xl font-noto flex justify-center'>记录你的生存瞬间</h2>
            <Record dscpt="卫星图"><p>asdasd</p></Record>
            <Record dscpt="服务器摄影"><p>asdasd</p></Record>
            <Record dscpt="街景地图"><p>asdasd</p></Record>
          </div>
          <div className='sec-posts h-screen mt-40'>
            <Posts dscpt="新手指南"><p>asdasd</p></Posts>
            <Posts dscpt="更新日志"><p>asdasd</p></Posts>
            <Posts dscpt="历来活动"><p>asdasd</p></Posts>
            <Posts dscpt="禁封记录"><p>asdasd</p></Posts>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}


// Step 3: Export your component
export default IndexPage
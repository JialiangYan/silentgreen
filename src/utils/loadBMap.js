import React,{Component,useEffect} from 'react'

import ReactDOM from 'react-dom';
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmapgl';
import 'echarts/extension/bmap/bmap';

export function loadBMap(ak) {


  return new Promise(function (resolve, reject) {

      if (typeof window.BMap !== 'undefined') {
          resolve(window.BMap)
          return true
      }
      window.onBMapCallback = function () {
          resolve(window.BMap)
      }
      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.src =
          'https://api.map.baidu.com/api?v=2.0&ak=' + ak + '&__ec_v__=20190126&callback=onBMapCallback'
      script.onerror = reject
      document.head.appendChild(script)
  })
}
import React,{Component,useEffect} from 'react'

import ReactDOM from 'react-dom';
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmapgl';
export default function BMapPage() {
    // componentDidMount: {
    //     const map=new window.BMapGL.Map('container')
    //     const point=new window.BMapGL.Point(116.404,39.915)
    //     map.centerAndZoom(point,15)
    // }
  useEffect(() => {
    const map = new window.BMapGL.Map("container");
    const point = new window.BMapGL.Point(104.06, 30.67);
    map.centerAndZoom(point, 10);
  }, []);
  return (
      <div id='container' style={{height:'100vh'}}>

      </div>

  );
}


import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import XYZ from 'ol/source/XYZ'
import {
  ScaleLine,
  MousePosition,
  ZoomToExtent,
  //   ZoomSlider,
  FullScreen,
} from 'ol/control' // openlayers控件
import ZoomSlider from 'ol/control/ZoomSlider.js'
import { Map, View, Overlay, Feature } from 'ol'
import { fromLonLat, transform } from 'ol/proj'
import Point from 'ol/geom/Point.js'
import { Circle, Fill, Stroke, Style } from 'ol/style.js'
import { OSM, Vector, Vector as VectorSource } from 'ol/source.js'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js'
import { GPX, GeoJSON, IGC, KML, TopoJSON } from 'ol/format.js'
export default function MapContent() {
  const initMap = () => {
    const layer1 = new TileLayer({
      title: '底图',
      source: new XYZ({
        url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
        // url: 'https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
      }),
    })
    const layer2 = new TileLayer({
      title: '标注',
      source: new XYZ({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        // 谷歌url:  "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
      }),
    })

    // 添加地图控件
    const icontrols = [
      new ScaleLine(),
      new MousePosition({
        //   coordinateFormat: createStringXY(6), // 设置数据格式
        projection: 'EPSG:4326', // 设置空间参考系统为'EPSG:4326'
      }),
      new ZoomToExtent({
        extend: [110, 30, 160, 30],
      }),
      new ZoomSlider(),
      new FullScreen(),
    ]
    // 创建一个地图
    const map = new Map({
      layers: [layer1, layer2], // 加载的图层
      target: 'mymap', // 绑定div
      controls: icontrols, // 设置要显示的控件
      view: new View({
        center: [120.12, 30.16], // 中心位置
        zoom: 14, // 缩放登级
        // maxZoom: 18,
        projection: 'EPSG:4326', // 使用坐标系
      }),
    })
    //   const MyZoomToExtent = new ZoomToExtent({
    //     extend: [110, 30, 160, 30],
    //   })
    //   构建几何信息
    const point = new Feature({
      geometry: new Point([120.12, 30.16]),
    })
    let style = new Style({
      image: new Circle({
        radius: 10,
        fill: new Fill({
          color: '#ff2d51',
        }),
        stroke: new Stroke({
          width: 2,
          color: '#333',
        }),
      }),
    })
    point.setStyle(style)
    let source = new Vector({
      features: [point],
    })
    let layer = new VectorLayer({
      source,
    })
    map.addLayer(layer)
  }
  useEffect(() => {
    initMap()
  }, [])

  return (
    <div className={styles.root}>
      <div id="mymap" className="imap"></div>
    </div>
  )
}

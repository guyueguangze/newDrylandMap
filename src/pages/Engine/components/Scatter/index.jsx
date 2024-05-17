import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  MarkLineComponent,
} from 'echarts/components'
import { ScatterChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  MarkLineComponent,
  ScatterChart,
  CanvasRenderer,
  UniversalTransition,
])
export default function Scatter() {
  const ScatterChart = useRef()
  const markLineOpt = {
    animation: false,
    label: {
      formatter: 'y = 0.5 * x + 3',
      align: 'right',
    },
    lineStyle: {
      type: 'solid',
    },
    tooltip: {
      formatter: 'y = 0.5 * x + 3',
    },
    data: [
      [
        {
          coord: [0, 3],
          symbol: 'none',
        },
        {
          coord: [20, 13],
          symbol: 'none',
        },
      ],
    ],
  }
  const option = {
    xAxis: { gridIndex: 0, min: 0, max: 20 },
    yAxis: { gridIndex: 0, min: 0, max: 15 },
    series: [
      {
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68],
        ],
        type: 'scatter',
        markLine: markLineOpt,
      },
    ],
  }
  useEffect(() => {
    let myChart = echarts.getInstanceByDom(ScatterChart.current)
    if (myChart == null) {
      myChart = echarts.init(ScatterChart.current)
    }
    myChart.setOption(option)
  })
  return (
    <div style={{ width: '100%', height: '100%' }} ref={ScatterChart}></div>
  )
}

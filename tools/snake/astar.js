export default function astar(from, to, map) {

  let start_x = from[1];
  let start_y = from[0];

  let end_x = to[1];
  let end_y = to[0];

  let MAP = {
    arr: map,
    rows: map.length,
    cols: map[0].length,
  }

  var openList = [], // 开启列表
      closeList = [], // 关闭列表
      result = [], // 结果数组
      result_index; // 结果数组在开启列表中的序号

  openList.push({ x: start_x, y: start_y, G: 0 }); // 把当前点加入到开启列表中，并且G是0

  do {
    var currentPoint = openList.pop();
    closeList.push(currentPoint);
    var surroundPoint = SurroundPoint(currentPoint);
    for (var i in surroundPoint) {
      var item = surroundPoint[i]; // 获得周围的四个点
      if (
        item.x >= 0 && // 判断是否在地图上
        item.y >= 0 &&
        item.x < MAP.rows &&
        item.y < MAP.cols &&
        MAP.arr[item.x][item.y] != 1 && // 判断是否是障碍物
        !existList(item, closeList) // 判断是否在关闭列表中
      ) {
        // g 到父节点的位置
        // 上下左右位置的g等于10
        var g = currentPoint.G + 10;
        if (!existList(item, openList)) { // 如果不在开启列表中
          // 计算H，通过水平和垂直距离进行确定
          item['H'] = Math.abs(end_x - item.x) * 10 + Math.abs(end_y - item.y) * 10;
          item['G'] = g;
          item['F'] = item.H + item.G;
          item['parent'] = currentPoint;
          openList.push(item);
        } else { // 存在于开启列表中，比较目前的g值和之前的g的大小
          var index = existList(item, openList);
          // 如果当前点的g更小
          if (g < openList[index].G) {
            openList[index].parent = currentPoint;
            openList[index].G = g;
            openList[index].F = g + openList[index].H;
          }
        }
      }
    }
    // 如果开启列表空了，没有通路，结果为空
    if (openList.length == 0) {
      break;
    }
    openList.sort(sortF); // 这一步是为了循环回去的时候，找出 F 值最小的, 将它从 "开启列表" 中移掉
  } while (!(result_index = existList({ x: end_x, y: end_y }, openList)));

  // 判断结果列表是否为空
  if (!result_index) {
    result = [];
  } else {
    var currentObj = openList[result_index];
    do {
      // 把路径节点添加到result当中
      result.unshift([
        currentObj.y,
        currentObj.x
      ]);
      currentObj = currentObj.parent;
    } while (currentObj.x != start_x || currentObj.y != start_y);
  }
  result.unshift([
    start_y,
    start_x
  ])
  return result;

}

// 用F值对数组排序
function sortF(a, b) {
  return b.F - a.F; // 注意这里应该使用从小到大排序，即a.F - b.F
}

// 获取周围四个点的值
function SurroundPoint(curPoint) {
  var x = curPoint.x, y = curPoint.y;
  return [
    { x: x, y: y - 1 }, // 上
    { x: x + 1, y: y }, // 右
    { x: x, y: y + 1 }, // 下
    { x: x - 1, y: y }  // 左
  ];
}

// 判断点是否存在在列表中，是的话返回的是序列号
function existList(point, list) {
  for (var i in list) {
    if (point.x == list[i].x && point.y == list[i].y) {
      return i;
    }
  }
  return false;
}
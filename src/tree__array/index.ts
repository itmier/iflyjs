/*
 * @Author: Tmier
 * @Date: 2024-04-09 21:28:16
 * @LastEditTime: 2024-04-09 21:30:29
 * @LastEditors: Tmier
 * @Description:
 *
 */
/**
 * 将树结构数组转换为非树结构数组。
 * @param tree 表示树结构的数组，默认为空数组。每个元素都包含一个可选的子节点数组。
 * @param childField 指示子节点数组的字段名，默认为'children'。该字段用于查找节点的子节点。
 * @returns 返回一个非树结构的数组，其中不包含子节点数组。
 */
function tree__array(tree: any[] = [], childField = 'children') {
  const treeNodes: any[] = [] // 用于存储待处理的节点
  const res: any[] = [] // 存储转换后的非树结构数组

  // 将根节点添加到待处理节点数组中
  for (const rootNode of tree) {
    treeNodes.push(rootNode)
  }

  // 循环处理所有节点，直到所有节点都被移出树节点数组
  while (treeNodes.length > 0) {
    const node = treeNodes.shift() // 移除并获取树节点数组的第一个节点

    // 如果当前节点有子节点，则将子节点添加到树节点数组中，以待后续处理
    if (node[childField] && node[childField].length > 0) {
      for (const childNode of node[childField]) {
        treeNodes.push(childNode)
      }
    }

    // 移除节点的子节点数组属性，准备将节点添加到结果数组中
    delete node[childField]
    res.push(node) // 将处理过的节点添加到结果数组
  }

  return res // 返回转换后的数组
}

export default tree__array

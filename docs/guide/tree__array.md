# tree\_\_array - 将树结构转换成扁平数组

## 使用

```js
import { tree__array } from 'iflyjs'
const list = []
const result = tree__array(list)
```

## Demo

```js
const testData = [
  {
    name: '主页',
    id: '1',
    parentId: '0',
    children: []
  },
  {
    name: '学习天地',
    id: '2',
    parentId: '0',
    children: [
      {
        name: '前端',
        id: '3',
        parentId: '2',
        children: [
          {
            name: 'JavaScript',
            id: '5',
            parentId: '3',
            children: [
              {
                name: 'Vue',
                id: '6',
                parentId: '5',
                children: []
              },
              {
                name: 'React',
                id: '7',
                parentId: '5',
                children: []
              }
            ]
          }
        ]
      },
      {
        name: '后端',
        id: '4',
        parentId: '2',
        children: [
          {
            name: 'Node',
            id: '8',
            parentId: '4',
            children: []
          },
          {
            name: 'Java',
            id: '9',
            parentId: '4',
            children: []
          }
        ]
      }
    ]
  },
  {
    name: '关于我们',
    id: '10',
    parentId: '0',
    children: []
  }
]
const res = tree__array(testData)
console.log(res)
```

## 输出

```json
[
  {
    "name": "主页",
    "id": "1",
    "parentId": "0"
  },
  {
    "name": "学习天地",
    "id": "2",
    "parentId": "0"
  },
  {
    "name": "关于我们",
    "id": "10",
    "parentId": "0"
  },
  {
    "name": "前端",
    "id": "3",
    "parentId": "2"
  },
  {
    "name": "后端",
    "id": "4",
    "parentId": "2"
  },
  {
    "name": "JavaScript",
    "id": "5",
    "parentId": "3"
  },
  {
    "name": "Node",
    "id": "8",
    "parentId": "4"
  },
  {
    "name": "Java",
    "id": "9",
    "parentId": "4"
  },
  {
    "name": "Vue",
    "id": "6",
    "parentId": "5"
  },
  {
    "name": "React",
    "id": "7",
    "parentId": "5"
  }
]
```

## 源码

```ts
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
```

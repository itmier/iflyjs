# array\_\_tree - 将扁平数组转换成树结构

## 使用

```js
import { array__tree } from 'iflyjs'
const list = []
const result = array__tree(list)
```

## Demo

```js
const list = [
  {
    name: '主页',
    id: '1',
    parentId: '0'
  },
  {
    name: '学习天地',
    id: '2',
    parentId: '0'
  },
  {
    name: '前端',
    id: '3',
    parentId: '2'
  },
  {
    name: '后端',
    id: '4',
    parentId: '2'
  },
  {
    name: 'JavaScript',
    id: '5',
    parentId: '3'
  },
  {
    name: 'Vue',
    id: '6',
    parentId: '5'
  },
  {
    name: 'React',
    id: '7',
    parentId: '5'
  },
  {
    name: 'Node',
    id: '8',
    parentId: '4'
  },
  {
    name: 'Java',
    id: '9',
    parentId: '4'
  },
  {
    name: '关于我们',
    id: '10',
    parentId: '0'
  }
]
const newTree = array__tree(list, {
  keyField: 'id',
  childField: 'children',
  parentField: 'parentId'
})
console.log('newTree', newTree)
```

## 输出

```json
[
  {
    "name": "主页",
    "id": "1",
    "parentId": "0",
    "children": []
  },
  {
    "name": "学习天地",
    "id": "2",
    "parentId": "0",
    "children": [
      {
        "name": "前端",
        "id": "3",
        "parentId": "2",
        "children": [
          {
            "name": "JavaScript",
            "id": "5",
            "parentId": "3",
            "children": [
              {
                "name": "Vue",
                "id": "6",
                "parentId": "5",
                "children": []
              },
              {
                "name": "React",
                "id": "7",
                "parentId": "5",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "后端",
        "id": "4",
        "parentId": "2",
        "children": [
          {
            "name": "Node",
            "id": "8",
            "parentId": "4",
            "children": []
          },
          {
            "name": "Java",
            "id": "9",
            "parentId": "4",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "name": "关于我们",
    "id": "10",
    "parentId": "0",
    "children": []
  }
]
```

## 源码

```ts
const defaultOptions = {
  keyField: 'id',
  childField: 'children',
  parentField: 'pid',
  emptyIsNull: false
}
interface IArray__TreeOptions {
  keyField?: string
  childField?: string
  parentField?: string
  emptyIsNull?: boolean // 如果子值为空是否设置为null, 默认true, 默认子值为 null, 如果为false, 空子值为 []
}
/**
 * 将扁平数组转换成树结构
 * @param list
 * @param options
 * @returns
 */
function array__tree(list: any[] = [], options: IArray__TreeOptions = {}) {
  const { keyField, childField, parentField, emptyIsNull } = {
    ...defaultOptions,
    ...options
  }
  let tree: any[] = []
  const record: any = {}
  list.forEach((item) => {
    if (!record[item[keyField]]) {
      record[item[keyField]] = {
        ...item,
        [childField]: emptyIsNull ? null : []
      }
    }

    if (record[item[parentField]]) {
      if (!record[item[parentField]][childField]) {
        record[item[parentField]][childField] = []
      }
      record[item[parentField]][childField].push(record[item[keyField]])
    } else {
      if (item[parentField]) {
        record[item[parentField]] = {
          [keyField]: item[parentField],
          [childField]: [record[item[keyField]]]
        }
      }
    }
  })

  Object.keys(record).forEach((recordKey) => {
    if (!record[recordKey][parentField]) {
      tree.push(record[recordKey])
    }
  })

  if (tree.length === 1 && tree[0][parentField] === undefined) {
    tree = tree?.[0]?.[childField] || []
  }
  return tree
}
```

/*
 * @Author: Tmier
 * @Date: 2024-04-01 21:12:07
 * @LastEditTime: 2024-04-11 22:18:28
 * @LastEditors: Tmier
 * @Description:
 *
 */
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
export default array__tree

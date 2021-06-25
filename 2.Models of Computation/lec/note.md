# 2.Models of Computation
## 基础模型
 - 列表模型(array,list)
 - 指针模型(object,map,hashTable)

### 复杂度
 - 列表
   - get O(1)
   - set O(1)
   - append O(1) (table doubling)
   - length O(1)
   - sort O(nlogn)
 - 指针
   - get O(1)
     - 仅当key较少时成立,随机成立
   - set O(1)
 - long
   - + O(|x|+|y|)
   - x O(pow(|x|+|y|, lg3))
 - heap

## 文档距离
```
The fox is in the hat
{
  the: 2,
  fox: 1,
  is: 1,
  in: 1,
  hat: 1
}

The fox is outside
{
  the: 1,
  fox: 1,
  is: 1,
  outside: 1
}
inner product = 2*1 + 1*1 + 1*1 = 4

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l1Value = getNumber(l1);
  const l2Value = getNumber(l2);

  const total = l1Value + l2Value;
  const resultListNode = BigInt(total)
    .toString()
    .split('')
    .reduce((node, item) => {
      if (node === null) {
        node = { val: item, next: null };
      } else {
        node = { val: item, next: node };
      }
      return node;
    }, null);
  return resultListNode;
};

function getNumber(listNode) {
  let i = 0;
  let total = 0;
  while (listNode !== null) {
    const num = listNode.val * Math.pow(10, i);
    total = total + num;
    listNode = listNode.next;
    i++;
  }
  return total;
}

const number1 = { val: 1, next: { val: 0, next: { val: 0, next: { val: 1, next: null } } } };
const number2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
const number3 = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 0,
      next: {
        val: 0,
        next: {
          val: 0,
          next: {
            val: 0,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 0,
                    next: {
                      val: 0,
                      next: {
                        val: 0,
                        next: {
                          val: 0,
                          next: {
                            val: 0,
                            next: {
                              val: 0,
                              next: {
                                val: 0,
                                next: {
                                  val: 0,
                                  next: {
                                    val: 0,
                                    next: {
                                      val: 0,
                                      next: {
                                        val: 0,
                                        next: {
                                          val: 0,
                                          next: {
                                            val: 0,
                                            next: {
                                              val: 0,
                                              next: {
                                                val: 0,
                                                next: {
                                                  val: 0,
                                                  next: {
                                                    val: 0,
                                                    next: {
                                                      val: 0,
                                                      next: {
                                                        val: 0,
                                                        next: {
                                                          val: 0,
                                                          next: { val: 0, next: { val: 1, next: null } },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

console.log(addTwoNumbers(number3, number2));

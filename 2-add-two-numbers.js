// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers1 = function (l1, l2) {
  const l1Value = getNumber(l1);
  const l2Value = getNumber(l2);

  const total = l1Value + l2Value;
  const temp = total.toString();
  const resultListNode = total
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
  let total = BigInt(0);
  while (listNode !== null) {
    const num = BigInt(listNode.val) * BigInt(10) ** BigInt(i);
    total = total + num;
    listNode = listNode.next;
    i++;
  }
  return total;
}

var addTwoNumbers = function (l1, l2) {
  let result = null;
  let nextElement;
  let carry = 0;
  while (l1 || l2 || carry) {
    l1Value = l1 && l1.val ? l1.val : 0;
    l2Value = l2 && l2.val ? l2.val : 0;
    const total = l1Value + l2Value + carry;
    let value = null;
    if (total >= 10) {
      value = total % 10;
      carry = total / 10;
    } else {
      value = total;
    }
    if (nextElement === null) {
      const next = null;
      nextElement = { val: value, next: next };
      nextElement = next;
    } else {
      const next = null;
      nextElement = next;
      result = { val: value, next: next };
    }
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return result;
};

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

console.log(addTwoNumbers(number1, number2));

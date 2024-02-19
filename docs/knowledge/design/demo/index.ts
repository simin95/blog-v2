/**
 *
 *
 * @param {string} params
 * @param {number} [times]
 * @returns {number}
 */
function show(params: string, times?: number): number {
  console.log(params);
  return 233;
}

/**
 *
 * 一个数据接口
 * @interface talk
 */
interface talk {
  start: string;
  end: string;
  result: boolean;
}

/**
 *
 *
 * @param {talk} hello
 * @returns {boolean}
 */
function metting(hello?: talk): boolean {
  return hello.result;
}
